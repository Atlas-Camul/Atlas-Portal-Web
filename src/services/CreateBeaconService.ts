import { Beacon } from '../entities/Beacon';
//import { Zone } from '../entities/Zone';
import { BeaconRepository } from '../repositories/BeaconRepository';
import { ZoneRepository } from '../repositories/ZoneRepository';
import { AppError } from '../errors/AppError';

interface IRequest {
    name: string,
    latitude: string,
    longitude: string,
    zoneID: number
}

class CreateBeaconService {
    async execute({ name, latitude, longitude, zoneID }: IRequest): Promise<Beacon> {
        const zoneRepository = new ZoneRepository();

        const zone = await zoneRepository.findById(zoneID);

        if (!zone) {
            throw new AppError('Zone not found', 404);
        }

        const beaconRepository = new BeaconRepository();

        const beacon = await beaconRepository.create({ name, latitude, longitude, zoneID });

        return beacon;

    }
}

export { CreateBeaconService };