import React from "react";
import { Col } from "react-bootstrap/";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import UpdateProfileBtn from "./UpdateProfileBtn";

const MyProfile = ({ user }) => {
  const { loading, error } = useQuery(QUERY_ME);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Col className="myprofile">
      <h2 className="profile-title text-center m-3" id="dash">
        Welcome to your Dashboard!
      </h2>

      <Col className="m-3 profile-info">
        <h3 className="username" id="dash1">
          Username: {}
          {user.username}
        </h3>
        <h4 className="fav-genre" id="dash2">
          Favorite Genre: {}
          {user.genre}
        </h4>
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
export default MyProfile;
