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
exports.signinRoutes = void 0;
const express_1 = require("express");
const AuthenticateUserService_1 = require("../services/userServices/AuthenticateUserService");
const signinRoutes = (0, express_1.Router)();
exports.signinRoutes = signinRoutes;
signinRoutes.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const authenticateUserService = new AuthenticateUserService_1.AuthenticateUserService();
    const sessionData = yield authenticateUserService.execute({ email, password });
    const { expiryTime, tokenData } = sessionData;
    res.cookie('loginAtlasToken', JSON.stringify(tokenData), { maxAge: expiryTime });
    return res.json(sessionData);
}));
