const BaseService = require('./base.service');

let _commentRepository = null;
let _ideaRepository = null;

class CommentService extends BaseService {
    constructor({ CommentRepository, IdeaRepository }) {
        super(CommentRepository);
        _commentRepository = CommentRepository;
        _ideaRepository = IdeaRepository;
    }

    async getIdeaComment(idIdea) {
        if (!idIdea) {
            let error = new Error();
            error.status = 400;
            error.message = "el id de la idea es requerido."
            throw error;
        }

        let idea = await _ideaRepository.get(idIdea);

        if (!idea) {
            let error = new Error();
            error.status = 404;
            error.message = "La idea no existe."
            throw error;
        }

        let { comments } = idea;

        return comments;
    }

    async createComment(comment, idIdea) {
        if (!idIdea) {
            let error = new Error();
            error.status = 400;
            error.message = "el id de la idea es requerido."
            throw error;
        }

        if (!comment) {
            let error = new Error();
            error.status = 400;
            error.message = "el comment de la idea es requerido."
            throw error;
        }

        let idea = await _ideaRepository.get(idIdea);

        if (!idea) {
            let error = new Error();
            error.status = 404;
            error.message = "La idea no existe."
            throw error;
        }

        let createdComment = await _commentRepository.create(comment);
        idea.comments.push(createdComment);

        return await _ideaRepository.update(idIdea, { comments: idea.comments });
    }
}

module.exports = CommentService;