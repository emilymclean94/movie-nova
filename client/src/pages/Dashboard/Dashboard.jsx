import React from "react";
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import EditFormButton from "./EditFormButton";
import WatchList from "../../components/Movies/MyMovieList";
import { Container, Row, Col } from "react-bootstrap/";
import "./dashboard.css";


const Dashboard = () => {
  
  const { username: userParam } = useParams();

   const { loading, error, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const user = data?.me || data?.user || {};
  const myList = user.myList || [];

  return (
    <Container className="dashboard" fluid>
      <Row>
        {Auth.loggedIn() ? (
          <>
          
            <Col className="m-3 content1 ">
              <div className=" m-3 dashtitle text-center" id="dash">
                <h1 id="dashtitle" >Welcome to your Dashboard <br/> {user.name}!</h1>
              </div>

              <div id="dashinfo" className="m-3 dashinfo">
                <h3 className="username" id="dash1">
                  Username: { }
                  {user.username}
                </h3>
                <h5 className="fav-genre" id="dash2">
                  Favorite Genre: { }
                  {user.genre}
                </h5>
                <h5 className="bio" id="dash3">
                  Bio: { }
                  {user.bio}
                </h5>
                <div className="m-3 edit-button">
                <EditFormButton
                  username={user.username}
                  name={user.name}
                  genre={user.genre}
                  bio={user.bio}
                />
              </div>
              </div>


            </Col>

            <Col className="m-3 content2" id="dash4">
              <WatchList myList={myList}/>
            </Col>

          </>
        ) : (
          <Col sm={12} className="dashboard-content">
            <h4>
              You need to be logged in to see this. Use the navigation links above
              to sign up or log in!
            </h4>
          </Col>
        )}
      </Row>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap');
      </style>
    </Container>

  );
}

export default Dashboard;
