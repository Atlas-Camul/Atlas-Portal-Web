import { Router } from 'express';
import { CreateUserService } from '../services/CreateUserService';

const signupRoutes = Router();

signupRoutes.post('/', (req, res) => {
    const { name, email, password} = req.body;

    const createUserService = new CreateUserService();

    const user = createUserService.execute({ name, email, password });
})

export { signupRoutes };