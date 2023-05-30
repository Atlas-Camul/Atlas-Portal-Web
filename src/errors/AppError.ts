class AppError{
    public readonly message: string;
    
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400){
        this.message = message;
        this.statusCode = statusCode;
    }
}

export { AppError };

/**
 * 200 - Success
 * 201 - Created
 * 400 - Bad Request
 * 404 - Not Found
 * 500 - Internal Server Error
 */