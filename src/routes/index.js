const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');
require('express-async-errors');

module.exports = function({ HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes }) {
    const routes = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression())

    apiRoutes.use("/home", HomeRoutes);
    apiRoutes.use("/user", UserRoutes);
    apiRoutes.use("/idea", IdeaRoutes);
    apiRoutes.use("/comment", CommentRoutes);

    routes.use("/v1/api", apiRoutes);
    routes.use(NotFoundMiddleware);
    routes.use(ErrorMiddleware);

    return routes;
}