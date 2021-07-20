const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Book.js
const Survey = require('./Survey');

const indivUser = new Schema(
  {
    alias: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set savedBooks to be an array of data that adheres to the bookSchema
    User: [Survey],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
indivUser.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  indivUser.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  // when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
  indivUser.virtual('userAnswers').get(function () {
    return this.Survey.answers;
  });
  
  const Users = model('User', indivUser);
  
  module.exports = Users;