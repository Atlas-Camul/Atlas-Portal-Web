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
exports.DeleteMessageService = void 0;
const MessageRepository_1 = require("../../repositories/MessageRepository");
const DeleteMediasService_1 = require("../mediaServices/DeleteMediasService");
const AppError_1 = require("../../errors/AppError");
class DeleteMessageService {
    execute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const messageRepository = new MessageRepository_1.MessageRepository();
            const messageExist = yield messageRepository.findById(id);
            if (!messageExist) {
                throw new AppError_1.AppError('Message not found', 404);
            }
            const medias = yield new DeleteMediasService_1.DeleteMediasService().execute(id);
            const message = yield messageRepository.delete(messageExist);
            return { message, medias };
        });
    }
}
exports.DeleteMessageService = DeleteMessageService;
