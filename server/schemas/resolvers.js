const mongoose = require("mongoose");
const { AuthenticationError } = require("@apollo/server");
const { User, Movie, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("posts").populate("movies");
    },

    user: async (_, { $username }) => {
      return User.findOne({ username: $username })
        .populate("posts")
        .populate("movies");
    },

    movies: async () => {
      return Movie.find();
    },

    movie: async (_, { movieId }) => {
      return Movie.findById(movieId);
    },

    posts: async (_, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },

    post: async (_, { postId }) => {
      return Post.findOne({ _id: postId });
    },

    me: async (_, __, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("posts")
          .populate("movies");
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (
      _,
      {
        name,
        username,
        email,
        password,
        // genre, bio
      }
    ) => {
      try {
        const user = await User.create({
          name,
          username,
          email,
          password,
          // genre,
          // bio,
        });
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error("Error adding user:", error);
        // Handle the error, maybe return a specific error message
        throw new Error("Failed to add user");
      }
    },

    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (_, { name, username, genre, bio }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $set: {
              name: name,
              username: username,
              genre: genre,
              bio: bio,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return user;
      } else {
        throw new AuthenticationError("You need to be logged in!");
      }
    },

    addMovie: async (
      _,
      { title, description, posterImg, releaseDate },
      context
    ) => {
      if (context.user) {
        // Only allow adding a movie if the user is authenticated (context.user exists)
        const movie = await Movie.create({
          title,
          description,
          posterImg,
          releaseDate,
        });
        await User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $addToSet: {
              movies: movie._id,
            },
          }
        );
        return movie;
      } else {
        throw new AuthenticationError(
          "Authentication required to add a movie."
        );
      }
    },

    removeMovie: async (_, { movieId }, context) => {
      if (context.user) {
        const movie = await Movie.findOneAndDelete({
          _id: movieId,
        });
        return movie;
      } else {
        throw new AuthenticationError(
          "An error occurred while deleting the movie."
        );
      }
    },

    addPost: async (_, { title, postText }, context) => {
      if (context.user) {
        const post = await Post.create({
          title,
          postText,
          postAuthor: context.user.username,
        });
        await User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $addToSet: {
              posts: post._id,
            },
          }
        );
        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updatePost: async (_, { postId, title, postText }, context) => {
      if (context.user) {
        const post = await Post.findOneAndUpdate(
          {
            _id: postId,
            postAuthor: context.user.username,
          },
          {
            $set: {
              title: title,
              postText: postText,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removePost: async (_, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          postAuthor: context.user.username,
        });

        // Remove the post ID from the user's posts array
        await User.findOneAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $pull: {
              posts: postId,
            },
          }
        );

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    likePost: async (_, { postId }, context) => {
      if (context.user) {
        const like = await Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              likes: {
                likeAuthor: context.user.username,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return like;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addComment: async (_, { postId, commentText }, context) => {
      if (context.user) {
        const comment = await Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: {
                commentText,
                commentAuthor: context.user.username,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    updateComment: async (_, { postId, commentId, commentText }, context) => {
      if (context.user) {
        const comment = await Post.findOneAndUpdate(
          {
            _id: postId,
            "comments._id": commentId,
          },
          {
            $set: {
              "comments.$.commentText": commentText,
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeComment: async (_, { postId, commentId }, context) => {
      if (context.user) {
        const comment = await Post.findOneAndUpdate(
          {
            _id: postId,
            "comments._id": commentId,
            "comments.commentAuthor": context.user.username,
          },
          {
            $pull: {
              comments: {
                _id: commentId,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
