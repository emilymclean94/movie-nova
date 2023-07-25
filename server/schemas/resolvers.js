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
      if (username) {
        return Movie.find({ username });
      }
      return Movie.find();
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

    addMovie: async (parent, { title, description, posterImg, releaseDate }, context) => {
      if (context.user) {
        // Only allow adding a movie if the user is authenticated (context.user exists)
        const movie = await Movie.create({ title, description, posterImg, releaseDate });
        return movie; // Return the movie object instead of the user object
      }
      throw new Error('Authentication required to add a movie.');
    },

    removeMovie: async (parent, { movieId }) => {
      try {
        const deletedMovie = await Movie.findByIdAndDelete(movieId);
        return deletedMovie;
      } catch (error) {
        console.error('Error deleting movie:', error);
        throw new Error('An error occurred while deleting the movie.');
      }
    }
  }
}

module.exports = resolvers;