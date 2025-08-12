export class DeleteUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({ id } = {}) {
        if (!id) throw new Error("id is required");

        const deletedUser = await this.userRepository.delete(id);
        if (!deletedUser) throw new Error("User not found");

        return deletedUser;
    }
}
