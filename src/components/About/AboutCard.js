import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">Muhammad Abubakar </span>
           
            <br />
            <br />
            I’m an experienced Frontend Web Developer with expertise in <span className="purple">ReactJS, Redux toolkit,JavaScript,jQuery</span> and <span className="purple">Wordpress. </span>
           <br />
           <br />
           I’m also highly skilled in <span className="purple">Html5,Css,Tailwind Css,Bootstrap,Material Ui. </span>
            <br />
            <br />
            Strong problem-solving skills, with knowledge of <span className="purple">Data Structures and Algorithms. </span>
            <br />
            <br />
            I’m eager to bring my skills to innovative web projects and stay current with industry trends.
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
