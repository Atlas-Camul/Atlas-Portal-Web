"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userManagementRoutes = void 0;
const express_1 = require("express");
const UserRepository_1 = require("../repositories/UserRepository");
const ListUsersService_1 = require("../services/ListUsersService");
const userManagementRoutes = (0, express_1.Router)();
exports.userManagementRoutes = userManagementRoutes;
const userRepository = new UserRepository_1.UserRepository();
userManagementRoutes.get('/', (req, res) => {
    const listUser = new ListUsersService_1.ListUsersService(userRepository);
    return res.json(listUser);
});
