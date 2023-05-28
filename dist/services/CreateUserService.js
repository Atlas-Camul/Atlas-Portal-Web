"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const AppError_1 = require("../errors/AppError");
class CreateUserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute({ name, email, password }) {
        const userExist = this.userRepository.findByEmail(email);
        if (userExist) {
            throw new AppError_1.AppError('User already create');
        }
        const user = this.userRepository.create({ name, email, password });
        return user;
    }
}
exports.CreateUserService = CreateUserService;
