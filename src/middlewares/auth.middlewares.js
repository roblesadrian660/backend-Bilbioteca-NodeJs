const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        let error = new Error();
        error.status = 400;
        error.message = "Error al autenticar el token"
        throw error;
    }

    jwt.verify(token, JWT_SECRET, function(error, decodedToken) {

        if (error) {
            let error = new Error();
            error.status = 400;
            error.message = "token invalido"
            throw error;
        }

        req.user = decodedToken.user;
        next();
    });
}