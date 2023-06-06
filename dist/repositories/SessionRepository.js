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
exports.SessionRepository = void 0;
const typeorm_1 = require("typeorm");
const Session_1 = require("../entities/Session");
class SessionRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Session_1.Session);
    }
    create({ token, expiryDate, userID }) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = this.repository.create({ token, expiryDate, userID });
            yield this.repository.save(session);
            return session;
        });
    }
    findSession({ userID, token }) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = yield this.repository.findOne({
                where: [{ userID, token }]
            });
            return session;
        });
    }
}
exports.SessionRepository = SessionRepository;
