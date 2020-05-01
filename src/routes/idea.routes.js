const { Router } = require('express');

module.exports = function({ IdeaController }) {
    const router = Router();

    router.get("", IdeaController.getAll);
    router.post("", IdeaController.create);
    router.get("/:ideaID", IdeaController.get);
    router.patch("/:ideaID", IdeaController.update);
    router.delete("/:ideaID", IdeaController.delete);
    router.get("/:userID/all", IdeaController.getUserIdeas);
    router.post("/:ideaID/upvote", IdeaController.upvoteIdea);
    router.get("/:userID/downvote", IdeaController.downvotesIdea);

    return router;
}