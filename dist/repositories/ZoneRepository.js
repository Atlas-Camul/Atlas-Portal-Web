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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneRepository = void 0;
const typeorm_1 = require("typeorm");
const Zone_1 = require("../entities/Zone");
class ZoneRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Zone_1.Zone);
    }
    create({ name, type, latitude, longitude }) {
        return __awaiter(this, void 0, void 0, function* () {
            const zone = this.repository.create({ name, type, latitude, longitude });
            yield this.repository.save(zone);
            return zone;
        });
    }
    delete(zone) {
        return __awaiter(this, void 0, void 0, function* () {
            const zoneExit = yield this.repository.remove(zone);
            return zoneExit;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const zone = yield this.repository.findOne({
                where: { id }
            });
            return zone;
        });
    }
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const zones = yield this.repository.find();
            return zones;
        });
    }
    update(zone) {
        return __awaiter(this, void 0, void 0, function* () {
            const zoneExit = yield this.repository.save(zone);
            return zoneExit;
        });
    }
}
exports.ZoneRepository = ZoneRepository;
