module.exports = (err, req, res, next) => {
    console.error(err.stack);
    
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: 'Validation error',
            errors: err.errors
        });
    }

    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    });
};
