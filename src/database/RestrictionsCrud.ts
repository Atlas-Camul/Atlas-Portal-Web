
const { getRepository } = require('typeorm');
const { Restrictions } = require('./Connection');


async function insertRestrictions(nameRestrictions, type, latitude, longitude) {
        const restrictions = new Restrictions();
        restrictions.nameRestrictions = nameRestrictions;
        restrictions.type = type;
        restrictions.latitude = latitude;
        restrictions.longitude = longitude;

        const restrictionsRepository = getRepository(Restrictions);
        await restrictionsRepository.save(restrictions);

        console.log('Nova restrição inserida:', restrictions);
    }

async function updateRestrictions(id, nameRestrictions, type, latitude, longitude) {
        const restrictionsRepository = getRepository(Restrictions);
        const restrictions = await restrictionsRepository.findOne(id);

        if (!restrictions) {
            console.log('Restrição não encontrada');
            return;
        }

        restrictions.nameRestrictions = nameRestrictions;
        restrictions.type = type;
        restrictions.latitude = latitude;
        restrictions.longitude = longitude;

        await restrictionsRepository.save(restrictions);

        console.log('Restrição atualizada:', restrictions);
    }

async function deleteRestrictions(id) {
        const restrictionsRepository = getRepository(Restrictions);
        const restrictions = await restrictionsRepository.findOne(id);

        if (!restrictions) {
            console.log('Restrição não encontrada');
            return;
        }

        await restrictionsRepository.remove(restrictions);

        console.log('Restrição removida:', restrictions);
    }

         module.exports = { insertRestrictions, updateRestrictions, deleteRestrictions };