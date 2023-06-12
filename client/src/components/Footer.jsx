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
      href="https://github.com/emilymclean94" 
      style={styles.icons}>
        <div className="icon-wrapper">
        <BsGithub />
        <h6>Emily</h6>
        </div>
      </a>
      <a 
      className="display-10 me-4 my-2" 
      href="https://github.com/keelyybug" 
      style={styles.icons}>
        <div className="icon-wrapper">
        <BsGithub />
        <h6>Keely</h6>
        </div>
      </a>
      <a 
      className="display-10 me-4 my-2" 
      href="https://github.com/EGARRISXN" 
      style={styles.icons}>
         <div className="icon-wrapper">
        <BsGithub />
        <h6>Ethan</h6>
        </div>
      </a>
      <a 
      className="display-10 me-4 my-2" 
      href="hhttps://github.com/Ashleyg5" 
      style={styles.icons}>
         <div className="icon-wrapper">
        <BsGithub />
        <h6>Ashley</h6>
        </div>
      </a>
      <a 
      className="display-10 me-4 my-2" 
      href="https://github.com/sweetkloid" 
      style={styles.icons}>
        <div className="icon-wrapper">
        <BsGithub />
        <h6>Sami</h6>
        </div>
      </a>
      <a 
      className="display-10 me-4 my-2" 
      href="https://github.com/emilymclean94/movie-nova" 
      style={styles.icons}>
         <div className="icon-wrapper">
        <BsGithub />
        <h6>Repo</h6>
        </div>
      </a>
    </Navbar>
  )
}

export default Footer;
