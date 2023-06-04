import { Router } from 'express';
import { AuthenticateUserService } from '../services/userServices/AuthenticateUserService';

const signinRoutes = Router();

signinRoutes.post('/', async (req, res) => {
    const { email, password } = req.body;

    const authenticateUserService = new AuthenticateUserService();

    const sessionData = await  authenticateUserService.execute({ email, password });

    const { expiryTime, tokenData } = sessionData;

    res.cookie('loginAtlasToken', JSON.stringify(tokenData), { maxAge: expiryTime });

    return res.json(sessionData);
});

export { signinRoutes };