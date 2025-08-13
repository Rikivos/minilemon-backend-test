import { ValidationError } from "../../domain/errors/validationError.js";
export class UserValidator {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async validateEmail(email, excludeUserId = null) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new ValidationError("Invalid email format");
        }
        const existing = await this.userRepository.getUserByEmail(email);
        if (existing && existing.id !== excludeUserId) {
            throw new ValidationError("Email already exists");
        }
    }

    async validatePhone(phone, excludeUserId = null) {
        if (phone.length < 10) {
            throw new ValidationError("Phone number must be at least 10 digits");
        }
        if (!/^\d+$/.test(phone)) {
            throw new ValidationError("Phone number must contain only digits");
        }
        const existing = await this.userRepository.getUserByPhone(phone);
        if (existing && existing.id !== excludeUserId) {
            throw new ValidationError("Phone number already exists");
        }
    }
}