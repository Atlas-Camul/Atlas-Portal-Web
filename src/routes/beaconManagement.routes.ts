import { Router } from 'express';
import { CreateBeaconService } from '../services/CreateBeaconService';

const beaconManagementRoutes = Router();

beaconManagementRoutes.post('/', async (req, res) => {
    const { name, latitude, longitude, zoneID } = req.body;

    const createBeaconService = new CreateBeaconService();

    const beacon = await createBeaconService.execute({ name, latitude, longitude, zoneID });

    return res.json(beacon);
})

export { beaconManagementRoutes };