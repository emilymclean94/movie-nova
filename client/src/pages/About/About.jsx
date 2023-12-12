import React from "react";
import AboutCards from "./AboutCards";
import { Container } from "react-bootstrap";
import "./about.css";
import Emily from "../../Assets/headshots/emily_headshot.jpg";
import Ethan from "../../Assets/headshots/ethan_headshot.jpg";
import Ashley from "../../Assets/headshots/ashley_headshot.jpg";
import Keely from "../../Assets/headshots/keely_headshot.png";
import Sami from "../../Assets/headshots/anon_headshot.jpg";

const About = () => {
  return (
    <Container className="about about-container">
      <div className="about-content">
        <h1>
          Check out the project GitHub{" "}
          <a href="https://github.com/emilymclean94/stream_verse">HERE</a>
        </h1>

        <h2>Get to know the team:</h2>
        <div className="card-container">
          <AboutCards
            headshot={Emily}
            name="Emily McLean"
            subtitle="Lead Developer"
            ghLink="https://github.com/emilymclean94"
            liLink="https://www.linkedin.com/in/emilyamclean/"
            bio="Full stack developer and lover of books, video games, and my dogs."
          />
          <AboutCards
            headshot={Ashley}
            name="Ashley Giraldo"
            subtitle="Lead Developer"
            ghLink="hhttps://github.com/Ashleyg5"
            liLink="https://www.linkedin.com/in/ashley-giraldo/"
            bio="Bio coming soon."
          />
          <AboutCards
            headshot={Ethan}
            name="Ethan Garrison"
            subtitle="Lead Developer"
            ghLink="https://github.com/EGARRISXN"
            liLink="https://www.linkedin.com/in/ethan-garrison-261ba4a2/"
            bio="Developer of the full stack varietal ready to make a some waves!"
          />
          <AboutCards
            headshot={Keely}
            name="Keely Sherman"
            ghLink="https://github.com/keelyybug"
            liLink="https://www.linkedin.com/in/ashley-giraldo/"
            bio="Bio coming soon."
          />
          <AboutCards
            headshot={Sami}
            name="Sami Sweet-Kloid"
            ghLink="https://github.com/sweetkloid"
            // liLink="https://www.linkedin.com/in/keelysherman/"
            bio="Bio coming soon."
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
