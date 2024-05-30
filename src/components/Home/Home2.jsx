import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import { socialLinks } from "../../data/socialLinks.js";
import { PhotoLoadingHandler } from "../shared/PhotoLoadingHandler.jsx";

export const Home2 = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const width = document.documentElement.clientWidth;
    if (width < 768) {
      setIsDesktop(false);
    }
  }, []);
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I love code and solving problems with code
              <br />
              <br />I have mastered
              <i>
                <b className="purple"> Javascript </b>well
              </i>
              <br />
              <br />I am attracted to the development of innovative &nbsp;
              <i>
                <b className="purple">Web Apps and Products </b>{" "}
              </i>
              <br />
              <br />I use <b className="purple">Node.js</b> modern
              <i>
                <b className="purple"> Javascript Library/Frameworks </b>
              </i>
              and
              <i>
                <b className="purple"> PostgreSQL </b>
              </i>
              in my development
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt tiltEnable={isDesktop}>
              <PhotoLoadingHandler
                img={myImg}
                className="img-fluid"
                style={{ borderRadius: "50%" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {socialLinks.map((l) => (
                <li key={l.id} className="social-icons">
                  <a
                    href={l.link}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    {l.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Home2;
