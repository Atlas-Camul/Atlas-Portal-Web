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
const { Media } = require('./Connection');
function insertMedia(url, type) {
    return __awaiter(this, void 0, void 0, function* () {
        const media = new Media();
        media.url = url;
        media.type = type;
        const mediaRepository = getRepository(Media);
        yield mediaRepository.save(media);
        console.log('Nova m�dia inserida:', media);
    });
}
function updateMedia(id, url, type) {
    return __awaiter(this, void 0, void 0, function* () {
        const mediaRepository = getRepository(Media);
        const media = yield mediaRepository.findOne(id);
        if (!media) {
            console.log('M�dia n�o encontrada');
            return;
        }
        media.url = url;
        media.type = type;
        yield mediaRepository.save(media);
        console.log('M�dia atualizada:', media);
    });
}
function deleteMedia(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const mediaRepository = getRepository(Media);
        const media = yield mediaRepository.findOne(id);
        if (!media) {
            console.log('M�dia n�o encontrada');
            return;
        }
        yield mediaRepository.remove(media);
        console.log('M�dia removida:', media);
    });
}
module.exports = { insertMedia, updateMedia, deleteMedia };
