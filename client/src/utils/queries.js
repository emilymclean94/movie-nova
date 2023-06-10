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
      watched {
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
    watched {
      _id
      posterImg
      title
      releaseDate
      description
    }
  }
}
`;

export const QUERY_MOVIES = gql`
  query getMovies {
    movie {
        _id
        posterImg
        title
        releaseDate
        description
    }
  }
`;

export const QUERY_SINGLE_MOVIE = gql`
  query getSingleMovie($movieId: ID!) {
    movie(movieId: $movieId) {
        _id
        posterImg
        title
        releaseDate
        description
    }
  }
`;