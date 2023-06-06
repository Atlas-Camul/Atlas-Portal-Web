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
exports.RestrictionRepository = void 0;
const typeorm_1 = require("typeorm");
const Restriction_1 = require("../entities/Restriction");
class RestrictionRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Restriction_1.Restriction);
    }
    create({ name, type, latitude, longitude, zoneID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const restriction = this.repository.create({ name, type, latitude, longitude, zoneID });
            yield this.repository.save(restriction);
            return restriction;
        });
    }
    delete(restriction) {
        return __awaiter(this, void 0, void 0, function* () {
            const restrictionExit = yield this.repository.remove(restriction);
            return restrictionExit;
        });
    }
    findRestrictionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const restriction = yield this.repository.findOne({
                where: { id }
            });
            return restriction;
        });
    }
    listByZone(zoneID) {
        return __awaiter(this, void 0, void 0, function* () {
            const restrictions = yield this.repository.find({
                where: { zoneID }
            });
            return restrictions;
        });
    }
    update(restriction) {
        return __awaiter(this, void 0, void 0, function* () {
            const restrictionExit = yield this.repository.save(restriction);
            return restrictionExit;
        });
    }
}
exports.RestrictionRepository = RestrictionRepository;
