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
exports.beaconManagementRoutes = void 0;
const express_1 = require("express");
const AppError_1 = require("../errors/AppError");
const CreateBeaconService_1 = require("../services/beaconServices/CreateBeaconService");
const DeleteBeaconService_1 = require("../services/beaconServices/DeleteBeaconService");
const ListBeaconsService_1 = require("../services/beaconServices/ListBeaconsService");
const UpdateBeaconService_1 = require("../services/beaconServices/UpdateBeaconService");
const beaconManagementRoutes = (0, express_1.Router)();
exports.beaconManagementRoutes = beaconManagementRoutes;
beaconManagementRoutes.get('/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const referer = req.headers.referer;
    if (!referer) {
        throw new AppError_1.AppError("Page not found", 404);
    }
    const listBeaconsService = new ListBeaconsService_1.ListBeaconsService();
    const beacons = yield listBeaconsService.execute();
    return res.json(beacons);
}));
beaconManagementRoutes.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, latitude, longitude, macAddress } = req.body;
    const createBeaconService = new CreateBeaconService_1.CreateBeaconService();
    const beacon = yield createBeaconService.execute({ name, latitude, longitude, macAddress });
    return res.json(beacon);
}));
beaconManagementRoutes.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, latitude, longitude, macAddress } = req.body;
    const updateBeaconService = new UpdateBeaconService_1.UpdateBeaconService();
    const beacon = yield updateBeaconService.execute({ name, latitude, longitude, macAddress });
    return res.json(beacon);
}));
beaconManagementRoutes.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { macAddress } = req.body;
    const deleteBeaconService = new DeleteBeaconService_1.DeleteBeaconService();
    const beacon = yield deleteBeaconService.execute(macAddress);
    return res.json(beacon);
}));
