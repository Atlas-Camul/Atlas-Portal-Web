//e.g server.js
import express, {Request, Response, NextFunction} from "express";
import 'express-async-errors';
import ViteExpress from "vite-express";
import {routes} from './routes';
import {AppError} from './errors/AppError';
import './database/index';
import 'express-async-errors';
import cookieParser from 'cookie-parser';

const app = express();
ViteExpress.config({ mode: "production" });

app.use(cookieParser());
app.use(express.json());
app.use(routes);
app.use((err: Error, request: Request, response: Response, _:NextFunction)=>{
    if(err instanceof AppError){
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

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));