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
exports.UpdateRestrictionService = void 0;
const AppError_1 = require("../../errors/AppError");
const RestrictionRepository_1 = require("../../repositories/RestrictionRepository");
class UpdateRestrictionService {
    execute({ id, name, type, latitude, longitude }) {
        return __awaiter(this, void 0, void 0, function* () {
            const restrictionRepository = new RestrictionRepository_1.RestrictionRepository();
            const restrictionExist = yield restrictionRepository.findRestrictionById(id);
            if (!restrictionExist) {
                throw new AppError_1.AppError('Restriction not found', 404);
            }
            restrictionExist.name = name;
            restrictionExist.type = type;
            restrictionExist.latitude = latitude;
            restrictionExist.longitude = longitude;
            const restriction = yield restrictionRepository.update(restrictionExist);
            return restriction;
        });
    }
}
exports.UpdateRestrictionService = UpdateRestrictionService;
