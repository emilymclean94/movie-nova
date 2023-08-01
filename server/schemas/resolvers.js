const mongoose = require('mongoose');
const { AuthenticationError } = require('apollo-server-express');
const { User, Movie, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    user: async (_, { username }) => {
      return User.findOne({ username: username });
    },

    movies: async () => {
      return Movie.find();
    },

    movie: async (_, { movieId }) => {
      return Movie.findById(movieId);
    },

    me: async (_, __, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('myList');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    posts: async () => {
      const posts = await Post.find().populate("likes"); // Populate the likes array with user objects
      return posts;
    },
  },

  Mutation: {
    addUser: async (_, input) => {
      const { name, username, email, password, genre, bio } = input;
      const user = await User.create({ name, username, email, password, genre, bio });
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (_, { name, username, genre, bio }, context) => {
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

    login: async (_, { username, password }) => {
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

    addMovie: async (_, { title, description, posterImg, releaseDate }, context) => {
      if (context.user) {
        // Only allow adding a movie if the user is authenticated (context.user exists)
        const movie = await Movie.create({ title, description, posterImg, releaseDate });
        return movie; // Return the movie object instead of the user object
      }
      throw new Error('Authentication required to add a movie.');
    },

    removeMovie: async (_, { movieId }) => {
      try {
        const deletedMovie = await Movie.findByIdAndDelete(movieId);
        return deletedMovie;
      } catch (error) {
        console.error('Error deleting movie:', error);
        throw new Error('An error occurred while deleting the movie.');
      }
    },

    createPost: async (_, { title, content }) => {
      const post = new Post({ title, content });
      await post.save();
      return post;
    },


    updatePost: async (_, { postId, title, content }) => {
      try {
        const post = await Post.findById(postId);
        if (!post) {
          throw new Error('Post not found');
        }
        if (title) {
          post.title = title;
        }
        if (content) {
          post.content = content;
        }
        await post.save();
        return post;
      } catch (error) {
        throw new Error('Failed to update post');
      }
    },

    deletePost: async (_, { postId }) => {
      try {
        const post = await Post.findByIdAndDelete(postId);
        if (!post) {
          throw new Error('Post not found');
        }
        return post;
      } catch (error) {
        throw new Error('Failed to delete post');
      }
    },

    likePost: async (_, { postId }, context) => {
      const { user } = context;
      if (!user) {
        throw new AuthenticationError('Authentication required to like a post.');
      }
      try {
        const post = await Post.findByIdAndUpdate(
          postId,
          { $addToSet: { likes: user._id } },
          { new: true }
        ).populate('likes');
        return post;
      } catch (error) {
        console.error('Error liking post:', error);
        throw error;
      }
    },
    
  }
}

module.exports = resolvers;