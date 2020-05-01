let _commentService = null;

class CommentController {
    constructor({ CommentService }) {
        _commentService = CommentService
    }

    async get(req, res) {
        let { commentID } = req.params;
        let comment = await _commentService.get(commentID);
        return res.send(comment);
    }

    async update(req, res) {
        let { body } = req;
        let { commentID } = req.params;
        let updateComment = await _commentService.update(commentID, body);

        return res.send(updateComment);
    }

    async delete(req, res) {
        let { commentID } = req.params;
        let deleteComment = await _commentService.delete(commentID);
        return res.send(deleteComment);
    }

    async getIdeaComment(req, res) {
        let { ideaID } = req.params;
        let comments = await _commentService.getIdeaComment(ideaID);
        return res.send(comments);
    }

    async create(req, res) {
        let { body } = req;
        let { ideaID } = req.params;
        let createComment = await _commentService.createComment(body, ideaID);
        res.status(201).send(createComment);
    }
}

module.exports = CommentController;