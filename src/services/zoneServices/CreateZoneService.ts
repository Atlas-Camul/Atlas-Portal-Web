import { Zone } from '../../entities/Zone';
import { ZoneRepository } from '../../repositories/ZoneRepository';

interface IRequest {
    name: string,
    type: string,
    latitude: string,
    longitude: string,
}
class CreateZoneService {
    async execute({ name, type, latitude, longitude }: IRequest): Promise<Zone> {
        const zoneRepository = new ZoneRepository();

        const zone = await zoneRepository.create({ name, type, latitude, longitude });

        return zone;
    }
}

export { CreateZoneService };