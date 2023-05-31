import { Repository, getRepository } from 'typeorm';
import { Message } from '../entities/Message';

class MessageRepository {
    private repository: Repository<Message>;

    constructor() {
        this.repository = getRepository(Message);
    }

    async delete(message: Message): Promise<Message> {
        const messageExit = await this.repository.remove(message);

        return messageExit;
    }

    async findById(id: number): Promise<Message | null> {
        const message = await this.repository.findOne({
            where: { id }
        });

        return message;
    }

    async listAll(): Promise<Message[]> {
        const messages = await this.repository.find();

        return messages;
    }
}

export { MessageRepository };

