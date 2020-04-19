const BaseService = require('./base.service');
let _userRepository = null;

class UserService extends BaseService {
    constructor({ UserRepository }) {
        super(UserRepository);
        _userRepository = UserRepository;
    }
    async getUserByUsername(username) {
        if (!username) {
            let error = new Error();
            error.status = 400;
            error.message = "el usuraio es requerido"
            throw error;
        }

        return await _userRepository.getUserByUsername(username);
    }

}

module.exports = UserService;