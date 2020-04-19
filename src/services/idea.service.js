const BaseService = require('./base.service');
let _ideaRepository = null;

class IdeaService extends BaseService {
    constructor({ IdeaRepository }) {
        super(IdeaRepository);
        _ideaRepository = IdeaRepository;
    }

    async getUserIdeas(author) {
        if (!author) {
            let error = new Error();
            error.status = 400;
            error.message = "el usuraio es requerido."
            throw error;
        }
        return await _ideaRepository.getUserIdeas(author);
    }

    async upvoteIdea(ideaId) {
        if (!ideaId) {
            let error = new Error();
            error.status = 400;
            error.message = "el id de la idea es requerido."
            throw error;
        }

        let idea = await _ideaRepository.get(ideaId);

        if (!idea) {
            let error = new Error();
            error.status = 404;
            error.message = "La idea no existe."
            throw error;
        }
        idea.upvotes.push(true);

        return await _ideaRepository.update(ideaId, { upvotes: idea.upvotes });
    }

    async downvotesIdea(ideaId) {
        if (!ideaId) {
            let error = new Error();
            error.status = 400;
            error.message = "el id de la idea es requerido."
            throw error;
        }

        let idea = await _ideaRepository.get(ideaId);

        if (!idea) {
            let error = new Error();
            error.status = 404;
            error.message = "La idea no existe."
            throw error;
        }
        idea.downvotes.push(true);

        return await _ideaRepository.update(ideaId, { downvotes: idea.downvotes });
    }
}

module.exports = IdeaService;