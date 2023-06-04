import { AppError } from '../../errors/AppError';
import { UserRepository } from '../../repositories/UserRepository';
import { compare, compareSync } from 'bcryptjs';
import authConfig from '../../config/auth';
import { sign } from 'jsonwebtoken';
import { User } from '../../entities/User';
import { UpdateSessionService } from './UpdateSessionService';
import { CreateSessionService } from '../sessionServices/CreateSessionService';
import { Session } from '../../entities/Session';


interface IResponse{
    user: User;
    session: Session,
    expiryTime: number,
    tokenData: object
}
interface IRequest {
    email: string;
    password: string;
}


class AuthenticateUserService {
    async execute({ email, password }: IRequest): Promise<IResponse> {
        const userRepository = new UserRepository();

        const user = await userRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Incorrect email address or account does not exist', 404);
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch)
        {
            throw new AppError('Incorrect email/password combination', 404);
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            expiresIn
        });

        const updateSessionService = new UpdateSessionService();

        await updateSessionService.execute(user);

        const createSessionService = new CreateSessionService();

        const sessionData = await createSessionService.execute({ token, userID: user.id, emailUser: user.email, nameUser: user.name });

        const { session, expiryTime, tokenData } = sessionData;

        return { user, session, expiryTime, tokenData };     

    }
}

export { AuthenticateUserService };