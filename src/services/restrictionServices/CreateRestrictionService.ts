import { Restriction } from '../../entities/Restriction';
import { AppError } from '../../errors/AppError';
import { RestrictionRepository } from '../../repositories/RestrictionRepository';
import { ZoneRepository } from '../../repositories/ZoneRepository';

interface IRequest {
    name: string,
    type: string,
    latitude: string,
    longitude: string,
    zoneID: number
}
class CreateRestrictionService {
    async execute({ name, type, latitude, longitude, zoneID }: IRequest): Promise<Restriction> {
        const zoneRepository = new ZoneRepository();

        const zoneExist = await zoneRepository.findById(zoneID);

        if (!zoneExist) {
            throw new AppError('Zone not found', 404);
        }

        const restrictionRepository = new RestrictionRepository();

        const restriction = await restrictionRepository.create({ name, type, latitude, longitude, zoneID });

        return restriction;
    }
}

export { CreateRestrictionService };