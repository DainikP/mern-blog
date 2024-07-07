import express from "express";
import { createUser, updateUser, delateUser } from "../controller/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

// Routes
router.get('/test', createUser);

router.put('/update/:id', verifyUser, updateUser);
router.delete('/delete/:id', verifyUser, delateUser);
export default router;

