import { Router } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

const signinRoutes = Router();

signinRoutes.post('/', async (req, res) => {
    const { email, password } = req.body;

    const authenticateUserService = new AuthenticateUserService();

    const session = authenticateUserService.execute({ email, password });

    return res.json(session);
});

export { signinRoutes };