import { MongodbUserRepository } from "../../infrastructure/repositories/userRepository.js";
import { CreateUser } from "../../usecases/users/createUser.js";
import { getAllUser } from "../../usecases/users/getAllUser.js";
import { GetUserById } from "../../usecases/users/getUserById.js";
import { UpdateUser } from "../../usecases/users/updateUser.js";
import { DeleteUser } from "../../usecases/users/deleteUser.js";

const userRepository = new MongodbUserRepository();
const createUser = CreateUser(userRepository);
const getAll =  getAllUser(userRepository);
const getUserById = GetUserById(userRepository);
const updateUser = UpdateUser(userRepository);
const deleteUser = DeleteUser(userRepository);

export const createUserController = async (req, res) => {
    try {
        const user = await createUser(req.body); 
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const getAllUserController = async (req, res) => {
    try {
        const users = await getAll(); 
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const getUserByIdController = async (req, res) => {
    try {
        const user = await getUserById(req.body); 
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const updateUserController = async (req, res) => {
    try {
        const user = await updateUser(req.body); 
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const deleteUserController = async (req, res) => {
    try {
        const user = await deleteUser(req.body); 
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

