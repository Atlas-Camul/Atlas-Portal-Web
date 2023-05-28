"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { getRepository } = require('typeorm');
const { Restrictions } = require('./Connection');
function insertRestrictions(nameRestrictions, type, latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        const restrictions = new Restrictions();
        restrictions.nameRestrictions = nameRestrictions;
        restrictions.type = type;
        restrictions.latitude = latitude;
        restrictions.longitude = longitude;
        const restrictionsRepository = getRepository(Restrictions);
        yield restrictionsRepository.save(restrictions);
        console.log('Nova restri��o inserida:', restrictions);
    });
}
function updateRestrictions(id, nameRestrictions, type, latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        const restrictionsRepository = getRepository(Restrictions);
        const restrictions = yield restrictionsRepository.findOne(id);
        if (!restrictions) {
            console.log('Restri��o n�o encontrada');
            return;
        }
        restrictions.nameRestrictions = nameRestrictions;
        restrictions.type = type;
        restrictions.latitude = latitude;
        restrictions.longitude = longitude;
        yield restrictionsRepository.save(restrictions);
        console.log('Restri��o atualizada:', restrictions);
    });
}
function deleteRestrictions(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const restrictionsRepository = getRepository(Restrictions);
        const restrictions = yield restrictionsRepository.findOne(id);
        if (!restrictions) {
            console.log('Restri��o n�o encontrada');
            return;
        }
        yield restrictionsRepository.remove(restrictions);
        console.log('Restri��o removida:', restrictions);
    });
}
module.exports = { insertRestrictions, updateRestrictions, deleteRestrictions };
