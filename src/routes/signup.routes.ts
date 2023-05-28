import { Router } from 'express';
import { CreateUserService } from '../services/CreateUserService';
import {UserRepository} from '../repositories/UserRepository';

const signupRoutes = Router();
const userRepository = new UserRepository();

signupRoutes.get('/', (req, res) => {
    const users =  userRepository.all();

    return res.json(users);
});

signupRoutes.post('/', (req, res) => {
    const { name, email, password} = req.body;

    const createUserService = new CreateUserService(userRepository);

    const user = createUserService.execute({ name, email, password });

    return res.json(user);
})

export { signupRoutes };