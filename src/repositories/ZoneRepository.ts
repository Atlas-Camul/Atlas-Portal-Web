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

    async create({ name, type, latitude, longitude }: IZone): Promise<Zone> {
        const zone = this.repository.create({ name, type, latitude, longitude });

        await this.repository.save(zone);

        return zone;
    }

    async delete(zone: Zone): Promise<Zone> {
        const zoneExit = await this.repository.remove(zone);

        return zoneExit;
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

    async update(zone: Zone): Promise<Zone> {
        const zoneExit = await this.repository.save(zone);

        return zoneExit;
    }
}

export { ZoneRepository };