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

type userInput{
  _id: ID
  name: String
  username: String
  genre: String
  bio: String
}

type Auth {
  token: ID!
  user: User
}

  # Define which queries the front end is allowed to make and what data is returned
  
  type Query {
    users: [User]
    user(username: String!): User
    movie: [Movie]
    movies: [Movie!]!
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(name: String!, email: String!, username: String!, password: String!, genre: String, bio: String): Auth
    updateUser(name: String, username: String, genre: String, bio: String): User
    addMovie(title: String!, description: String!, releaseDate: String!, posterImg: String!): Movie
    removeMovie(movieId: ID!): Movie
    addFriend(friendId: ID!): User
    
}
`;

module.exports = typeDefs;
