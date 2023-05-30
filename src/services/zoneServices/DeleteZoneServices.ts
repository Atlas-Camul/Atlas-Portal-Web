import { Zone } from '../../entities/Zone';
import { AppError } from '../../errors/AppError';
import { ZoneRepository } from '../../repositories/ZoneRepository';

class DeleteZoneService {
    async execute(id: number): Promise<Zone> {
        const zoneRepository = new ZoneRepository();

        const zoneExist = await zoneRepository.findById(id);

        if (!zoneExist) {
            throw new AppError('Zone not found', 404);
        }

        const zone = await zoneRepository.delete(zoneExist);

        return zone;
    }
}

export { DeleteZoneService };