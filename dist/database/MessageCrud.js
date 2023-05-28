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
const { getRepository } = require('typeorm');
const { Message } = require('./Connection');
function insertMessage(title, description, latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        const message = new Message();
        message.title = title;
        message.description = description;
        message.latitude = latitude;
        message.longitude = longitude;
        const messageRepository = getRepository(Message);
        yield messageRepository.save(message);
        console.log('Nova mensagem inserida:', message);
    });
}
function updateMessage(id, title, description, latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        const messageRepository = getRepository(Message);
        const message = yield messageRepository.findOne(id);
        if (!message) {
            console.log('Mensagem n�o encontrada');
            return;
        }
        message.title = title;
        message.description = description;
        message.latitude = latitude;
        message.longitude = longitude;
        yield messageRepository.save(message);
        console.log('Mensagem atualizada:', message);
    });
}
function deleteMessage(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const messageRepository = getRepository(Message);
        const message = yield messageRepository.findOne(id);
        if (!message) {
            console.log('MMensagem n�o encontrada');
            return;
        }
        yield messageRepository.remove(message);
        console.log('Mensagem removida:', message);
    });
}
module.exports = { insertMessage, updateMessage, deleteMessage };
