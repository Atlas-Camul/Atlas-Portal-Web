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
exports.userManagementRoutes = void 0;
const express_1 = require("express");
const DeleteUserService_1 = require("../services/userServices/DeleteUserService");
const ListUsersService_1 = require("../services/userServices/ListUsersService");
const UpdateUserService_1 = require("../services/userServices/UpdateUserService");
const SearchUsersService_1 = require("../services/userServices/SearchUsersService");
const AppError_1 = require("../errors/AppError");
const userManagementRoutes = (0, express_1.Router)();
exports.userManagementRoutes = userManagementRoutes;
userManagementRoutes.get('/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const referer = req.headers.referer;
    if (!referer) {
        throw new AppError_1.AppError("Page not found", 404);
    }
    const listUsersService = new ListUsersService_1.ListUsersService();
    const users = yield listUsersService.execute();
    return res.json(users);
}));
userManagementRoutes.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, password } = req.body;
    const updateUserService = new UpdateUserService_1.UpdateUserService();
    const user = yield updateUserService.execute({ name, email, phone, password });
    return res.json(user);
}));
userManagementRoutes.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const deleteUserService = new DeleteUserService_1.DeleteUserService();
    const user = yield deleteUserService.execute(email);
    return res.json(user);
}));
userManagementRoutes.post('/find', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const referer = req.headers.referer;
    if (!referer) {
        throw new AppError_1.AppError("Page not found", 404);
    }
    const { name, email } = req.body;
    const searchUsersService = new SearchUsersService_1.SearchUsersService();
    const user = yield searchUsersService.execute({ name, email });
    return res.json(user);
}));
