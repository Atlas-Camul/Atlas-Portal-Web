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
exports.MessageRepository = void 0;
const typeorm_1 = require("typeorm");
const Message_1 = require("../entities/Message");
class MessageRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Message_1.Message);
    }
    delete(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const messageExit = yield this.repository.remove(message);
            return messageExit;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.repository.findOne({
                where: { id }
            });
            return message;
        });
    }
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const messages = yield this.repository.find();
            return messages;
        });
    }
}
exports.MessageRepository = MessageRepository;
