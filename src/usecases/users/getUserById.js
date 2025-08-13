import { NotFoundError } from "../../domain/errors/notFoundError.js";

export class GetUserById {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(params) {
        const user = await this.userRepository.getById(params.id);
        if (!user) {
            throw new NotFoundError ("User not found");
        }
        return await this.userRepository.getById(params.id);
    }

}