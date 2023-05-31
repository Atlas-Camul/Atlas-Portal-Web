import { Message } from '../../entities/Message';
import { Media } from '../../entities/Media';
import { MessageRepository } from '../../repositories/MessageRepository';
import { DeleteMediasService } from '../mediaServices/DeleteMediasService';
import { AppError } from '../../errors/AppError';

interface IMessage {
    message: Message,
    medias: Media[]
}

class DeleteMessageService {
    async execute(id: number): Promise<IMessage> {
        const messageRepository = new MessageRepository();

        const messageExist = await messageRepository.findById(id);

        if (!messageExist) {
            throw new AppError('Message not found', 404);
        }

        const medias = await new DeleteMediasService().execute(id);

        const message = await messageRepository.delete(messageExist);

        return {message, medias};
    }
}

export { DeleteMessageService };