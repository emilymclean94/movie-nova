import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { Navigate, useParams } from "react-router-dom";
import PostForm from "../../components/PostForm";
import PostList from "../../components/PostList";
import Auth from "../../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  console.log("User param from useParams:", userParam);

  const { loading, error, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("User data:", data);

  const user = data?.me || data?.user || {};
  console.log("User data:", user);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if userParam is defined before using it
  if (!userParam || !user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <PostList
            posts={user.posts}
            title={`${user.username}'s posts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: "1px dotted #1a1a1a" }}
          >
            <PostForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
