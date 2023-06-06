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
exports.userExperienceRoutes = void 0;
const express_1 = require("express");
const ListMessagesService_1 = require("../services/messageServices/ListMessagesService");
const DeleteMessageService_1 = require("../services/messageServices/DeleteMessageService");
const ListMediasService_1 = require("../services/mediaServices/ListMediasService");
const AppError_1 = require("../errors/AppError");
const userExperienceRoutes = (0, express_1.Router)();
exports.userExperienceRoutes = userExperienceRoutes;
userExperienceRoutes.get('/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const referer = req.headers.referer;
    if (!referer) {
        throw new AppError_1.AppError("Page not found", 404);
    }
    const listMessageService = new ListMessagesService_1.ListMessageService();
    const messages = yield listMessageService.execute();
    return res.json(messages);
}));
userExperienceRoutes.get('/media', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryParams = req.query;
    var id = queryParams.id;
    if (typeof id !== 'string') {
        id = '0';
    }
    var messageID = Number(id);
    const listMediaService = new ListMediasService_1.ListMediasService();
    const medias = yield listMediaService.execute(messageID);
    return res.json(medias);
}));
userExperienceRoutes.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { messageID } = req.body;
    const deleteMessageService = new DeleteMessageService_1.DeleteMessageService();
    const message = yield deleteMessageService.execute(messageID);
    return res.json(message);
}));
