import { Message } from '../../entities/Message';
import { MessageRepository } from '../../repositories/MessageRepository';


class ListMessageService {
    async execute(): Promise<Message[]> {
        const messageRepository = new MessageRepository();

        const messages = await messageRepository.listAll();

        return messages;
    }
}

export { ListMessageService };