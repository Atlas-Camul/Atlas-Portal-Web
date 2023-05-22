
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

        console.log('Nova restri��o inserida:', restrictions);
    }

async function updateRestrictions(id, nameRestrictions, type, latitude, longitude) {
        const restrictionsRepository = getRepository(Restrictions);
        const restrictions = await restrictionsRepository.findOne(id);

        if (!restrictions) {
            console.log('Restri��o n�o encontrada');
            return;
        }

        restrictions.nameRestrictions = nameRestrictions;
        restrictions.type = type;
        restrictions.latitude = latitude;
        restrictions.longitude = longitude;

        await restrictionsRepository.save(restrictions);

        console.log('Restri��o atualizada:', restrictions);
    }

async function deleteRestrictions(id) {
        const restrictionsRepository = getRepository(Restrictions);
        const restrictions = await restrictionsRepository.findOne(id);

        if (!restrictions) {
            console.log('Restri��o n�o encontrada');
            return;
        }

        await restrictionsRepository.remove(restrictions);

        console.log('Restri��o removida:', restrictions);
    }

         module.exports = { insertRestrictions, updateRestrictions, deleteRestrictions };