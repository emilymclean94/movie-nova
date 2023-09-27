import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import UpdateProfileBtn from "./UpdateProfileBtn";
import Avatar from "../../Assets/headshots/anon_headshot.jpg";
import "./dashboard.css";

const MyProfile = ({ user }) => {
  const { loading, error } = useQuery(QUERY_ME);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Container className="profile-info-container">

      <Row  className="m-3 profile-info">
        <Col className="avatar-container">
        <img className="user-avatar" src={Avatar} />
        </Col>
        <Col className="user-info">
        <Row className="user-heading">
        <h1 className="username" id="dash1">
          Username{user.username}
          <UpdateProfileBtn
            username={user.username}
            name={user.name}
            genre={user.genre}
            bio={user.bio}
          />
        </h1>
        </Row>
        <Row>
        <p className="fav-genre" id="dash2">
          Favorite Genre: Horror{user.genre}
        </p>
        <p className="bio" id="dash3">
          Bio: I love watching movies!{user.bio}
        </p>
        </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default MyProfile;
