import React from "react";
import { Col } from "react-bootstrap/";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import UpdateProfileBtn from "./UpdateProfileBtn";

const MyDashboard = ({ user }) => {
  const { loading, error } = useQuery(QUERY_ME);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Col className="mydashboard">
      <h1 className="dashboard-title text-center m-3" id="dash">
        Welcome to your Dashboard <br /> {user.name}!
      </h1>

      <Col className="m-3 dashboard-info">
        <h3 className="username" id="dash1">
          Username: {}
          {user.username}
        </h3>
        <h5 className="fav-genre" id="dash2">
          Favorite Genre: {}
          {user.genre}
        </h5>
        <h5 className="bio" id="dash3">
          Bio: {}
          {user.bio}
        </h5>
        <div className="m-3 edit-button pb-3">
          <UpdateProfileBtn
            username={user.username}
            name={user.name}
            genre={user.genre}
            bio={user.bio}
          />
        </div>
      </Col>
    </Col>
  );
};
export default MyDashboard;
