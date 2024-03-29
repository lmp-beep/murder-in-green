const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedResults` array in User.js
const SurveySchema = new Schema({
  crime: {
    type: String,
    required: true,
  },
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
    distance_unit: String,
    distance_value: Number,
    vehicle_model_id: Number,
    required: true,
    data: {
      id: String,//ask if we need this 
      type: String, //ask if we need this 
      attributes: {
       carbon_lb: Number, 
      }
    }
  },
  // supplies: {
  //   type: String,
  //   required: true,
  // },
  disposal: {
    type: String,
    required: true,
  },
  victim: {
    type: String,
    required: true,
  },
  totalEmissions: {
    type: String,
    required: true,
  },
});

module.exports = SurveySchema;
