class ErrorHandler extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.mesage = err.message || "Internal server error!"
    err.status = err.statusCode || 500;

    return res
    .status(err.statusCode)
    .json({
        success: false,
        message: err.mesage
    })
}
export default ErrorHandler