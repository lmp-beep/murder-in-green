// import Authentication error from apollo server express
const { AuthenticationError } = require("apollo-server-express");
// import user model
const { User } = require("../models/User");
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