import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      name
      username
      email
      genre
      bio
      posts {
        _id
        postText
        createdAt
      }
      movies {
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

export const QUERY_POSTS = gql`
  query posts {
    posts {
      _id
      title
      postText
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_POST = gql`
  query post($posttId: ID!) {
    post(postId: $postId) {
      _id
      title
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
      likes {
        _id
        likeAuthor
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
      posts {
        _id
        postText
        postAuthor
        createdAt
      }
      movies {
        _id
        posterImg
        title
        releaseDate
        description
      }
    }
  }
`;
