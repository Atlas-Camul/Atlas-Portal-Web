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
const { Zone } = require('./Connection');
function insertZone(name, type, latitude, longitude, restriction) {
    return __awaiter(this, void 0, void 0, function* () {
        const zone = new Zone();
        zone.name = name;
        zone.type = type;
        zone.latitude = latitude;
        zone.longitude = longitude;
        zone.restriction = restriction;
        const zoneRepository = getRepository(Zone);
        yield zoneRepository.save(zone);
        console.log('Nova zona inserida:', zone);
    });
}
function updateZone(id, name, type, latitude, longitude, restriction) {
    return __awaiter(this, void 0, void 0, function* () {
        const zoneRepository = getRepository(Zone);
        const zone = yield zoneRepository.findOne(id);
        if (!zone) {
            console.log('Zona n�o encontrada');
            return;
        }
        zone.name = name;
        zone.type = type;
        zone.latitude = latitude;
        zone.longitude = longitude;
        zone.restriction = restriction;
        yield zoneRepository.save(zone);
        console.log('Zona atualizada:', zone);
    });
}
function deleteZone(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const zoneRepository = getRepository(Zone);
        const zone = yield zoneRepository.findOne(id);
        if (!zone) {
            console.log('Zona n�o encontrada');
            return;
        }
        yield zoneRepository.remove(zone);
        console.log('Zona removida:', zone);
    });
}
module.exports = { insertZone, updateZone, deleteZone };
