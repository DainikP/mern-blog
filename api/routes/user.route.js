import express from "express";
import { createUser } from "../controller/user.controller.js";

const router = express.Router();

// Route to create a user
router.post("/test", createUser);

export default router;
