import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quiz1 from "../../Assets/Projects/quiz1.png";
import uber1 from "../../Assets/Projects/uber1.png";
import shop1 from "../../Assets/Projects/shop1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz1}
              isBlog={false}
              title="Quiz Application"
              description="An interactive quiz application built with React Native. It features multiple-choice questions, instant feedback, and a scoring system."
              ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uber1}
              isBlog={false}
              title="Uber Eats Clone App"
              description="A clone of the Uber Eats app developed with React Native. This app allows users to browse restaurants, place orders, and track deliveries in real-time."
              ghLink="https://github.com/usarnameMe/Uber-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop1}
              isBlog={false}
              title="E-commerce Platform"
              description="An e-commerce platform built with Node.js and Express. It supports user authentication, product listings, and a shopping cart."
              ghLink="https://github.com/usarnameMe/NodeJS-learning"
              demoLink="https://gvns-node.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
