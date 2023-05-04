exports.middlewareGlobal = (res, req, next) => {
    req.render(
        titulo
    )
};

exports.outroMiddleware = (res, req, next) => {
    next();
};