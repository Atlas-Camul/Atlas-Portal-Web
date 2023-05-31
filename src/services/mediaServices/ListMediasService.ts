import { Media } from '../../entities/Media';
import { MediaRepository } from '../../repositories/MediaRepository';

class ListMediasService {
    async execute(messagID: number): Promise<Media[]> {
        const mediaRepository = new MediaRepository();

        const medias = await mediaRepository.listByMessage(messagID);

        return medias;
    }
}

export { ListMediasService };
