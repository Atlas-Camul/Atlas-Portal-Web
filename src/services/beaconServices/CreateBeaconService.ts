import { Beacon } from '../../entities/Beacon';
import { BeaconRepository } from '../../repositories/BeaconRepository';
import { ZoneRepository } from '../../repositories/ZoneRepository';
import { AppError } from '../../errors/AppError';

interface IRequest {
    name: string,
    latitude: string,
    longitude: string,
    zoneID: number,
    macAddress: string
}

class CreateBeaconService {
    async execute({ name, latitude, longitude, zoneID, macAddress }: IRequest): Promise<Beacon> {
        const zoneRepository = new ZoneRepository();

        const zone = await zoneRepository.findById(zoneID);

        if (!zone) {
            throw new AppError('Zone not found', 404);
        }

        const beaconRepository = new BeaconRepository();

        const beaconExist = await beaconRepository.findByMacAddress(macAddress);

        if (beaconExist) {
            throw new AppError('Beacon already create');
        }

        const beacon = await beaconRepository.create({ name, latitude, longitude, zoneID, macAddress });

        return beacon;

    }
}

export { CreateBeaconService };