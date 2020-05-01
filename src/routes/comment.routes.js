const { Router } = require('express');

module.exports = function({ CommentController }) {
    const router = Router();

    router.get("/:ideaID/unique", CommentController.getIdeaComment);
    router.get("/:commentID", CommentController.get);
    router.post("/:ideaID", CommentController.create);
    router.patch("/:commentID", CommentController.update);
    router.delete("/:commentID", CommentController.delete);

    return router;
}