import React from "react";
import { LeetCode } from "./LeetCode";
import { Col, Row } from "react-bootstrap";
import { CodeWars } from "./CodeWars";

export const TasksProgress = () => {
    return (
        <Row>
            <Col style={{ textAlign: "center" }}>
                <LeetCode />
            </Col>
            <Col style={{ textAlign: "center" }}>
                <CodeWars />
            </Col>
        </Row>
    );
};
