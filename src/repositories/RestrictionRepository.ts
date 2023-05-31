import { Repository, getRepository } from 'typeorm';
import { Restriction } from '../entities/Restriction';

interface IRestriction {
    name: string,
    type: string,
    latitude: string,
    longitude: string,
    zoneID: number
}

class RestrictionRepository {
    private repository: Repository<Restriction>;

    constructor() {
        this.repository = getRepository(Restriction);
    }

    async create({ name, type, latitude, longitude, zoneID }: IRestriction): Promise<Restriction> {
        const restriction = this.repository.create({ name, type, latitude, longitude, zoneID });

        await this.repository.save(restriction);

        return restriction;
    }

    async delete(restriction: Restriction): Promise<Restriction> {
        const restrictionExit = await this.repository.remove(restriction);

        return restrictionExit;
    }

    async findRestrictionById(id: number): Promise<Restriction | null> {
        const restriction = await this.repository.findOne({
            where: { id }
        });

        return restriction;
    }

    async listByZone(zoneID: number): Promise<Restriction[]> {
        const restrictions = await this.repository.find({
            where: {zoneID}
        });

        return restrictions;
    }

    async update(restriction: Restriction): Promise<Restriction> {
        const restrictionExit = await this.repository.save(restriction);

        return restrictionExit;
    }
}

export { RestrictionRepository };
