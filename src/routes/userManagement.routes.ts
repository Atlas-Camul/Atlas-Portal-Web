import { Router } from 'express';
import { DeleteUserService } from '../services/userServices/DeleteUserService';
import { ListUsersService } from '../services/userServices/ListUsersService';
import { UpdateUserService } from '../services/userServices/UpdateUserService';
import { FindUserService } from '../services/userServices/FindUserService';
import { AppError } from '../errors/AppError';

const userManagementRoutes = Router();

userManagementRoutes.get('/list', async (req, res) => {
    const referer = req.headers.referer;

    if (!referer) {
        throw new AppError("Page not found", 404);
    }

    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    return res.json(users);
});

userManagementRoutes.put('/update', async (req, res) => {
    const referer = req.headers.referer;

    if (!referer) {
        throw new AppError("Page not found", 404);
    }

    const { name, email, phone, password } = req.body;


    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({ name, email, phone, password });

    return res.json(user);
});

userManagementRoutes.delete('/delete', async (req, res) => {
    const referer = req.headers.referer;

    if (!referer) {
        throw new AppError("Page not found", 404);
    }

    const { email } = req.body;

    const deleteUserService = new DeleteUserService();

    const user = await deleteUserService.execute(email);

    return res.json(user);
});


userManagementRoutes.get('/find', async (req, res) => {
    const referer = req.headers.referer;

    if (!referer) {
        throw new AppError("Page not found", 404);
    }

    const { email } = req.body;

    const findUserService = new FindUserService();

    const user = await findUserService.execute(email);

    return res.json(user);
});



export {userManagementRoutes};