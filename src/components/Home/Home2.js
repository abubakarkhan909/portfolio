import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ab.PNG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em",textAlign:"left" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My passion for programming has been a rewarding journey, and I’ve certainly picked up a lot along the way. 🤷‍♂️
              <br />
              <br />I’m well-versed in the art of
              <i>
                <b className="purple"> Frontend Development. </b>
              </i>
              <br />
              <br />
              My interests lie in crafting innovative and engaging
              <i>
                <b className="purple"> Websites </b>
              </i>
              .
              <br />
              <br />
              I also have good knowledge and lot of experienced in
              <b className="purple"> jQuery, Wordpress </b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              , particularly
              <i>
                <b className="purple"> React.js</b>
              </i>
              .
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p>
              Mobile and Whatsapp Number: <b><a class="purple" href="tel:+923046875472">+923046875472</a></b>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abubakarkhan909"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abubakar-khan-66816b132/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ab_khanxada/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
