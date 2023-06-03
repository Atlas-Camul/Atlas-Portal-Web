import { Session } from '../../entities/Session';
import { AppError } from '../../errors/AppError';
import { SessionRepository } from '../../repositories/SessionRepository';
import NodeCache from 'node-cache';
interface IRequest {
    token: string,
    userID: number
}

class FindSessionService {
    async execute(): Promise<Session> {
        const sessionRepository = new SessionRepository();

        //Checks cached information
        const cache = new NodeCache();

        const tokenData = cache.get('loginAtlasToken');

        const { token, userID } = tokenData as IRequest;

        const session = await sessionRepository.findSession({ userID, token });

        if (!session) {
            throw new AppError('Session not found', 404);
        }

        return session;
    }
}

export { FindSessionService };