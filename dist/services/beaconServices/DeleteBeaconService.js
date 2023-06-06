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
exports.DeleteBeaconService = void 0;
const AppError_1 = require("../../errors/AppError");
const BeaconRepository_1 = require("../../repositories/BeaconRepository");
class DeleteBeaconService {
    execute(macAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const beaconRepository = new BeaconRepository_1.BeaconRepository();
            const beaconExist = yield beaconRepository.findByMacAddress(macAddress);
            if (!beaconExist) {
                throw new AppError_1.AppError('Beacon not found', 404);
            }
            const beacon = beaconRepository.delete(beaconExist);
            return beacon;
        });
    }
}
exports.DeleteBeaconService = DeleteBeaconService;
