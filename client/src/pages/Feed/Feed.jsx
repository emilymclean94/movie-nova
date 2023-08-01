import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import "./feed.css";

const Feed = () => {
  return (
    <Container className="feed-container" id="feed">
      <SearchBar />
      <Container className="feed-content">
        <h1>Feed</h1>
      </Container>
    </Container>
  );
};

export default Feed;
