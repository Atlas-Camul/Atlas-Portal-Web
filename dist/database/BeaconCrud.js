"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteBeacon = exports.updateBeacon = exports.insertBeacon = void 0;
const typeorm_1 = require("typeorm");
const Connection_1 = require("./Connection");
const Beacon = __importStar(require("./Beacon"));
//const { getRepository } = require('typeorm');
//const { Beacon } = require('./Connection');
function insertBeacon(name, latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, Connection_1.startConnection)();
        const beacon = new Beacon();
        beacon.name = name;
        beacon.latitude = latitude;
        beacon.longitude = longitude;
        const beaconRepository = (0, typeorm_1.getRepository)(Beacon);
        yield beaconRepository.save(beacon);
        console.log('Novo beacon inserido:', beacon);
    });
}
exports.insertBeacon = insertBeacon;
function updateBeacon(id, name, latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        const beaconRepository = (0, typeorm_1.getRepository)(Beacon);
        const beacon = yield beaconRepository.findOne(id);
        if (!beacon) {
            console.log('Beacon n�o encontrado');
            return;
        }
        beacon.name = name;
        beacon.latitude = latitude;
        beacon.longitude = longitude;
        yield beaconRepository.save(beacon);
        console.log('Beacon atualizado:', beacon);
    });
}
exports.updateBeacon = updateBeacon;
function deleteBeacon(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const beaconRepository = (0, typeorm_1.getRepository)(Beacon);
        const beacon = yield beaconRepository.findOne(id);
        if (!beacon) {
            console.log('Beacon n�o encontrado');
            return;
        }
        yield beaconRepository.remove(beacon);
        console.log('Beacon removido:', beacon);
    });
}
exports.deleteBeacon = deleteBeacon;
