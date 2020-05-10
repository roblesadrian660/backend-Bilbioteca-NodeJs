const { Router } = require('express');
const { AuthMiddleware } = require('../middlewares');

module.exports = function({ UserController }) {
    const router = Router();

    router.get("", [AuthMiddleware], UserController.getAll);
    router.get("/:userID", UserController.get);
    router.patch("/:userID", UserController.update);
    router.delete("/:userID", UserController.delete);

    return router;
}