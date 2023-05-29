import { Beacon } from '../entities/Beacon';
import { AppError } from '../errors/AppError';
import { BeaconRepository } from '../repositories/BeaconRepository';

interface IRequest {
    id: number,
    name: string,
    latitude: string,
    longitude: string,
    zoneID: number
}

class UpdateBeaconService {
    async execute({ id, name, latitude, longitude, zoneID }: IRequest): Promise<Beacon> {
        const beaconRepository = new BeaconRepository();

        const beaconExist = await beaconRepository.findById(id);

        if (!beaconExist) {
            throw new AppError('Beacon not found', 404);
        }

        const beacon = await beaconRepository.update(beaconExist);

        return beacon;
    }
}

export { UpdateBeaconService };