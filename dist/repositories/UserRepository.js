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
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
class UserRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(User_1.User);
    }
    create({ name, email, password, lastLogin }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.repository.create({ name, email, password, lastLogin });
            yield this.repository.save(user);
            return user;
        });
    }
    delete(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExit = yield this.repository.remove(user);
            return userExit;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.findOne({
                where: [{ email }]
            });
            return user;
        });
    }
    findByEmailOrName({ name, email }) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.repository.find({
                where: [
                    { name: (0, typeorm_1.Like)(name) },
                    { email: (0, typeorm_1.Like)(email) }
                ]
            });
            return users;
        });
    }
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.find();
            return user;
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExit = yield this.repository.save(user);
            return userExit;
        });
    }
}
exports.UserRepository = UserRepository;
