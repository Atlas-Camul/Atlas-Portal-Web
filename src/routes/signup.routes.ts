import { Router } from 'express';
import { CreateUserService } from '../services/CreateUserService';
import {ListUsersService} from '../services/ListUsersService';
import {UserRepository} from '../repositories/UserRepository';

const signupRoutes = Router();
const userRepository = new UserRepository();

signupRoutes.get('/', (req, res) => {
   const listUser = new ListUsersService(userRepository);

    return res.json(listUser);
});

signupRoutes.post('/', (req, res) => {
    const { name, email, password} = req.body;

    const createUserService = new CreateUserService(userRepository);

    const user = createUserService.execute({ name, email, password });

    return res.json(user);
})

export { signupRoutes };