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
exports.CreateZoneService = void 0;
const ZoneRepository_1 = require("../../repositories/ZoneRepository");
class CreateZoneService {
    execute({ name, type, latitude, longitude }) {
        return __awaiter(this, void 0, void 0, function* () {
            const zoneRepository = new ZoneRepository_1.ZoneRepository();
            const zone = yield zoneRepository.create({ name, type, latitude, longitude });
            return zone;
        });
    }
}
exports.CreateZoneService = CreateZoneService;
