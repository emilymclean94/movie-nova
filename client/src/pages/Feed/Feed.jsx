import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import SearchBar from "../../components/SearchBar";
import PostList from "../../components/PostList";
import PostForm from "../../components/PostForm";

const Feed = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <Container className="posts-container" id="posts">
      <SearchBar />
      <Row className="posts-content">
        <Col xs={11} sm={11} md={11} lg={5} className="m-3 postform">
          <PostForm />
        </Col>

        <Col xs={11} sm={11} md={11} lg={6} className="m-3 postlist">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Posts!" />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;
