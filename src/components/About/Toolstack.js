import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiGithub,
  SiRedux,
  SiHeroku,
  SiGraphql,
  SiMysql,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-vscode">Visual Studio Code</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-postman">Postman</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-slack">Slack</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiSlack />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-vercel">Vercel</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-github">GitHub</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-redux">Redux</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-heroku">Heroku</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiHeroku />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-graphql">GraphQL</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiGraphql />
        </Col>
      </OverlayTrigger>
      
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-mysql">MySQL</Tooltip>}
      >
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
      </OverlayTrigger>
    </Row>
  );
}

export default Toolstack;
