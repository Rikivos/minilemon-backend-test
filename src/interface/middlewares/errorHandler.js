export function errorHandler(err, req, res, next) {
    console.error("==== ERROR LOG ====");
    console.error("Name:", err.name);
    console.error("Message:", err.message);
    console.error("Code:", err.code);
    console.error("Stack:", err.stack);
    console.error("Full:", JSON.stringify(err, Object.getOwnPropertyNames(err)));
    console.error("===================");

    let statusCode = 500;
    let message = "Internal Server Error";
    if (err.code && err.code === 11000) {
        statusCode = 400;
        message = `Duplicate key error: ${JSON.stringify(err.keyValue)}`;
    }
    else if (
        err.name === "ValidationError" || 
        /invalid|exists|format|must|required/i.test(err.message)
    ) {
        statusCode = 400;
        message = err.message;
    }
    else if (
        err.name === "NotFoundError" || 
        /not found/i.test(err.message)
    ) {
        statusCode = 404;
        message = err.message;
    }
    res.status(statusCode).json({
        success: false,
        message
    });
}
