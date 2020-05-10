const { generateToken } = require('../helpers/jwt.helpers');
let _userService = null;

class AuthService {

    constructor({ UserService }) {
        _userService = UserService;
    }

    async signUp(user) {
        let { username } = user;
        let userExist = await _userService.getUserByUsername(username);
        if (userExist) {
            let error = new Error();
            error.status = 401;
            error.message = "Este usuario ya existe"
            throw error;
        }

        return await _userService.create(user);
    }

    async signIn(user) {

        let { username, password } = user;

        let userExist = await _userService.getUserByUsername(username);
        if (!userExist) {
            let error = new Error();
            error.status = 400;
            error.message = "El usuario o contraseña estan erradas."
            throw error;
        }

        let validPassword = userExist.comparePasswords(password);
        if (!validPassword) {
            let error = new Error();
            error.status = 400;
            error.message = "El usuario o contraseña estan erradas."
            throw error;
        }

        let userToEncode = {
            username: userExist.username,
            id: userExist._id
        }

        let token = generateToken(userToEncode);

        return { token, user: userExist }
    }

}

module.exports = AuthService;