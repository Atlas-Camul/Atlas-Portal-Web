import { Repository, getRepository } from 'typeorm';
import { Session } from '../entities/Session';

interface ISession {
    token: string,
    expiryDate: Date,
    userID: number
}

interface IConfirm {
    userID: number,
    token: string
}

class SessionRepository {
    private repository: Repository<Session>;

    constructor() {
        this.repository = getRepository(Session);
    }

    async create({ token, expiryDate, userID }: ISession): Promise<Session> {
        const session = this.repository.create({ token, expiryDate, userID });

        await this.repository.save(session);

        return session;
    }

    async findSession({ userID, token }: IConfirm): Promise<Session | null> {
        const session = await this.repository.findOne({
            where: [{userID, token}]
        });

        return session;
    }
}

export { SessionRepository };
