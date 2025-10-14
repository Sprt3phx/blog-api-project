function errorHandler(err, req, res, next) {
    console.log('error', err.message)

    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
        details: err.stack
    })
}

module.exports = errorHandler;