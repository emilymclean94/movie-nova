import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import { Container, Row, Col } from "react-bootstrap/";
import SearchBar from "../../components/SearchBar";
import MyWatchList from "./MyWatchList";
import MyProfile from "./MyProfile";
import PostList from "../../components/PostList";
import PostForm from "../../components/PostForm";
import "./dashboard.css";

const Dashboard = () => {
  const { username: userParam } = useParams();

  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  const movies = user.movies || [];

  return (
    <Container className=" dashboard-container" id="dashboard">
      {/* <SearchBar /> */}
      <div className="dashboard-content">
        {Auth.loggedIn() ? (
          <>
            <Row>
              <MyProfile user={user} />
            </Row>
            <Row>
              <MyWatchList movies={movies} />
              {/* <PostForm /> */}
              {/* <PostList
                posts={user.posts}
                title={`${user.username}'s posts...`}
                showTitle={false}
                showUsername={false}
              /> */}
            </Row>
          </>
        ) : (
          <Col xs={11} className="dashboard-content">
            <h4>
              You need to be logged in to see this. Use the navigation links
              above to sign up or log in!
            </h4>
          </Col>
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
