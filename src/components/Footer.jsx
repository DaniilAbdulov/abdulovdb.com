import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { socialLinks } from "../data/socialLinks.js";

export const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Developed by Daniil Abdulov</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} ADB</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        {socialLinks.map((l) => (
                            <li key={l.id} className="social-icons">
                                <a
                                    href={l.link}
                                    style={{ color: "white" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {l.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};
