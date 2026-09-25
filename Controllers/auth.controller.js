import UserRepository from "../Repositories/user.repository.js";
import AuthService from "../Services/auth.service.js";
import { generateAccessToken } from "../Utils/jwt.js";
import jwt from "jsonwebtoken";
import AuditLogRepository from "../Repositories/auditLog.repository.js";
import { AUDIT_ACTIONS } from "../Utils/auditActions.js";
import { getIpAddress } from "../Utils/getIp.js";
import { UAParser } from "ua-parser-js";

class AuthController {
    static async register(req, res, next) {
        try {
            const user = await AuthService.register(req);
            if (!user.success) {
                return res.status(409).json(user);
            }
            return res.status(201).json(user);    
        } catch (error) {
            next(error);
        }
    }
    static async login(req, res, next) {
        const ip        = getIpAddress(req);
        const parser = new UAParser(req.headers["user-agent"]);
        const userAgent = parser.getResult();
        const email     = req.body.email;
        try {
            const response = await AuthService.login(req);
            if (!response.success) {
                await AuditLogRepository.create({
                    userId:null,
                    email:email,
                    action:AUDIT_ACTIONS.LOGIN_FAILED,
                    ipAddress:ip,
                    userAgent:userAgent,
                    details:{
                        reason: response.message
                    }
                });
                return res.status(401).json(response);
            }
            const responseUpdateToken = await AuthService.updateRefreshToken(response.user.id, response.token.refreshToken);
            if (!responseUpdateToken.success) {
                return res.status(500).json({ success: false, message: responseUpdateToken.message,token: null, user: null });
            }
            await AuditLogRepository.create({
                userId:    response.user.id,
                email:     email,
                action:    AUDIT_ACTIONS.LOGIN_SUCCESS,
                ipAddress: ip,
                userAgent: userAgent,
                details:   { role: response.user.role }
            });
            res.cookie("refreshToken", response.token.refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
            });
            res.status(200).json({
                success: true,
                message: response.message,
                token: response.token.accessToken,
                user: response.user
            });
        } catch (error) {
            await AuditLogRepository.create({
                userId:    null,
                email:     email,
                action:    AUDIT_ACTIONS.LOGIN_FAILED,
                ipAddress: ip,
                userAgent: userAgent,
                details:   { reason: "Internal server error" }
            });
            next(error);
        }
    }
    static async refreshToken(req, res, next) {
        try {
            const refreshToken = req.cookies?.refreshToken;
            if (!refreshToken) {
                return res.status(401).json({ success: false, token:null, user: null, message: "No refresh token" });
            }
            let decoded;
            try {
                decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
            }
            catch {
                return res.status(401).json({ success: false, token:null, user: null, message: "Refresh token expired or invalid" });
            }
            const userResult = await UserRepository.findUserById(decoded.userId);
            if (!userResult.success || !userResult.user) {
                return res.status(401).json({ success: false, token:null, user: null, message: "User not found" });
            }
            if (userResult.user.refresh_token !== refreshToken) {
                return res.status(401).json({ success: false, token:null, user: null, message: "Token mismatch" });
            }
            const newAccessToken = generateAccessToken(userResult.user);
            return res.status(200).json({
                success: true,
                token: newAccessToken,
                user: {
                    id: userResult.user.id,
                    fullName: userResult.user.full_name,
                    email: userResult.user.email,
                    mobile: userResult.user.mobile_no,
                    role: userResult.user.role,
                    status: userResult.user.status,
                    profileImage: userResult.user.profile_picture
                }
            });
        } catch (error) {
            next(error);
        }
    }
    static async logout(req, res, next) {
        const ip = getIpAddress(req);
        const parser = new UAParser(req.headers["user-agent"]);
        const userAgent = parser.getResult();
        try {
            const refreshToken = req.cookies?.refreshToken;
            let userId
            if (refreshToken) {
                try {
                    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
                    userId = decoded.userId;
                    await UserRepository.updateRefreshToken(userId, null);
                }
                catch {
                    console.error("Error verifying refresh token during logout");
                }
            }
            await AuditLogRepository.create({
                userId: userId,
                action: AUDIT_ACTIONS.LOGOUT,
                ipAddress: ip,
                userAgent: userAgent,
            });
            res.clearCookie("refreshToken", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict"
            });
            return res.status(200).json({ success: true, message: "Logged out successfully" });
        } catch (error) {
            next(error);
        }
    }    
}

export default AuthController;