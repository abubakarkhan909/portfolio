import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiTerraform,
} from "react-icons/si";

import {
  DiGit,
  DiJira ,
  DiTrello
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiJira />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiTrello />
      </Col>    
     
    </Row>
  );
}

export default Toolstack;
