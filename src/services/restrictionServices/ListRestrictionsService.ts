import { Restriction } from '../../entities/Restriction';
import { AppError } from '../../errors/AppError';
import { RestrictionRepository } from '../../repositories/RestrictionRepository';
import { ZoneRepository } from '../../repositories/ZoneRepository';

class ListRestrictionsService {
    async execute(zoneID: number): Promise<Restriction[]> {
        const zoneRepository = new ZoneRepository();

        const zoneExist = await zoneRepository.findById(zoneID);

        if (!zoneExist) {
            throw new AppError('Zone not found', 404);
        }

        const restrictionRepository = new RestrictionRepository();

        const restrictions = await restrictionRepository.listByZone(zoneID);

        return restrictions;
    }
}

export { ListRestrictionsService };