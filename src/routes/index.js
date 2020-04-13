const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');
require('express-async-errors');

module.exports = function({ HomeRoutes }) {
    const routes = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression())
    apiRoutes.use("/home", HomeRoutes);

    routes.use("/v1/api", apiRoutes);
    routes.use(NotFoundMiddleware);
    routes.use(ErrorMiddleware);

    return routes;
}