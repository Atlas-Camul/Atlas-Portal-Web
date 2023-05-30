import { User } from '../../entities/User';
import { AppError } from '../../errors/AppError';
import { UserRepository } from '../../repositories/UserRepository';

class DeleteUserService {
    async execute(email: string): Promise<User> {
        const userRepository = new UserRepository();

        const userExist = await userRepository.findByEmail(email);

        if (!userExist) {
            throw new AppError('User not found', 404);
        }

        const user = await userRepository.delete(userExist);

        return user;
    }
}

export { DeleteUserService };