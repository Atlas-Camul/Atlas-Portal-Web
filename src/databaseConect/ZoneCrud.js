 
const { getRepository } = require('typeorm');
const { Zone } = require('./Connection');

async insertZone(name, type, latitude, longitude, restriction) {
        const zone = new Zone();
        zone.name = name;
        zone.type = type;
        zone.latitude = latitude;
        zone.longitude = longitude;
        zone.restriction = restriction;


        const zoneRepository = getRepository(Zone);
        await zoneRepository.save(zone);

        console.log('Nova zona inserida:', zone);
    }

    async updateZone(id, name, type, latitude, longitude, restriction) {
        const zoneRepository = getRepository(Zone);
        const zone = await zoneRepository.findOne(id);

        if (!zone) {
            console.log('Zona não encontrada');
            return;
        }

        zone.name = name;
        zone.type = type;
        zone.latitude = latitude;
        zone.longitude = longitude;
        zone.restriction = restriction;

        await zoneRepository.save(zone);

        console.log('Zona atualizada:', zone);
    }

    async deleteZone(id) {
        const zoneRepository = getRepository(Zone);
        const zone = await zoneRepository.findOne(id);

        if (!zone) {
            console.log('Zona não encontrada');
            return;
        }

        await zoneRepository.remove(zone);

        console.log('Zona removida:', zone);
    }

        module.exports = { insertZone, updateZone, deleteZone };