import bcrypt from "bcryptjs";

export const CreateUser = (userRepository) => async ({ name, email, phone, password, departement, active = true }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Email harus dalam format valid');
    }

    if (phone.length < 10) {
        throw new Error('Nomor telepon hanya boleh mengandung angka dan minimal 10 karakter');
    }

    const [existedEmailUser, existedPhoneUser] = await Promise.all([
        userRepository.getUserByEmail(email),
        userRepository.getUserByPhone(phone)
    ]);

    if (existedEmailUser) throw new Error('Email already in use');
    if (existedPhoneUser) throw new Error('Phone number already in use');

    const hashedPassword = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT_ROUNDS) || 10);

    return await userRepository.create({
        name,
        email,
        phone,
        password: hashedPassword,
        departement,
        active
    });
};
