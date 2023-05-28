"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const home_routes_1 = require("./home.routes");
const userManagement_routes_1 = require("./userManagement.routes");
const beaconManagement_routes_1 = require("./beaconManagement.routes");
const userExperience_routes_1 = require("./userExperience.routes");
const settings_routes_1 = require("./settings.routes");
const passwordReset_route_1 = require("./passwordReset.route");
const passwordResedEmail_routes_1 = require("./passwordResedEmail.routes");
const signin_routes_1 = require("./signin.routes");
const signup_routes_1 = require("./signup.routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use('/', home_routes_1.homeRoutes);
routes.use('/user-management', userManagement_routes_1.userManagementRoutes);
routes.use('/beacon-management', beaconManagement_routes_1.beaconManagementRoutes);
routes.use('/user-experience', userExperience_routes_1.userExperienceRoutes);
routes.use('/settings', settings_routes_1.settingsRoutes);
routes.use('/auth/password-reset', passwordReset_route_1.passwordResetRoutes);
routes.use('/auth/password-reset-email', passwordResedEmail_routes_1.passwordResetEmailRoutes);
routes.use('/auth/signin', signin_routes_1.signinRoutes);
routes.use('/auth/signup', signup_routes_1.signupRoutes);
/**
 * 200 - Success
 * 201 - Created
 * 400 - Bad Request
 * 404 - Not Found
 * 500 - Internal Server Error
 */
