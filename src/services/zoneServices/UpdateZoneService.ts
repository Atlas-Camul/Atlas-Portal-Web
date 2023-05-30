import { Zone } from '../../entities/Zone';
import { AppError } from '../../errors/AppError';
import { ZoneRepository } from '../../repositories/ZoneRepository';

interface IRequest {
    id: number,
    name: string,
    type: string,
    latitude: string,
    longitude: string,
}

class UpdateZoneService {
    async execute({ id, name, type, latitude, longitude }: IRequest): Promise<Zone> {
        const zoneRepository = new ZoneRepository();

        const zoneExist = await zoneRepository.findById(id);

        if (!zoneExist) {
            throw new AppError('Zone not found', 404);
        }

        const zone = await zoneRepository.update(zoneExist);

        return zone;
    }
}