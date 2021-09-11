const { Schema, model } = require('mongoose');

const usersSchema = new Schema ({
    name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

const User = model('User', usersSchema);

module.exports = User;
