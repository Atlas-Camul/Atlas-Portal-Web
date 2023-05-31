import { Repository, getRepository } from 'typeorm';
import { Media } from '../entities/Media';

class MediaRepository {
    private repository: Repository<Media>;

    constructor() {
        this.repository = getRepository(Media);
    }

    async deleteByMessage(messageID: number): Promise<Media[]> {
        const Medias = await this.listByMessage(messageID);

        const MediasExit = await this.repository.remove(Medias);

        return MediasExit;
    }

    async listByMessage(messageID: number): Promise<Media[]> {
        const Medias = await this.repository.find({
            where: { messageID }
        });

        return Medias;
    }
}

export { MediaRepository };