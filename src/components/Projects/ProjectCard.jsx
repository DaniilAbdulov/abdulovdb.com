import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

export const ProjectCard = (props) => {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <div style={{ marginBottom: "10px" }}>
                    <Button
                        variant="primary"
                        href={props.html_url}
                        target="_blank"
                    >
                        <BsGithub /> &nbsp; GitHub
                    </Button>
                    {/* {"\n"}
                {"\n"} */}

                    {props.homePage && (
                        <Button
                            variant="primary"
                            href={props.homePage}
                            target="_blank"
                            style={{ marginLeft: "10px" }}
                        >
                            <CgWebsite /> &nbsp;
                            {"Page"}
                        </Button>
                    )}
                </div>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
