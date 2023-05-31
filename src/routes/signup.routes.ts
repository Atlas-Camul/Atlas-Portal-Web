import { Router } from 'express';
import { CreateUserService } from '../services/userServices/CreateUserService';

const signupRoutes = Router();


signupRoutes.post('/', async (req, res) => {
    const { name, email, password} = req.body;

    const createUserService = new CreateUserService();
    
    const user = await createUserService.execute({ name, email, password });
    
    return res.json(user);
});

export { signupRoutes };