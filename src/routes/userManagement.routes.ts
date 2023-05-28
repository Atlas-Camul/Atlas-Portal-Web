import {Router} from 'express';
import {UserRepository} from '../repositories/UserRepository';
import {ListUsersService} from '../services/ListUsersService';

const userManagementRoutes = Router();
const userRepository = new UserRepository();

userManagementRoutes.get('/', (req, res) => {
    const listUser = new ListUsersService(userRepository);

    return res.json(listUser);
});

export {userManagementRoutes};