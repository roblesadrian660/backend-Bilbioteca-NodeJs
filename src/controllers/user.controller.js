let _userService = null;

class UserController {
    constructor({ UserService }) {
        _userService = UserService
    }

    async get(req, res) {
        let { userID } = req.params;
        let user = await _userService.get(userID);
        return res.send(user);
    }

    async getAll(req, res) {
        let users = await _userService.getAll();
        return res.send(users);
    }

    async update(req, res) {
        let { body } = req;
        let { userID } = req.params;
        let updateUser = await _userService.update(userID, body);

        return res.send(updateUser);
    }

    async delete(req, res) {
        let { userID } = req.params;
        let deleteUser = await _userService.delete(userID);
        return res.send(deleteUser);
    }
}

module.exports = UserController;