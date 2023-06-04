import { Session } from '../../entities/Session';
import { SessionRepository } from '../../repositories/SessionRepository';
import { verify } from 'jsonwebtoken';
import authConfig from '../../config/auth';

interface IRequest {
    token: string,
    userID: number,
    emailUser: string,
    nameUser: string
}

interface ITokenPayLoad {
    iat: number,
    exp: number,
    sub: string
}

interface IResponse {
    session: Session,
    expiryTime: number,
    tokenData: object
}

class CreateSessionService {
    async execute({ token, userID, emailUser, nameUser }: IRequest): Promise<IResponse> {
        const sessionRepository = new SessionRepository();

        //Decrypts the token and searches for the expiry value
        const decodedToken = verify(token, authConfig.jwt.secret);

        const { exp } = decodedToken as ITokenPayLoad;

        const expiryTime = exp;

        const expiryDate = new Date(expiryTime*1000);

        const tokenData = { token, userID, emailUser, nameUser };

        //Inserts the data into the database
        const session = await sessionRepository.create({ token, expiryDate, userID });

        return { session, expiryTime, tokenData };
    }
}

export { CreateSessionService };