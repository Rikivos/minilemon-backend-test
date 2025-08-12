export class UpdateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({ id, name, email, phone, password, departement, active = true } = {}) {
        if (!id) {
            throw new Error("id is required");
        }
        
        return await this.userRepository.update(id, {
            name,
            email,
            phone,
            password,
            departement,
            active
        });
    }

}