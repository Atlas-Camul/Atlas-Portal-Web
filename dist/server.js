"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//e.g server.js
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const vite_express_1 = __importDefault(require("vite-express"));
const routes_1 = require("./routes");
const AppError_1 = require("./errors/AppError");
require("./database/index");
require("express-async-errors");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(routes_1.routes);
app.use((err, request, response, _) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});
vite_express_1.default.listen(app, 3000, () => console.log("Server is listening..."));
