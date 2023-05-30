import { Zone } from '../../entities/Zone';
import { ZoneRepository } from '../../repositories/ZoneRepository';

class ListZonesServices {
    async execute(): Promise<Zone[]> {
        const zoneRepository = new ZoneRepository();

        const zones = await zoneRepository.listAll();

        return zones;
    }
}

export { ListZonesServices };