import {Router} from 'express';
import {homeRoutes} from './home.routes';
import { userManagementRoutes } from './userManagement.routes';
import { beaconManagementRoutes } from './beaconManagement.routes';
import { userExperienceRoutes } from './userExperience.routes';
import { settingsRoutes } from './settings.routes';
import { passwordResetRoutes } from './passwordReset.route';
import { passwordResetEmailRoutes } from './passwordResedEmail.routes';
import { signinRoutes } from './signin.routes';
import { signupRoutes } from './signup.routes';
import { sessionRoutes } from './session.routes';
import ensureAuthenticated from '../middlewares/ensureAuthenticed';

const routes = Router();

routes.use('/session', sessionRoutes);
routes.use('/auth/password-reset', passwordResetRoutes);
routes.use('/auth/password-reset-email', passwordResetEmailRoutes);
routes.use('/auth/signin', signinRoutes);
routes.use('/auth/signup', signupRoutes);
//routes.use(ensureAuthenticated);
routes.use('/', homeRoutes);
routes.use('/user-management', userManagementRoutes);
routes.use('/beacon-management', beaconManagementRoutes);
routes.use('/user-experience', userExperienceRoutes);
routes.use('/settings', settingsRoutes);


export {routes};

/**
 * GET - Buscar e retornar algo
 * POST - Criar algo
 * PUT - Atualizar
 * PATCH - Atualizar um �nico elemento
 */
