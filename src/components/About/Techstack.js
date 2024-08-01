import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from "react-icons/di";
import { SiNextdotjs, SiFirebase, SiPostgresql, SiTypescript, SiReact } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-javascript">JavaScript</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-typescript">TypeScript</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-react">React</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-react-native">React Native</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiReact style={{ color: "#61dafb" }} />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-nodejs">Node.js</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-mongodb">MongoDB</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-nextjs">Next.js</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-git">Git</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-firebase">Firebase</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-postgresql">PostgreSQL</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-python">Python</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Techstack;
