const { Schema, model } = require('mongoose');

const usersSchema = new Schema ({

});

const User = model('User', usersSchema);

module.exports = User;
