import { Router } from 'express';
import { CreateBeaconService } from '../services/CreateBeaconService';
import { DeleteBeaconService } from '../services/DeleteBeaconService';
import { ListBeaconsService } from '../services/ListBeaconsService';
import { UpdateBeaconService } from '../services/UpdateBeaconService';

const beaconManagementRoutes = Router();

beaconManagementRoutes.post('/create', async (req, res) => {
    const { name, latitude, longitude, zoneID } = req.body;

    const createBeaconService = new CreateBeaconService();

    const beacon = await createBeaconService.execute({ name, latitude, longitude, zoneID });

    return res.json(beacon);
})

beaconManagementRoutes.post('/update', async (req, res) => {
    const { id, name, latitude, longitude, zoneID } = req.body;

    const updateBeaconService = new UpdateBeaconService();

    const beacon = await updateBeaconService.execute({ id, name, latitude, longitude, zoneID });

    return res.json(beacon);
});

beaconManagementRoutes.post('/delete', async (req, res) => {
    const { id } = req.body;

    const deleteBeaconService = new DeleteBeaconService();

    const beacon = await deleteBeaconService.execute(id);

    return res.json(id);
});

beaconManagementRoutes.get('/', async (req, res) => {
    const listBeaconsService = new ListBeaconsService();

    const beacons = await listBeaconsService.execute();

    return res.json(beacons);
});

export { beaconManagementRoutes };