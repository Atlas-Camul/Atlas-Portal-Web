import { Router } from 'express';
import { ListBeaconsService } from '../services/beaconServices/ListBeaconsService';
import { ListZonesServices } from '../services/zoneServices/ListZonesService';

const homeRoutes = Router();

homeRoutes.get('/clearCookies', (req, res) => {
    res.clearCookie('loginAtlasToken');
    return res.json('Cookie successfully removed!');
});

homeRoutes.get('/map', async (req, res) => {
    const listBeaconsService = new ListBeaconsService();

    const listZoneServices = new ListZonesServices();

    const beacons = await listBeaconsService.execute();

    const zones = await listZoneServices.execute();

    return res.json({ beacons: beacons, zones: zones });
})

export {homeRoutes};