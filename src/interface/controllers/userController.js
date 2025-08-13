import { MongodbUserRepository } from "../../infrastructure/repositories/userRepository.js";
import { UserValidator } from "../../domain/users/userValidator.js";
import { CreateUser } from "../../usecases/users/createUser.js";
import { GetAllUser } from "../../usecases/users/getAllUser.js";
import { GetUserById } from "../../usecases/users/getUserById.js";
import { UpdateUser } from "../../usecases/users/updateUser.js";
import { DeleteUser } from "../../usecases/users/deleteUser.js";

const userRepository = new MongodbUserRepository();
const userValidator = new UserValidator(userRepository);
const getAll = new GetAllUser(userRepository);
const getUserById = new GetUserById(userRepository);
const createUser = new CreateUser(userRepository, userValidator);
const updateUser = new UpdateUser(userRepository, userValidator);
const deleteUser = new DeleteUser(userRepository);

export const createUserController = async (req, res) => {
    try {
        const user = await createUser.execute(req.body); 
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const getAllUserController = async (req, res) => {
    try {
        const users = await getAll.execute(); 
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const getUserByIdController = async (req, res, next) => {
    try {
        const user = await getUserById.execute(req.params); 
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        next(error);
    }
};

export const updateUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await updateUser.execute({ id, ...req.body });
        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};



export const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await deleteUser.execute({ id }); 
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

