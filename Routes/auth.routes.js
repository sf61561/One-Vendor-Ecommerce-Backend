import express from "express";
import AuthController from "../Controllers/auth.controller.js";
import { validateRegister } from "../Validators/auth.validator.js";
import upload from "../Middleware/upload.middleware.js";

const router = express.Router();

router.post("/register",upload.single("image"), AuthController.register);

export default router;