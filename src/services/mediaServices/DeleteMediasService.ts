import { Media } from '../../entities/Media';
import { MediaRepository } from '../../repositories/MediaRepository';

class DeleteMediasService {
    async execute(messageID: number): Promise<Media[]> {
        const mediaRepository = new MediaRepository();

        const medias = await mediaRepository.deleteByMessage(messageID);

        return medias;
    }
}

export { DeleteMediasService };