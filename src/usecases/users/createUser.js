import bcrypt from "bcryptjs";
export class CreateUser {
    constructor(userRepository, userValidator) {
        this.userRepository = userRepository;
        this.userValidator = userValidator;
    }

    async execute({ name, email, phone, password, departement, active = true }) {
        await this.userValidator.validateEmail(email);
        await this.userValidator.validatePhone(phone);

        const hashedPassword = await bcrypt.hash(password, 10);

        return await this.userRepository.create({
            name,
            email,
            phone,
            password: hashedPassword,
            departement,
            active
        });
    }
}
