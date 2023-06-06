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
exports.homeRoutes = void 0;
const express_1 = require("express");
const ListBeaconsService_1 = require("../services/beaconServices/ListBeaconsService");
const ListZonesService_1 = require("../services/zoneServices/ListZonesService");
const homeRoutes = (0, express_1.Router)();
exports.homeRoutes = homeRoutes;
homeRoutes.get('/clearCookies', (req, res) => {
    res.clearCookie('loginAtlasToken');
    return res.json('Cookie successfully removed!');
});
homeRoutes.get('/map', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listBeaconsService = new ListBeaconsService_1.ListBeaconsService();
    const listZoneServices = new ListZonesService_1.ListZonesServices();
    const beacons = yield listBeaconsService.execute();
    const zones = yield listZoneServices.execute();
    return res.json({ beacons: beacons, zones: zones });
}));
