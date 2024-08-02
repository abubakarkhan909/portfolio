import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiJqueryLogo ,
  DiJqueryUiLogo ,
  DiWordpress ,
  DiHtml5,
  DiCss3,
  DiGit,
  DiGulp,
  DiBootstrap ,

} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiWordpress />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryUiLogo />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap  />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiGulp />
      </Col>   
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>          

    </Row>
  );
}

export default Techstack;
