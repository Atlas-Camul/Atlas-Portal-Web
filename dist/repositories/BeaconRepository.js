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
exports.BeaconRepository = void 0;
const typeorm_1 = require("typeorm");
const Beacon_1 = require("../entities/Beacon");
class BeaconRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Beacon_1.Beacon);
    }
    create({ name, latitude, longitude, macAddress }) {
        return __awaiter(this, void 0, void 0, function* () {
            const beacon = this.repository.create({ name, latitude, longitude, macAddress });
            yield this.repository.save(beacon);
            return beacon;
        });
    }
    delete(beacon) {
        return __awaiter(this, void 0, void 0, function* () {
            const beaconExit = yield this.repository.remove(beacon);
            return beaconExit;
        });
    }
    findByMacAddress(macAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const beacon = yield this.repository.findOne({
                where: { macAddress }
            });
            return beacon;
        });
    }
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const beacons = yield this.repository.find();
            return beacons;
        });
    }
    update(beacon) {
        return __awaiter(this, void 0, void 0, function* () {
            const beaconExit = yield this.repository.save(beacon);
            return beaconExit;
        });
    }
}
exports.BeaconRepository = BeaconRepository;
