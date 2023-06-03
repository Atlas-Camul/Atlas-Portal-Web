import { User } from '../../entities/User';
import { AppError } from '../../errors/AppError';
import { UserRepository } from '../../repositories/UserRepository';
import { hash } from 'bcryptjs';
interface IRequest {
    name: string,
    email: string,
    phone: string,
    password: string
}

class UpdateUserService {
    async execute({ name, email, phone, password }: IRequest): Promise<User> {
        const userRepository = new UserRepository();

        const userExist = await userRepository.findByEmail(email);

        if (!userExist) {
            throw new AppError('User not found', 404);
        }

        userExist.name = name;
        userExist.phone = phone;
        userExist.password = (password != "") ? await hash(password, 8) : userExist.password;

        const user = await userRepository.update(userExist);
        return user;
    }
}

export { UpdateUserService };