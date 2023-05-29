import { Repository, getRepository } from 'typeorm';
import { Zone } from '../entities/Zone';

interface IZone {
    name: string,
    type: string,
    latitude: string,
    longitude: string,
}

class ZoneRepository {
    private repository: Repository<Zone>;

    constructor() {
        this.repository = getRepository(Zone);
    }


    async findById(id: number): Promise<Zone | null> {
        const zone = await this.repository.findOne({
            where: { id }
        });

        return zone;
    }

    async listAll(): Promise<Zone[]> {
        const zones = await this.repository.find();

        return zones;
    }
}

export { ZoneRepository };