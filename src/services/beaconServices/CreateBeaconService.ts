import { Beacon } from '../../entities/Beacon';
import { BeaconRepository } from '../../repositories/BeaconRepository';
import { AppError } from '../../errors/AppError';

interface IRequest {
    name: string,
    latitude: string,
    longitude: string,
    macAddress: string
}

class CreateBeaconService {
    async execute({ name, latitude, longitude, macAddress }: IRequest): Promise<Beacon> {
        const beaconRepository = new BeaconRepository();

        const beaconExist = await beaconRepository.findByMacAddress(macAddress);

        if (beaconExist) {
            throw new AppError('Beacon already create');
        }

        const beacon = await beaconRepository.create({ name, latitude, longitude, macAddress });

        return beacon;

    }
}

export { CreateBeaconService };