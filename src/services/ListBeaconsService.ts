import { Beacon } from '../entities/Beacon';
import { BeaconRepository } from '../repositories/BeaconRepository';

class ListBeaconsService {
    async execute(): Promise<Beacon[]> {
        const beaconRepository = new BeaconRepository();

        const beacons = await beaconRepository.listAll();

        return beacons;
    }
}

export { ListBeaconsService };