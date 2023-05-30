import { Router } from 'express';
import { AuthenticateUserService } from '../services/userServices/AuthenticateUserService';

const signinRoutes = Router();

signinRoutes.post('/', async (req, res) => {
    const { email, password } = req.body;

    const authenticateUserService = new AuthenticateUserService();

    const session = await  authenticateUserService.execute({ email, password });

    return res.json(session);
});

export { signinRoutes };