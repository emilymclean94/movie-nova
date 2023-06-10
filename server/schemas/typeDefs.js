const { gql } = require('apollo-server-express');


const typeDefs = gql`
  # Define which fields are accessible from the model

  type User {
    _id: ID
    name: String
    email: String
    username: String
    favorite_genre: String
    bio: String
    myList:[Movie]
  }

  type Movie {
    _id: ID
    posterImg: String
    title: String
    releaseDate: String
    description: String
    createdAt: String
}

type movieInput {
    _id: ID
    posterImg: String
    title: String
    releaseDate: String
    description: String
    updatedAt: String
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
    movies(username: String!): [Movie]
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(name: String!, email: String!, username: String!, password: String!, favorite_genre: String, bio: String): Auth
    addMovie(username: String!): User
    removeMovie(movieId: ID!): User
    addFriend(friendId: ID!): User
}
`;

module.exports = typeDefs;
