import { Router } from 'express';
import { ListBeaconsService } from '../services/beaconServices/ListBeaconsService';

const homeRoutes = Router();

homeRoutes.get('/clearCookies', (req, res) => {
    res.clearCookie('loginAtlasToken');
    return res.json('Cookie successfully removed!');
});

homeRoutes.get('/map', async (req, res) => {
    const listBeaconsService = new ListBeaconsService();

    const beacons = await listBeaconsService.execute();

    return res.json(beacons);
})

export {homeRoutes};