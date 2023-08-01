import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import PostForm from "./PostForm";
import PostList from "./PostList";
import "./posts.css";

const Posts = () => {
  return (
    <Container className="posts-container" id="posts">
      <SearchBar />
      <Container className="posts-content mt-4">
        <PostForm />
        <PostList />
      </Container>
    </Container>
  );
};

export default Posts;
