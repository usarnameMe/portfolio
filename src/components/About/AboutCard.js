import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gvantsa Uplisashvili</span>
            from <span className="purple">Tbilisi, Georgia.</span>
            <br />
            I am a frontend developer specializing in React Native and Node.js.
            <br />
            <br />
            I have worked as a React Native developer at Concept Digital and am currently a full member of the Artificial Intelligence Association of Georgia (GAIA). 
            <br />
            I love to immerse myself in the AI community, participate in research projects, and contribute to the development of AI in Georgia.
            <br />
            <br />
            Now I am in love with Python and scripting. 
            <br />
            I have completed several comprehensive courses in frontend, mobile, and backend development, including:
            <ul>
              <li>Frontend Mobile Development Course (React Native)</li>
              <li>React & Redux Course</li>
              <li>React Native with TypeScript</li>
              <li>Node.js Learning Course</li>
            </ul>
            <br />
            Apart from coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning and exploring
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with my 5-year-old daughter
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't worry, be happy!"{" "}
          </p>
          <footer className="blockquote-footer">Gvantsa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
