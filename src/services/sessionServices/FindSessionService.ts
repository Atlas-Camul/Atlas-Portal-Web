import { Session } from '../../entities/Session';
import { AppError } from '../../errors/AppError';
import { SessionRepository } from '../../repositories/SessionRepository';
import NodeCache from 'node-cache';
interface IRequest {
    token: string,
    userID: number
}

interface IResponse {
    session: Session,
    tokenData: object
}

class FindSessionService {
    async execute(): Promise<IResponse> {
        const sessionRepository = new SessionRepository();

        //Checks cached information
        const cache = new NodeCache();

        const tokenData = cache.get('loginAtlasToken');

        if (!tokenData) {
            throw new AppError('Session not found', 404);
        }

        const { token, userID } = tokenData as IRequest;

        const session = await sessionRepository.findSession({ userID, token });

        if (!session) {
            throw new AppError('Session not found', 404);
        }

        return { session, tokenData };
;
    }
}

export { FindSessionService };