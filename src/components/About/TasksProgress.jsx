import React from "react";
import { Col, Row } from "react-bootstrap";
import { LeetCode } from "./LeetCode";
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
