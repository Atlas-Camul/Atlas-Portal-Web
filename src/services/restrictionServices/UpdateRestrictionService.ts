import { Restriction } from '../../entities/Restriction';
import { AppError } from '../../errors/AppError';
import { RestrictionRepository } from '../../repositories/RestrictionRepository';

interface IRequest {
    id: number,
    name: string,
    type: string,
    latitude: string,
    longitude: string,
}
class UpdateRestrictionService {
    async execute({ id, name, type, latitude, longitude }: IRequest): Promise<Restriction> {
        const restrictionRepository = new RestrictionRepository();

        const restrictionExist = await restrictionRepository.findRestrictionById(id);

        if (!restrictionExist) {
            throw new AppError('Restriction not found', 404);
        }

        restrictionExist.name = name;
        restrictionExist.type = type;
        restrictionExist.latitude = latitude;
        restrictionExist.longitude = longitude;

        const restriction = await restrictionRepository.update(restrictionExist);

        return restriction;
    }
}

export { UpdateRestrictionService };