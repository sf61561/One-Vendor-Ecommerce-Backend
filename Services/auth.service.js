import UserRepository from "../Repositories/user.repository.js";
import { comparePassword, hashPassword } from "../Utils/bcrypt.js";
import { uploadToCloudinary } from "../Utils/cloudinaryUpload.js";
import { generateAccessToken, generateRefreshToken } from "../Utils/jwt.js";
import cloudinary from "../Config/cloudinary.js";

class AuthService {
    static async register(req) {
        try {
            const userData = req.body;
            const image = req.file;
            const isExistingUser = await UserRepository.findUserByEmail(userData.email);
            if(isExistingUser.success && isExistingUser.user) {
                return { success: false, message: "User already exists", user: null };
            }
            else if(!isExistingUser.success) {
                return { success: false, message: "Error checking existing user", user: null };
            }
            const hashed_password = await hashPassword(userData.password);
            
            let profileImageUrl = null;
            let profileImagePublicId = null;

            if (image) {
                const result = await uploadToCloudinary(
                    image.buffer
                );

                profileImageUrl = result.secure_url;
                profileImagePublicId = result.public_id;
            }

            const newUser = {
                full_name: userData.fullName,
                email: userData.email,
                mobile: userData.mobile,
                password: hashed_password,
                profile_picture: profileImageUrl,
                profile_picture_public_id: profileImagePublicId
            }
            const createdUser = await UserRepository.createUser(newUser);
            
            if (createdUser.success === true) {
                return { success: true, message: createdUser.message, user: createdUser.user };
            }
            if (!createdUser.success && profileImagePublicId) {
                await cloudinary.uploader.destroy(profileImagePublicId);
            }
            return { success: false, message: createdUser.message, user: null };
        }
        catch (error) {
            return { success: false, message: "Error registering user", user: null };
        }
    }
    static async login(req) {
        try {
            const { email, password } = req.body;
            const user = await UserRepository.findUserByEmail(email);
            if (!user.success || !user.user) {
                return { success: false, message: "Invalid email or password", token: null, user: null };
            }
            const ispasswordValid = await comparePassword(password, user.user.password_hash);
            if (!ispasswordValid) {
                return { success: false, message: "Invalid email or password", token: null, user: null };
            }
            const accessToken = generateAccessToken(user.user);
            const refreshToken = generateRefreshToken(user.user);
            return {
                success: true,
                message: "Login successful",
                token:{
                    accessToken,
                    refreshToken
                },
                user: {
                    id: user.user.id,
                    fullName: user.user.full_name,
                    email: user.user.email,
                    mobile: user.user.mobile_no,
                    role: user.user.role,
                    status: user.user.status,
                    profileImage: user.user.profile_picture
                }
            }
        }
        catch (error) {
            return { success: false, message: "Error logging in", token: null, user: null };
        }
    }
    static async updateRefreshToken(userId, refreshToken) {
        try{
            const response = await UserRepository.updateRefreshToken(userId, refreshToken);
            if(!response.success){
                return { success: false, message: "Error updating refresh token" };
            }
            return { success: true, message: "Refresh token updated successfully" };
        }
        catch (error) {
            return { success: false, message: "Error updating refresh token" };
        }
    }
}

export default AuthService;