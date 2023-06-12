import React from "react";
import { Navbar } from "react-bootstrap";
import {BsGithub } from "react-icons/bs";
import { TiHeartOutline } from "react-icons/ti"

const styles = {
  icons: {
      color: '#de82ebe8',
      margin: '0px',
  } 
}

const Footer = () => {
  
  return (

    <Navbar bg="dark" variant="dark" className="footer">

      <p className="dark bold mx-2 my-2">
        Made with <TiHeartOutline /> by the Caffeine Coders:
      </p>

      <a 
      className="display-10 me-4 my-2" 
      href="https://github.com/emilymclean94/movie-nova" 
      style={styles.icons}>
        <BsGithub />
        <h7>Emily</h7>
      </a>
      <a 
      className="display-10 me-4 my-2" 
      href="https://github.com/keelyybug" 
      style={styles.icons}>
        <BsGithub />
        <h7>Keely</h7>
      </a>
      <a 
      className="display-10 me-4 my-2" 
      href="https://github.com/emilymclean94/movie-nova" 
      style={styles.icons}>
        <BsGithub />
        <h7>Ethan</h7>
      </a>
      <a 
      className="display-10 me-4 my-2" 
      href="https://github.com/emilymclean94/movie-nova" 
      style={styles.icons}>
        <BsGithub />
        <h7>Ashley</h7>
      </a>
      <a 
      className="display-10 me-4 my-2" 
      href="https://github.com/emilymclean94/movie-nova" 
      style={styles.icons}>
        <BsGithub />
        <h7>Sammy</h7>
      </a>
      <a 
      className="display-10 me-4 my-2" 
      href="https://github.com/emilymclean94/movie-nova" 
      style={styles.icons}>
        <BsGithub />
        <h7>Repo</h7>
      </a>
    </Navbar>
  )
}

export default Footer;
