import express from "express";
import {
  createUserController,
  getAllUserController,
  getUserByIdController,
  updateUserController,
  deleteUserController
} from "../controllers/userController.js";

const router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/users", getAllUserController);

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: MongoDB ObjectId of the user
 *         schema:
 *           type: string
 *           pattern: '^[a-fA-F0-9]{24}$'
 *           example: 689b3314253e80893ccf5cc2
 *     responses:
 *       200:
 *         description: User data
 */
router.get("/users/:id", getUserByIdController);

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               departement:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/users", createUserController);

/**
 * @openapi
 * /users/{id}:
 *   put:
 *     summary: Update a user
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: MongoDB ObjectId of the user
 *         schema:
 *           type: string
 *           pattern: '^[a-fA-F0-9]{24}$'
 *           example: 689b908258c8aaddeb5b9231
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               departement:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.put("/users/:id", updateUserController);

/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Deleted
 */
router.delete("/users/:id", deleteUserController);

export default router;
