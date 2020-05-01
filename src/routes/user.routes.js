const { Router } = require('express');

module.exports = function({ UserController }) {
    const router = Router();

    router.get("", UserController.getAll);
    router.get("/:userID", UserController.get);
    router.patch("/:userID", UserController.update);
    router.delete("/:userID", UserController.delete);

    return router;
}