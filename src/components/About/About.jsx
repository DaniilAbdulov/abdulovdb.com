import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Particle } from "../Particle";
import { Techstack } from "./Techstack";
import { AboutCard } from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { TasksProgress } from "./TasksProgress";
import { PhotoLoadingHandler } from "../shared/PhotoLoadingHandler";

export const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">I am ?</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <PhotoLoadingHandler img={laptopImg} className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tasks</strong> progress
        </h1>
        <TasksProgress />
      </Container>
    </Container>
  );
};
