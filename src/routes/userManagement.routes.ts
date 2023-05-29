import { Router } from 'express';
import { ListUsersService } from '../services/ListUsersService';
import { UpdateUserService } from '../services/UpdateUserService';

const userManagementRoutes = Router();

userManagementRoutes.get('/', async (req, res) => {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    return res.json(users);
})

userManagementRoutes.post('/', async (req, res) => {
    const { name, email, phone, password } = req.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({ name, email, phone, password });

    return res.json(user);
});


export {userManagementRoutes};