import express from "express";
import {
  loginUser,
  signup,
  logout,
  getProfile,
} from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);
router.post("/logout", logout);

export default router;
