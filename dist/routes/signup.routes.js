"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupRoutes = void 0;
const express_1 = require("express");
const CreateUserService_1 = require("../services/CreateUserService");
const ListUsersService_1 = require("../services/ListUsersService");
const UserRepository_1 = require("../repositories/UserRepository");
const signupRoutes = (0, express_1.Router)();
exports.signupRoutes = signupRoutes;
const userRepository = new UserRepository_1.UserRepository();
signupRoutes.get('/', (req, res) => {
    const listUser = new ListUsersService_1.ListUsersService(userRepository);
    return res.json(listUser);
});
signupRoutes.post('/', (req, res) => {
    const { name, email, password } = req.body;
    const createUserService = new CreateUserService_1.CreateUserService(userRepository);
    const user = createUserService.execute({ name, email, password });
    return res.json(user);
});
