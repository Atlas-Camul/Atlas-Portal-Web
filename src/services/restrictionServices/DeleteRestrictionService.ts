import { Restriction } from '../../entities/Restriction';
import { AppError } from '../../errors/AppError';
import { RestrictionRepository } from '../../repositories/RestrictionRepository';


class DeleteRestrictionService {
    async execute(id: number): Promise<Restriction> {
        const restrictionRepository = new RestrictionRepository();

        const restrictionExist = await restrictionRepository.findRestrictionById(id);

        if (!restrictionExist) {
            throw new AppError('Restriction not found', 404);
        }

        const restriction = await restrictionRepository.delete(restrictionExist);

        return restriction;
    } 
}

export { DeleteRestrictionService };