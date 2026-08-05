import AuthService from "../Services/auth.service.js";

class AuthController {
    static async register(req, res, next) {
        try {
            const user = await AuthService.register(req);
            res.status(201).json(user);    
        } catch (error) {
            next(error);
        }
    }
}

export default AuthController;