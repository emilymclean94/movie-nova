import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function NavBar() {

  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
  
    window.addEventListener("scroll", scrollHandler);
  
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); 

  return (

    <Navbar expanded={expand} fixed="top" expand="md" className={navColor ? "sticky" : "navbar"}>

      <Container>

        <Navbar.Brand href="/" className="d-flex" aria-label="navbar-logo">
        <h1>Hi</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => { updateExpanded(expand ? false : "expanded") }}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            
            <Nav.Item>
              <Nav.Link as={Link} to="" onClick={() => updateExpanded(false)}>
                <div style={{ marginBottom: "2px" }} aria-labelledby="Home" /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/login" onClick={() => updateExpanded(false)}>
                <div style={{ marginBottom: "2px" }} aria-labelledby="login" /> Login
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/signup" onClick={() => updateExpanded(false)}>
                <div style={{ marginBottom: "2px" }} aria-labelledby="Projects" /> Signup
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>

      </Container>

    </Navbar>

  )
}

export default NavBar;