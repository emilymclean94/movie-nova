import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { Container } from "react-bootstrap";
import Preloader from "./components/Pre";
import NavBar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Feed from "./pages/Feed/Feed";
import Dashboard from "./pages/Dashboard/Dashboard";
import Movies from "./pages/Movies/Movies";
import Footer from "./components/Footer";
import MyMovieList from "./components/Movies/MyMovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Auth from './utils/auth';
// import { useQuery } from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql', 
});

const authLink = setContext((_, { headers }) => {
  const token = Auth.getToken();

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (

    <ApolloProvider client={client}>
      <Router>
        <Preloader load={load} />
        <div className="App" 
        id={load ? "no-scroll" : "scroll"}
        >
          <NavBar /> 
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/mylist" element={<MyMovieList />} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;
