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
    myList:[Movie]
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
    _id: ID!
    title: String!
    content: String!
    createdAt: String!
    likes: [ID!]!
  }

  type Auth {
    token: ID!
    user: User
  }

  # Define which queries the front end is allowed to make and what data is returned
  
  type Query {
    user(username: String!): User
    me: User
    movie(movieId: ID!): Movie
    movies: [Movie!]!
    posts: [Post!]!
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(name: String!, email: String!, username: String!, password: String!, genre: String, bio: String): Auth
    updateUser(name: String, username: String, genre: String, bio: String): User
    addMovie(title: String!, description: String!, releaseDate: String!, posterImg: String!): Movie
    removeMovie(movieId: ID!): Movie
    createPost(title: String!, content: String!): Post
    likePost(postId: ID!): Post
    updatePost(postId: ID!, title: String, content: String): Post
    deletePost(postId: ID!): Post
  }
`;

module.exports = typeDefs;