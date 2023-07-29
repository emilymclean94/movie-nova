import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient";
import Preloader from "./components/Pre";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Feed from "./pages/Feed/Feed";
import Dashboard from "./pages/Dashboard/DashboardPage";
import Movies from "./pages/Movies/MoviesPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
      if (window.scrollY > 100) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
