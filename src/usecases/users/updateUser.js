export const UpdateUser = (userRepository) => async ({ id, name, email, phone, password, departement, active }) => {
    return await userRepository.update(id, { name, email, phone, password, departement, active });
};