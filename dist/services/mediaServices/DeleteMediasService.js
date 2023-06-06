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
exports.DeleteMediasService = void 0;
const MediaRepository_1 = require("../../repositories/MediaRepository");
class DeleteMediasService {
    execute(messageID) {
        return __awaiter(this, void 0, void 0, function* () {
            const mediaRepository = new MediaRepository_1.MediaRepository();
            const medias = yield mediaRepository.deleteByMessage(messageID);
            return medias;
        });
    }
}
exports.DeleteMediasService = DeleteMediasService;
