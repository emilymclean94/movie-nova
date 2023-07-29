import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      name
      username
      email
      genre
      bio
      myList {
        _id
        posterImg
        title
        releaseDate
        description
      }
    }
  }
`;

export const QUERY_ME = gql`
query me {
 me {
    _id
    name
    username
    email
    genre
    bio
    myList {
      _id
      posterImg
      title
      releaseDate
      description
    }
  }
}
`;

export const QUERY_MOVIE = gql`
  query movie($movieId: ID!) {
    movie(movieId: $movieId) {
        _id
        posterImg
        title
        releaseDate
        description
    }
  }
`;

export const QUERY_MOVIES = gql`
  query movies {
    movies {
        _id
        posterImg
        title
        releaseDate
        description
    }
  }
`;