import { Router } from 'express';
import { FindUserService } from '../services/userServices/FindUserService';
import { UpdateUserService } from '../services/userServices/UpdateUserService';

const settingsRoutes = Router();

settingsRoutes.post('/', async (req, res) => {
    const { email } = req.body;

    const findUserService = new FindUserService();

    const user = await findUserService.execute(email);

    return res.json(user);
})

settingsRoutes.put('/', async (req, res) => {
    const { name, email, phone, password } = req.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({ name, email, phone, password });

    return res.json(user);
});

export { settingsRoutes };