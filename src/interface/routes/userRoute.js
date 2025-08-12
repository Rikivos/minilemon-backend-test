import express from "express";
import { createUserController, getAllUserController, getUserByIdController, updateUserController, deleteUserController } from "../controllers/userController.js";


const router = express.Router();

router.get("/users", getAllUserController);
router.get("/users/:id", getUserByIdController);
router.post("/users", createUserController);
router.put("/users/:id", updateUserController);
router.delete("/users/:id", deleteUserController);

export default router;