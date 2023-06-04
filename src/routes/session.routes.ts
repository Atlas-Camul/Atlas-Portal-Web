import { Router } from 'express';
import { FindSessionService } from '../services/sessionServices/FindSessionService';

const sessionRoutes = Router();

sessionRoutes.get('/', async (req, res) => {
    const findSessionService = new FindSessionService();

    const session = await findSessionService.execute();

    res.json(session);
});

export { sessionRoutes };