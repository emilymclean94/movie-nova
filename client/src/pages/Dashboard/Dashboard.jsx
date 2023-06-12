import React from "react";
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import EditFormButton from "./EditFormButton";
import MyList from "../../components/Movies/MyMovieList";
import { Container, Row, Col Card } from "react-bootstrap/";


const Dashboard = () => {

  const { username: userParam } = useParams();

  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  }); //loading was next to data

  const user = data?.me || data?.user || {};


  return (

    <Container
    className="vh-100 m-auto"
    id="dashboard"
    >
      {Auth.loggedIn() ? (
        <div className="" >
          
          <div id="dash2" className="dashtitle">
              <h1>
                Welcome to your Dashboard, {`${user.name}`}!
              </h1>
          </div>

          <Row>
              <Col className="content">

                <div id="dash" className="m-3">
                  <h4>Username: 
                    <br />
                    {`${user.username}`}
                  </h4>
                  <h4>
                    Favorite Genre: 
                    <br />
                    {`${user.genre}`}
                  </h4>
                  <h4>
                    Bio: 
                    <br />
                    {`${user.bio}`}
                  </h4>
                </div>

                <div className="m-3">
                  <EditFormButton username={user.username} name={user.name} genre={user.genre} bio={user.bio}  />
                </div>


              </Col>

                <Col id="dash3" className="m-3 content2">
                  <h2>My Watched list</h2>
                  <MyList />
                </Col>

            </Row>

        </div>) : (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>)}
    </Container>

  );
}


export default Dashboard;