export const getAllUser = (userRepository) => async () => {
    return await userRepository.getAll();
};