import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUpForm from '../components/Signup';
import LoginForm from '../components/Login';
import Auth from '../utils/auth';
import '../components/components.css';

function NavBar() {
//set modal display state
const [showModal, setShowModal] = useState(false);

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
    <>
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

            {Auth.loggedIn() ? (
                <>
                {/* Might have to change this path when saved list is added */}
                  <Nav.Link as={Link} to='/saved'>
                    See Your Movies
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  <div className="button-div">
                    <button className="signup-button">Signup</button>
                    <button className="login-button">Login</button>
                  </div>
                </Nav.Link>
              )}

          </Nav>
        </Navbar.Collapse>

      </Container>

    </Navbar>

    <Modal 
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills' className="nav-pills">
                <Nav.Item className="pill-one">
                  <Nav.Link className="login-pill" eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item className="pill-two">
                  <Nav.Link className="signup-pill" eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            <Tab.Content>
              <Tab.Pane className="rounded" eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>

    </>
  )
}

export default NavBar;