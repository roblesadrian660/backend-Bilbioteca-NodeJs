let _ideaService = null;

class IdeaController {
    constructor({ IdeaService }) {
        _ideaService = IdeaService
    }

    async get(req, res) {
        let { ideaID } = req.params;
        let idea = await _ideaService.get(ideaID);
        return res.send(idea);
    }

    async getAll(req, res) {
        let ideas = await _ideaService.getAll();
        return res.send(ideas);
    }

    async create(req, res) {
        let { body } = req;
        let createIdea = await _ideaService.create(body);
        res.status(201).send(createIdea);
    }

    async update(req, res) {
        let { body } = req;
        let { ideaID } = req.params;
        let updateIdea = await _ideaService.update(ideaID, body);
        return res.send(updateIdea);
    }

    async delete(req, res) {
        let { ideaID } = req.params;
        let deleteIdea = await _ideaService.delete(ideaID);
        return res.send(deleteIdea);
    }

    async getUserIdeas(req, res) {
        let { userID } = req.params;
        let ideas = await _ideaService.getUserIdeas(userID);
        return res.send(ideas);
    }

    async upvoteIdea(req, res) {
        let { userID } = req.params;
        let idea = await _ideaService.upvoteIdea(userID);
        return res.send(idea);
    }

    async downvotesIdea(req, res) {
        let { userID } = req.params;
        let idea = await _ideaService.downvotesIdea(userID);
        return res.send(idea);
    }
}

module.exports = IdeaController;