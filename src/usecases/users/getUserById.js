export class GetUserById {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(params) {
        if (!params || !params.id) {
            throw new Error("id is required");
        }
        return await this.userRepository.getById(params.id);
    }

}