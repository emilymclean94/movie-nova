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
  mutation addUser($name: String!, $username: String!, $email: String!, $password: String!, $genre: String, $bio: String) {
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
  mutation updateUser($name: String, $username: String, $genre: String, $bio: String) {
    updateUser(name: $name, username: $username, genre: $genre, bio: $bio) {
      _id
      bio
      genre
      name
      username
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation addMovie($title: String!, $description: String!, $posterImg: String!, $releaseDate: String!) {
    addMovie(posterImg: $posterImg, title: $title, releaseDate: $releaseDate, description: $description) {
      _id
      posterImg
      title
      releaseDate
      description
    }
  }
`;

export const REMOVE_MOVIE = gql`
  mutation removeMovie($movieId: ID!) {
    removeMovie(movieId: $movieId) {
      _id
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      _id
      title
      content
      createdAt
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($postId: ID! $title: String, $content: String) {
    updatePost(postId: $postId, title: $title, content: $content) {
      _id
      title
      content
      createdAt
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId) {
      _id
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      _id
      title
      content
      createdAt
      likes
    }
  }
`;