import express from "express";
import {
  login,
  logout,
  profile,
  register,
} from "../controllers/userController.js";
import { protect } from "../middlewares/index.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", protect, logout);

// Protected Route
router.get("/profile", protect, profile);

export default router;
