import React from "react";
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { Container } from "react-bootstrap";
import EditFormButton from "../../components/EditFormButton";

const Dashboard = () =>  {
    const { _id: userParam } = useParams();

    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { _id: userParam },
    }); 
  
    const user = data?.me || data?.user || {};
    
  return (
    <>
    {Auth.loggedIn() ? (
    <Container className="dashboard-body" id="dashboard">
      <Container className="dashboard-content">
        <h1>Welcome to your Dashboard, {`${user.name}`}!</h1>
        <div>
        <h2 className="card-header">{`${user.username}`}</h2>
        <h2 className="card-header">{`${user.genre}`}</h2>
        <h2 className="card-header">{`${user.bio}`}</h2>
        </div>
        <div className="m-3">
        <EditFormButton/>
        </div>
      </Container>
    </Container>) : (
      <h4>
      You need to be logged in to see this. Use the navigation links above to
      sign up or log in!
    </h4>)}
</>
  );
}


export default Dashboard;