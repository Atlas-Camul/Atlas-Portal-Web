import {User} from '../entities/User';
import {UserRepository} from '../repositories/UserRepository';
import {AppError} from '../errors/AppError';

interface IRequest {
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    async execute({ name, email, password }: IRequest): Promise<User> {
        const userRepository = new UserRepository();

        const userExist = await userRepository.findByEmail(email);

        if(userExist){
            throw new AppError('User already create');
        }

        const user = await userRepository.create({name, email, password});

        return user;
    }
}

export { CreateUserService };