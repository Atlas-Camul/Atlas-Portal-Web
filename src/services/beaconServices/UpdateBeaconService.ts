import { Beacon } from '../../entities/Beacon';
import { AppError } from '../../errors/AppError';
import { BeaconRepository } from '../../repositories/BeaconRepository';

interface IRequest {
    name: string,
    latitude: string,
    longitude: string,
    zoneID: number,
    macAddress: string
}

class UpdateBeaconService {
    async execute({ name, latitude, longitude, zoneID, macAddress }: IRequest): Promise<Beacon> {
        const beaconRepository = new BeaconRepository();

        const beaconExist = await beaconRepository.findByMacAddress(macAddress);

        if (!beaconExist) {
            throw new AppError('Beacon not found', 404);
        }

        const beacon = await beaconRepository.update(beaconExist);

        return beacon;
    }
}

export { UpdateBeaconService };