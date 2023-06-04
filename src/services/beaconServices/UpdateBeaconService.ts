import { Beacon } from '../../entities/Beacon';
import { AppError } from '../../errors/AppError';
import { BeaconRepository } from '../../repositories/BeaconRepository';

interface IRequest {
    name: string,
    latitude: string,
    longitude: string,
    macAddress: string
}

class UpdateBeaconService {
    async execute({ name, latitude, longitude, macAddress }: IRequest): Promise<Beacon> {
        const beaconRepository = new BeaconRepository();

        const beaconExist = await beaconRepository.findByMacAddress(macAddress);

        if (!beaconExist) {
            throw new AppError('Beacon not found', 404);
        }

        beaconExist.name = name;
        beaconExist.latitude = latitude;
        beaconExist.longitude = longitude;

        const beacon = await beaconRepository.update(beaconExist);

        return beacon;
    }
}

export { UpdateBeaconService };