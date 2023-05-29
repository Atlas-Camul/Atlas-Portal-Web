
import { UserRepository} from '../repositories/UserRepository';

interface IRequest
{
    email: string;
    password: string;
}


class AuthenticateUserService
{
    async execute({ email, password }: IRequest)
    {
        const userRepository = new UserRepository();

        const user = await userRepository.findByEmail({ email });
    }
}

export { AuthenticateUserService };