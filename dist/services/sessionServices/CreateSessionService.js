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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSessionService = void 0;
const SessionRepository_1 = require("../../repositories/SessionRepository");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../../config/auth"));
class CreateSessionService {
    execute({ token, userID, emailUser, nameUser }) {
        return __awaiter(this, void 0, void 0, function* () {
            const sessionRepository = new SessionRepository_1.SessionRepository();
            //Decrypts the token and searches for the expiry value
            const decodedToken = (0, jsonwebtoken_1.verify)(token, auth_1.default.jwt.secret);
            const { exp } = decodedToken;
            const expiryTime = exp;
            const expiryDate = new Date(expiryTime * 1000);
            const tokenData = { token, userID, emailUser, nameUser };
            //Inserts the data into the database
            const session = yield sessionRepository.create({ token, expiryDate, userID });
            return { session, expiryTime, tokenData };
        });
    }
}
exports.CreateSessionService = CreateSessionService;
