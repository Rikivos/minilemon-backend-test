import bcrypt from "bcryptjs";

export class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({ name, email, phone, password, departement, active = true }) {
        // Cek email sudah ada
        const existingEmail = await this.userRepository.getUserByEmail(email);
        if (existingEmail) {
            throw new Error("Email already exists");
        }

        // Cek nomor sudah ada
        const existingPhone = await this.userRepository.getUserByPhone(phone);
        if (existingPhone) {
            throw new Error("Phone number already exists");
        }

        // Validasi no telp
        if (phone.length < 10) {
            throw new Error("Phone number must be 10 digits");
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan user
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
