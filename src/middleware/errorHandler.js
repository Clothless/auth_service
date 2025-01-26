const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace

    // Customize the response based on the error
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong!';

    res.status(statusCode).json({ message });
};

module.exports = errorHandler;