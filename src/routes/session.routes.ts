import { Router } from 'express';
import { FindSessionService } from '../services/sessionServices/FindSessionService';

const sessionRoutes = Router();

sessionRoutes.post('/', async (req, res) => {
    const { userID, token } = req.body;

    const findSessionService = new FindSessionService();

    const session = await findSessionService.execute({ userID, token });

    res.json(session);
});

export { sessionRoutes };