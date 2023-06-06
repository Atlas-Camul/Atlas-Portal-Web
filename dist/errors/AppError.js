"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError {
    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
/**
 * 200 - Success
 * 201 - Created
 * 400 - Bad Request
 * 404 - Not Found
 * 500 - Internal Server Error
 */ 
