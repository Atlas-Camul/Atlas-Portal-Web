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
exports.AuthenticateUserService = void 0;
const AppError_1 = require("../../errors/AppError");
const UserRepository_1 = require("../../repositories/UserRepository");
const bcryptjs_1 = require("bcryptjs");
const auth_1 = __importDefault(require("../../config/auth"));
const jsonwebtoken_1 = require("jsonwebtoken");
const UpdateSessionService_1 = require("./UpdateSessionService");
const CreateSessionService_1 = require("../sessionServices/CreateSessionService");
class AuthenticateUserService {
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = new UserRepository_1.UserRepository();
            const user = yield userRepository.findByEmail(email);
            if (!user) {
                throw new AppError_1.AppError('Incorrect email address or account does not exist', 404);
            }
            const passwordMatch = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!passwordMatch) {
                throw new AppError_1.AppError('Incorrect email/password combination', 404);
            }
            const { secret, expiresIn } = auth_1.default.jwt;
            const token = (0, jsonwebtoken_1.sign)({}, secret, {
                expiresIn
            });
            const updateSessionService = new UpdateSessionService_1.UpdateSessionService();
            yield updateSessionService.execute(user);
            const createSessionService = new CreateSessionService_1.CreateSessionService();
            const sessionData = yield createSessionService.execute({ token, userID: user.id, emailUser: user.email, nameUser: user.name });
            const { session, expiryTime, tokenData } = sessionData;
            return { user, session, expiryTime, tokenData };
        });
    }
}
exports.AuthenticateUserService = AuthenticateUserService;
