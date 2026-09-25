import express from "express";
import AuthController from "../Controllers/auth.controller.js";
import { validateLogin, validateRegister } from "../Validators/auth.validator.js";
import upload from "../Middleware/upload.middleware.js";
import { loginLimiter, registerLimiter } from "../Middleware/rateLimiter.js";

const router = express.Router();

router.post("/login", loginLimiter, validateLogin, AuthController.login);
router.post("/register",registerLimiter,upload.single("image"),validateRegister, AuthController.register);
router.post("/refresh-token",AuthController.refreshToken);
router.post("/logout",AuthController.logout);

export default router;