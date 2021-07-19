const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const surveySchema = new Schema({
  crime: [
    {
    type: String,
    required: true,
    },
  ],
  weapon: {
    type: String,
    required: true,
  },
  crimeScene: {
    type: String,
    required: true,
  },
  transportation: {
    type: String,
    required: true,
  },
  supplies: {
    type: String,
    required: true,
  },
  disposal: {
    type: String,
    required: true,
  },
  victim: {
    type: String,
    required: true,
  }
});

module.exports = bookSchema;
