import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "../../components/SearchBar";
import Auth from "../../utils/auth";
import PostForm from "./PostForm";
import PostList from "./PostList";
import "./posts.css";

const Posts = () => {
  return (
    <Container className="posts-container" id="posts">
      <SearchBar />
      <Row className="posts-content">
        {Auth.loggedIn() ? (
          <>
            <Col xs={11} sm={11} md={11} lg={5} className="m-3 postform">
              <PostForm />
            </Col>

            <Col xs={11} sm={11} md={11} lg={6} className="m-3 postlist">
              <PostList />
            </Col>
          </>
        ) : (
          <Col xs={11} className="dashboard-content">
            <h4>
              You need to be logged in to see this. Use the navigation links
              above to sign up or log in!
            </h4>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Posts;
