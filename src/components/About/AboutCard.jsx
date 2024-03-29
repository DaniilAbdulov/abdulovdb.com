import React from "react";
import Card from "react-bootstrap/Card";
import { ImCheckmark2 } from "react-icons/im";

export const AboutCard = () => {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am{" "}
                        <span className="purple">Daniil Abdulov </span>
                        from <span className="purple"> Tyumen, Russia.</span>
                        <br />
                        I am currently employed as a full-stack developer at
                        eSoft.
                        <br />
                        By education, I have a master's degree in agricultural
                        engineering 😂, and I studied programming on my own.
                        <br />
                        <br />
                        Besides programming, I really like
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImCheckmark2 /> Do sport
                        </li>
                        <li className="about-activity">
                            <ImCheckmark2 /> Read books
                        </li>
                        <li className="about-activity">
                            <ImCheckmark2 /> Healthy-food
                        </li>                        
                        <li className="about-activity">
                            <ImCheckmark2 /> Self-development
                        </li>
                    </ul>

                    <p style={{ color: "#b5968c" }}>
                        "And if you don't know, now you know..."{" "}
                    </p>
                    <footer className="blockquote-footer">
                        Notorious B.I.G.
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};
