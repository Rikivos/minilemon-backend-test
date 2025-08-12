export class UpdateUser {
    constructor(userRepository, userValidator) {
        this.userRepository = userRepository;
        this.userValidator = userValidator;
    }

    async execute({ id, name, email, phone, password, departement, active }) {
        const existingUser = await this.userRepository.getById(id);
        if (!existingUser) throw new Error("User not found");

        if (email && email !== existingUser.email) {
            await this.userValidator.validateEmail(email, id);
        }
        if (phone && phone !== existingUser.phone) {
            await this.userValidator.validatePhone(phone, id);
        }

        let hashedPassword = existingUser.password;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        return await this.userRepository.update(id, {
            name,
            email,
            phone,
            password: hashedPassword,
            departement,
            active
        });
    }
}
