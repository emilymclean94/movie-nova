import React from "react";
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import EditFormButton from "./EditFormButton";
import MyList from "../../components/Movies/MyMovieList";
import { Container, Row, Col, Card } from "react-bootstrap/";


const Dashboard = () => {
  const { username: userParam } = useParams();

  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  return (
    <Container fluid>
      <Row>
        {Auth.loggedIn() ? (
          <>
          
            <Col className="m-3 content1">
              <div id="dashtitle" className=" m-3 dashtitle">
                <h1>Welcome to your Dashboard, {user.name}!</h1>
              </div>

              <div id="dashinfo" className="m-3 dashinfo">
                <h3>
                  Username: { }
                  {user.username}
                </h3>
                <h5>
                  Favorite Genre: { }
                  {user.genre}
                </h5>
                <h5>
                  Bio: { }
                  {user.bio}
                </h5>
              </div>

              <div className="m-3">
                <EditFormButton
                  username={user.username}
                  name={user.name}
                  genre={user.genre}
                  bio={user.bio}
                />
              </div>
            </Col>

            <Col className="m-3 content2">
              <MyList />
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
    </Container>
  );
}

export default Dashboard;
