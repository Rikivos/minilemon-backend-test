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

export const getAllUserController = async (res, next) => {
    try {
        const getAllUsers = await getAll.execute(); 
        res.status(200).json({ success: true, data: getAllUsers });
    } catch (error) {
        next(error);
    }
};

export const getUserByIdController = async (req, res, next) => {
    try {
        const getUserById = await getUserById.execute(req.params); 
        res.status(200).json({ success: true, data: getUserById });
    } catch (error) {
        next(error);
    }
};

export const createUserController = async (req, res, next) => {
    try {
        const createUser = await createUser.execute(req.body); 
        res.status(201).json({ success: true, data: createUser });
    } catch (error) {
        next(error);
    }
};

export const updateUserController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = await updateUser.execute({ id, ...req.body });
        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        next(error);
    }
};



export const deleteUserController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteUsers = await deleteUser.execute({ id }); 
        res.status(200).json({ success: true, data: deleteUsers });
    } catch (error) {
        next(error);
    }
};

