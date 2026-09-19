import express from "express";
import { login, profile, register } from "../controllers/userController.js";
import { protect } from "../middlewares/index.js";

const router = express.Router();

router.get("/register", register);
router.get("/login", login);
router.get("/profile", protect, profile);

// Protected Route
router.get("/profile", protect, profile);

export default router;
