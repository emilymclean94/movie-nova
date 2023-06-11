import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation Mutation($name: String!, $username: String!, $email: String!, $password: String!, $genre: String, $bio: String) {
  addUser(name: $name, username: $username, email: $email, password: $password, genre: $genre, bio: $bio) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const UPDATE_USER = gql`
mutation Mutation($name: String, $username: String, $genre: String, $bio: String) {
  updateUser(name: $name, username: $username, genre: $genre, bio: $bio) {
    _id
    bio
    genre
    name
    username
  }
}
`;
//! removed all movie params except title and description for testing purposes
export const ADD_MOVIE = gql`
  mutation addMovie($title: String, $description: String) {
    addMovie(posterImg: $posterImg, title: $title, releaseDate: $releaseDate, description: $description, updatedAt: $updatedAt) {
      _id
      posterImg
      title
      releaseDate
      description
      updatedAt
    }
  }
`;
