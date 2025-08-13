import { NotFoundError } from "../../domain/errors/notFoundError.js";
export class DeleteUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({ id } = {}) {
        const deletedUser = await this.userRepository.delete(id);
        if (!deletedUser) throw new NotFoundError("User not found");

        return deletedUser;
    }
}
