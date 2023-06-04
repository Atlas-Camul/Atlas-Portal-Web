import {Router} from 'express';

const homeRoutes = Router();

homeRoutes.get('/clearCookies', (req, res) => {
    res.clearCookie('loginAtlasToken');
    return res.json('Cookie successfully removed!');
});

export {homeRoutes};