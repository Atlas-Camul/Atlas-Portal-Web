import { Beacon } from '../entities/Beacon';
import { AppError } from '../errors/AppError';
import { BeaconRepository } from '../repositories/BeaconRepository';

class DeleteBeaconService {
    async execute(id: number): Promise<Beacon> {
        const beaconRepository = new BeaconRepository();

        const beaconExist = await beaconRepository.findById(id);

        if (!beaconExist) {
            throw new AppError('Beacon not found', 404);
        }

        const beacon = beaconRepository.delete(beaconExist);

        return beacon;
    }
}

export { DeleteBeaconService };