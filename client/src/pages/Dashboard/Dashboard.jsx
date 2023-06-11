import React from "react";
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import EditFormButton from "./EditFormButton";
import WatchList from "../../components/MyMovieList";
import { Container, Card } from "react-bootstrap/";


const Dashboard = () => {

  const { username: userParam } = useParams();

  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  }); //loading was next to data

  const user = data?.me || data?.user || {};


  return (
    <div>
      {Auth.loggedIn() ? (
        <Container className="dashboard-body" id="dashboard">
          
            <div id="dash2" className="row dashtitle">
              <h1>
                Welcome to your Dashboard, {`${user.name}`}!
              </h1>
            </div>
            
            <div className="">

              <div className="col-lg-4 content">
                <Card id="dash" className="m-3">
                  <h2 className="card-header">Username is: {`${user.username}`}</h2>
                  <h2 className="card-header">Favorite Genre is: {`${user.genre}`}</h2>
                  <h2 className="card-header">Your Bio: {`${user.bio}`}</h2>
                </Card>
                <div className="m-3">
                  <EditFormButton username={user.username} name={user.name} genre={user.genre} bio={user.bio}  />
                </div>
              </div>

              <div id="dash3" className="col-lg-8 content2">
                <div className="m-3">
                  <h2 className="card-header">My Watched list</h2>
                  {/* <WatchList/> */}
                </div>
              </div>

            </div>
        </Container>) : (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>)}
    </div>
  );
}


export default Dashboard;