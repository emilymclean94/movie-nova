import React from "react";
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import { Container } from "react-bootstrap";


function Dashboard() {
    const { username: userParam } = useParams();
  
    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    }); //loading was next to data
  
    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours


  return (
    <>
    {Auth.loggedIn() ? (
    <Container className="dashboard-body" id="dashboard">
      <Container className="dashboard-content">
        <h1>Dashboard</h1>
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