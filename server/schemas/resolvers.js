const axios = require("axios");
// import Authentication error from apollo server express
const { AuthenticationError } = require("apollo-server-express");
// import user model
const { User } = require("../models");
// import sign token function from auth
const { signToken } = require("../utils/auth");

// Create the functions that fulfill the queries and mutations defined in `typeDefs.js`
// The code below used the user-controller.js as a guide.
const resolvers = {
  Query: {
    alias: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("You must be logged in!");
    },
    co2: async (parent, { vehicleId, distance }) => {
      const apiKey = process.env.REACT_APP_API_KEY;
      try {
        const res = await axios({
          url: "https://www.carboninterface.com/api/v1/estimates",
          method: "post",
          data: {
            type: "vehicle",
            distance_unit: "mi",
            distance_value: "50",
            vehicle_model_id: vehicleId,
          },
          headers: {
            Authorization: "Bearer " + apiKey,
          },
        });
        // console.log(res.data);
        return res.data.data.attributes.carbon_lb;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Can't find this user");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Wrong password!");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
