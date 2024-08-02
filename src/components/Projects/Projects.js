import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import images from './ProjectImgs'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images.login}
              isBlog={false}
              title="Login/SignUp and Firebase"
              description="This React application features user authentication with Firebase, supporting both traditional email/password login and Google sign-in. It ensures secure user management and offers a responsive design for seamless usage across devices."
              ghLink="https://github.com/abubakarkhan909/Login-signup-firebase"
              demoLink="https://login-signup-firebase-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images.petbond}
              isBlog={false}
              title="Petbond"
              description="PetBond is a ReactJS-based web app connecting pet owners with adopters. It features pet profiles, a streamlined adoption process, and a community forum, fostering a supportive network for pet care and adoption."
              demoLink="https://mypetbond.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images.youtube}
              isBlog={false}
              title="Youtube Clone"
              description="A YouTube clone built with React.js, featuring video playback, and a responsive design. This project enhanced my skills in React.js, state management, and API integration."
              ghLink="https://github.com/abubakarkhan909/youtube_clone"
              demoLink="https://youtube-clone-lovat-nine.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images.katora}
              isBlog={false}
              title="Katora Ecommerece Theme"
              description="Katora Shopping Template offers customizable e-commerce templates with various styles, SEO-friendly features, and multi-language support. Easy to use and regularly updated for a dynamic shopping site."
              demoLink="https://themeforest.net/item/katora-bootstrap-multipurpose-shopping-template/24758698?s_rank=6"              
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
