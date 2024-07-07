import express from "express";
import { createUser, updateUser, delateUser, SignOut } from "../controller/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";

const router = express.Router();

// Routes
router.get('/test', createUser);

router.put('/update/:id', verifyUser, updateUser);
router.delete('/delete/:id', verifyUser, delateUser);
router.post('/SignOut', SignOut);
export default router;

