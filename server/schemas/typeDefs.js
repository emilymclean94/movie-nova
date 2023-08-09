const { gql } = require('apollo-server-express');


const typeDefs = gql`
  # Define which fields are accessible from the model

  type User {
    _id: ID
    name: String
    email: String
    username: String
    genre: String
    bio: String
    posts: [Post]!
    movies: [Movie]!
  }

  type userInput{
    _id: ID
    name: String
    username: String
    genre: String
    bio: String
  }

  type Movie {
    _id: ID!
    posterImg: String!
    title: String!
    releaseDate: String!
    description: String!
}

  type movieInput {
    _id: ID
    posterImg: String
    title: String
    releaseDate: String
    description: String
  }

  type Post {
    _id: ID
    title: String
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
    likes: [Like]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Like {
    _id: ID
    likeAuthor: String
  }

  type Auth {
    token: ID!
    user: User
  }

  # Define which queries the front end is allowed to make and what data is returned
  
  type Query {
    users: [User]
    user(username: String!): User
    movies: [Movie!]!
    movie(movieId: ID!): Movie
    posts(username: String): [Post]
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, username: String!, password: String!, genre: String, bio: String): Auth
    login(username: String!, password: String!): Auth
    updateUser(name: String, username: String, genre: String, bio: String): User
    addMovie(title: String!, description: String!, releaseDate: String!, posterImg: String!): Movie
    removeMovie(movieId: ID!): Movie
    addPost(title: String!, postText: String!): Post
    updatePost(postId: ID!, title: String, postText: String): Post
    removePost(postId: ID!): Post
    likePost(postId: ID!): Post
    addComment(postId: ID!, commentText: String!): Post
    updateComment(postId: ID!, commentId: ID!, commentText: String!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;