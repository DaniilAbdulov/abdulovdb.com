import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import {
    SiPostgresql,
    SiExpress,
    SiVuedotjs,
    SiMobx,
    SiRedux,
} from "react-icons/si";

export const Techstack = () => {
    const skills = [
        { id: 1, icon: <DiJavascript1 /> },
        { id: 2, icon: <DiNodejs /> },
        { id: 3, icon: <SiExpress /> },
        { id: 4, icon: <DiReact /> },
        { id: 5, icon: <SiMobx /> },
        { id: 6, icon: <SiRedux /> },
        { id: 7, icon: <SiVuedotjs /> },
        { id: 8, icon: <DiGit /> },
        { id: 9, icon: <SiPostgresql /> },
    ];
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {skills.map((s) => (
                <Col key={s.id} xs={4} md={2} className="tech-icons">
                    {s.icon}
                </Col>
            ))}
        </Row>
    );
};
