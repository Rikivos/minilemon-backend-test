export class UserValidator {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async validateEmail(email, excludeUserId = null) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format");
        }
        const existing = await this.userRepository.getUserByEmail(email);
        if (existing && existing.id !== excludeUserId) {
            throw new Error("Email already exists");
        }
    }

    async validatePhone(phone, excludeUserId = null) {
        if (phone.length < 10) {
            throw new Error("Phone number must be at least 10 digits");
        }
        const existing = await this.userRepository.getUserByPhone(phone);
        if (existing && existing.id !== excludeUserId) {
            throw new Error("Phone number already exists");
        }
    }
}