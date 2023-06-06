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
exports.CreateUserService = void 0;
const UserRepository_1 = require("../../repositories/UserRepository");
const AppError_1 = require("../../errors/AppError");
const bcryptjs_1 = require("bcryptjs");
class CreateUserService {
    execute({ name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = new UserRepository_1.UserRepository();
            const userExist = yield userRepository.findByEmail(email);
            if (userExist) {
                throw new AppError_1.AppError('User already create');
            }
            const hashedPassword = yield (0, bcryptjs_1.hash)(password, 8);
            const lastLogin = new Date();
            const user = yield userRepository.create({ name, email, password: hashedPassword, lastLogin });
            return user;
        });
    }
}
exports.CreateUserService = CreateUserService;
