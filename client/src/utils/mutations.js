import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $username: String!, $email: String!, $password: String!, $genre: String, $bio: String) {
    addUser(name: $name, username: $username, email: $email, password: $password, genre: $genre, bio: $bio) {
      token
      user {
        _id
        email
        username
        name
        genre
        bio
      }
    }
  }
`;

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

export const ADD_POST = gql`
  mutation addPost($title: String!, $postText: String!) {
    addPost(title: $title, postText: $postText) {
      _id
      title
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
      }
      likes {
        _id
      }
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($title: String, $postText: String) {
    updatePost(title: $title, postText: $postText) {
      _id
      title
      postText
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID) {
    removePost(postId: $postId){
      _id
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      _id
      likes {
        _id
        likeAuthor
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      title
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($postId: ID!, $commentText: String!) {
    updateComment(postId: $postId, commentText: $commentText) {
      _id
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($postId: ID!, $commentId: ID!) {
    removeComment(postId: $postId, commentId: $commentId) {
      _id
      comments {
        _id
      }
    }
  }
`;
