import { MongodbUserRepository } from "../../infrastructure/repositories/userRepository.js";
import { CreateUser } from "../../usecases/users/createUser.js";

const userRepository = new MongodbUserRepository();
const createUser = new CreateUser(userRepository);

export const createUserController = async (req, res) => {
    try {
        const user = await createUser(req.body); // langsung panggil function
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
