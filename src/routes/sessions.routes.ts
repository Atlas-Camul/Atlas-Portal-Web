import { Router } from 'express';
import { AuthenticateUserService } from '../services/authenticateUserService';

const sessionsRoutes = Router();

sessionsRoutes.post('/', async (request, response) => {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    const session = authenticateUserService.execute({ email, password });
    return response.json(session); 
});


export { sessionsRoutes };