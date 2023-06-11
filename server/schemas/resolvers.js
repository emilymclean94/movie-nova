const { AuthenticationError } = require('apollo-server-express');
const { Movie, User } = require('../models');
const { signToken } = require('../utils/auth');




const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username: username });
    },
    movies: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Movie.find({});
    },
    movie: async (parent) => {
      return Movie.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('myList');
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  },
  Mutation: {
    addUser: async (parent, input) => {
      const { name, username, email, password, genre, bio } = input;
      const user = await User.create({ name, username, email, password, genre, bio });
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, { name, username, genre, bio }, context) => {
      if (context.user) {
     const updatedUser = await User.findOneAndUpdate(
      { _id: context.user._id },
      {
        $set: {
        name: name,
        username: username,
        genre: genre,
        bio: bio
        } 
      },
    
      {
        new: true,
        runValidators: true,
      }
     )
     return updatedUser;
    }
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user found with this username');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addMovie: async (parent, { username, title, description }) => {
      // Create a new movie
      const movie = await Movie.create({ title, description });
    
      // Extract the movie ID
      const movieId = movie._id;
    
      // Add the movie ID to the user's list
      const user = await User.findOneAndUpdate(
        { username },
        { $addToSet: { myList: movieId } },
        { new: true }
      );
    
      return user;
    },
    removeMovie: async (parent, { movieId }) => {
      return Movie.findOneAndDelete({ _id: movieId });
    },
  },
};

module.exports = resolvers;