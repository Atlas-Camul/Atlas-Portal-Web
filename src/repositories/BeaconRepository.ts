import { Repository, getRepository } from 'typeorm';
import { Beacon } from '../entities/Beacon';

interface IBeacon {
    name: string,
    latitude: string,
    longitude: string,
    zoneID: number,
    macAddress: string
}

class BeaconRepository {
    private repository: Repository<Beacon>;

    constructor() {
        this.repository = getRepository(Beacon);
    }

    async create({ name, latitude, longitude, zoneID, macAddress }: IBeacon): Promise<Beacon> {

        const beacon = this.repository.create({ name, latitude, longitude, zoneID, macAddress });

        await this.repository.save(beacon);

        return beacon;

    }

    async delete(beacon: Beacon): Promise<Beacon> {
        const beaconExit = await this.repository.remove(beacon);

        return beaconExit;
    }

    async findByMacAddress(macAddress: string): Promise<Beacon | null> {
        const beacon = await this.repository.findOne({
            where: { macAddress }
        });

        return beacon;
    }

    async listAll(): Promise<Beacon[]> {
        const beacons = await this.repository.find();

        return beacons;
    }

    async update(beacon: Beacon): Promise<Beacon> {
        const beaconExit = await this.repository.save(beacon);

        return beaconExit;
    }
}

export { BeaconRepository };