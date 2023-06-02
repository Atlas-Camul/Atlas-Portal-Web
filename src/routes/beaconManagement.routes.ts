import { Router } from 'express';
import { AppError } from '../errors/AppError';
import { CreateBeaconService } from '../services/beaconServices/CreateBeaconService';
import { DeleteBeaconService } from '../services/beaconServices/DeleteBeaconService';
import { ListBeaconsService } from '../services/beaconServices/ListBeaconsService';
import { UpdateBeaconService } from '../services/beaconServices/UpdateBeaconService';

const beaconManagementRoutes = Router();

beaconManagementRoutes.get('/list', async (req, res) => {
    const referer = req.headers.referer;

    if (!referer) {
        throw new AppError("Page not found", 404);
    }

    const listBeaconsService = new ListBeaconsService();

    const beacons = await listBeaconsService.execute();

    console.log(beacons);

    return res.json(beacons);

    
});

beaconManagementRoutes.post('/', async (req, res) => {
    const { name, latitude, longitude, zoneID, macAddress } = req.body;

    const createBeaconService = new CreateBeaconService();

    const beacon = await createBeaconService.execute({ name, latitude, longitude, zoneID, macAddress });

    return res.json(beacon);
})

beaconManagementRoutes.put('/', async (req, res) => {
    const { name, latitude, longitude, zoneID, macAddress } = req.body;

    const updateBeaconService = new UpdateBeaconService();

    const beacon = await updateBeaconService.execute({ name, latitude, longitude, zoneID, macAddress });

    return res.json(beacon);
});

beaconManagementRoutes.delete('/', async (req, res) => {
    const { macAddress } = req.body;

    const deleteBeaconService = new DeleteBeaconService();

    const beacon = await deleteBeaconService.execute(macAddress);

    return res.json(beacon);
});

export { beaconManagementRoutes };