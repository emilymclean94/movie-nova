import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./Signup";
import LoginForm from "./Login";
import Auth from "../utils/auth";
import Logogo from "../Assets/Logogo.png";

const NavBar = () => {
  //set modal display state
  const [showModal, setShowModal] = useState(false);
  const [expand, updateExpanded] = useState(false);

  return (
    <>
      <Navbar variant="dark" expanded={expand} expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/" aria-label="navbar-logo">
            <img
              alt=""
              src={Logogo}
              width="40px"
              max-height="40px"
              className="streamverse"
            />{" "}
            StreamVerse
          </Navbar.Brand>

          <Navbar.Toggle
            type="button"
            data-toggle="collapse"
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/movies"
                  onClick={() => updateExpanded(false)}
                >
                  Search Movies
                </Nav.Link>
              </Nav.Item>

              {Auth.loggedIn() ? (
                <>
                  <Nav.Link
                    as={Link}
                    to="/feed"
                    onClick={() => updateExpanded(false)}
                  >
                    Feed
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/me"
                    onClick={() => updateExpanded(false)}
                  >
                    Profile
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/dashboard"
                    onClick={() => updateExpanded(false)}
                  >
                    Dashboard
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link
                  as={Link}
                  className=""
                  onClick={() => setShowModal(true)}
                >
                  Login | Sign Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills" className="nav-pills">
                <Nav.Item className="pill-one">
                  <Nav.Link className="login-pill" eventKey="login">
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="pill-two">
                  <Nav.Link className="signup-pill" eventKey="signup">
                    Sign Up
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-1">
            <Tab.Content>
              <Tab.Pane className="rounded" eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default NavBar;
