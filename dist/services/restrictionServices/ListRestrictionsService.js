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
exports.ListRestrictionsService = void 0;
const AppError_1 = require("../../errors/AppError");
const RestrictionRepository_1 = require("../../repositories/RestrictionRepository");
const ZoneRepository_1 = require("../../repositories/ZoneRepository");
class ListRestrictionsService {
    execute(zoneID) {
        return __awaiter(this, void 0, void 0, function* () {
            const zoneRepository = new ZoneRepository_1.ZoneRepository();
            const zoneExist = yield zoneRepository.findById(zoneID);
            if (!zoneExist) {
                throw new AppError_1.AppError('Zone not found', 404);
            }
            const restrictionRepository = new RestrictionRepository_1.RestrictionRepository();
            const restrictions = yield restrictionRepository.listByZone(zoneID);
            return restrictions;
        });
    }
}
exports.ListRestrictionsService = ListRestrictionsService;
