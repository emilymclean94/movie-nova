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
mutation updateUser($input: userInput!) {
  updateUser(input: $input) {
      _id
      name
      username
      genre
      bio
  }
}
`

export const ADD_MOVIE = gql`
  mutation addMovie($posterImg: String, $title: String, $releaseDate: String, $description: String, $rating: String, $updatedAt: String) {
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
