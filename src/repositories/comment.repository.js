const BaseRepositoty = require('./base.repository')
let _comment = null;


class CommentRepository extends BaseRepositoty {

    constructor({ Comment }) {
        super(Comment);
        _comment = Comment;
    }
}

module.exports = CommentRepository;