const mongoose = require('mongoose');
const { compareSync, hashSync, genSaltSync } = require('bcryptjs');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

UserSchema.methods.toJSON = function() {
    let user = this.toObject();
    delete user.password;
    return user;
}

UserSchema.methods.comparePasswords = function(password) {
    return compareSync(password, this.password);
}
UserSchema.pre('save', function(next) {
    let user = this;
    let salt = genSaltSync(10);

    if (!user.isModified('password')) {
        return next();
    }

    let hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next();
});

module.exports = mongoose.model('user', UserSchema);