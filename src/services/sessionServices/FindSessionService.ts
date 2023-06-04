import { Session } from '../../entities/Session';
import { AppError } from '../../errors/AppError';
import { SessionRepository } from '../../repositories/SessionRepository';
interface IRequest {
    token: string,
    userID: number
}

class FindSessionService {
    async execute({ userID, token }: IRequest): Promise<Session> {
        const sessionRepository = new SessionRepository();

        const session = await sessionRepository.findSession({ userID, token });

        if (!session) {
            throw new AppError('Session not found', 404);
        }

        return session;
;
    }
}

export { FindSessionService };