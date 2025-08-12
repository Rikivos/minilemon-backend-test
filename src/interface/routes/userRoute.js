import express from "express";
import { createUserController, getAllUserController, updateUserController } from "../controllers/userController.js";


const router = express.Router();

router.get("/users", getAllUserController);
router.post("/users", createUserController);
router.put("/users/:id", updateUserController);

export default router;