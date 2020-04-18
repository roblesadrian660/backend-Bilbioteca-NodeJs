const BaseRepositoty = require('./base.repository')
let _idea = null;


class IdeaRepository extends BaseRepositoty {

    constructor({ Idea }) {
        super(Idea);
        _idea = Idea;
    }

    async getUserIdeas(author) {
        return await _idea.find({ author });
    }
}

module.exports = IdeaRepository;