import { User } from '../../entities/User';
import { AppError } from '../../errors/AppError';
import { UserRepository } from '../../repositories/UserRepository';

interface IRequest {
    name: string,
    email: string
}

class SearchUsersService {
    async execute({ name, email}: IRequest): Promise<User[]> {
        const userRepository = new UserRepository();

        const userExist = await userRepository.findByEmailOrName({name, email});

        if (!userExist) {
            throw new AppError('User not found', 404);
        }

        return userExist;
    }
}

export { SearchUsersService };