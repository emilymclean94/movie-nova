import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "./components/Pre";
import NavBar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Feed from "./pages/Feed/Feed";
import Dashboard from "./pages/Dashboard/Dashboard";
import Movies from "./pages/Movies/Movies";
import Footer from "./components/Footer";
import Auth from "./utils/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const authLink = setContext((_, { headers }) => {
  const token = Auth.getToken();

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const customMergeFunction = (existing, incoming) => {
  // Custom merge logic here, you can choose to merge or replace the data
  // In this case, we don't need to merge, so we'll replace the existing data with the incoming data
  return incoming;
};

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql", // Replace with your GraphQL endpoint
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          movie: {
            merge: customMergeFunction, // Define the custom merge function here
          },
        },
      },
    },
  }),
});

const App = () => {
  const [load, upadateLoad] = useState(true);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 100 pixels
      if (window.scrollY > 100) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
          <Footer className={showFooter ? "show" : ""} />
        </div>
        <ToastContainer />
      </Router>
    </ApolloProvider>
  );
};

export default App;
