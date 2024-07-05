import express from "express";
import { signup } from "../controller/auth.controller.js";

const router = express.Router();

// Route to handle user signup
router.post("/signup", signup);

export default router;
