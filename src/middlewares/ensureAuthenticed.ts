import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';
import authConfig from '../config/auth';

interface ITokenPayLoad{
    iat: number,
    exp: number,
    sub: string
}


const ensureAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError('JWT token is missing!');
    }
    const [, token] = authHeader.split(' '); 
    try {
        const decoded = verify(token, authConfig.jwt.secret)

        const { sub } = decoded as ITokenPayLoad;

        req.user = {
            id: sub
        };

        next();
    } catch (err) {
        throw new AppError('Invalid JWT token!');
    }
};  

export default ensureAuthenticated;