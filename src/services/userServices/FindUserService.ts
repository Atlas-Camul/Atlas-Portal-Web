import { User } from '../../entities/User';
import { AppError } from '../../errors/AppError';
import { UserRepository } from '../../repositories/UserRepository';


class FindUserService {
    async execute(email:string): Promise<User> {
        const userRepository = new UserRepository();

        const userExist = await userRepository.findByEmail(email);

        if (!userExist) {
            throw new AppError('User not found', 404);
        }

        return userExist;
    }
}

export { FindUserService };