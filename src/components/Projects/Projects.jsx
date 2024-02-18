import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Particle } from "../Particle";
import magicbrows from "../../Assets/Projects/magicbrows.png";
import myWebsite from "../../Assets/Projects/myWebsite.png";
import onlineShop from "../../Assets/Projects/onlineShop.png";
import socialNetwork from "../../Assets/Projects/socialNetwork.png";
import taskTracker from "../../Assets/Projects/taskTracker.png";

export const Projects = () => {
    const [reposData, setReposData] = useState([]);
    const [loading, setLoading] = useState(false);
    const projectsImages = [
        {
            id: 759259337,
            image: myWebsite,
        },
        {
            id: 728995055,
            image: taskTracker,
        },
        {
            id: 708902892,
            image: onlineShop,
        },
        {
            id: 685780808,
            image: socialNetwork,
        },
        {
            id: 589615302,
            image: magicbrows,
        },
    ];
    const getDataAboutRepos = async () => {
        try {
            setLoading(true);
            const octokit = new Octokit({
                auth: process.env.REACT_APP_SECRET_CODE,
            });

            const response = await octokit.request("GET /user/starred", {
                headers: {
                    "X-GitHub-Api-Version": "2022-11-28",
                },
            });
            const infoAboutRepos = response.data.map((repo) => {
                const { id, name, description, html_url, homepage } = repo;
                const projectImage = projectsImages.find(
                    (item) => item.id === repo.id
                );
                return {
                    id,
                    name,
                    description,
                    html_url,
                    homepage,
                    image: projectImage ? projectImage.image : "",
                };
            });
            setReposData(infoAboutRepos);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getDataAboutRepos();
    }, []);
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
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    {loading && <Spinner />}
                    {reposData.length > 0 &&
                        reposData.map((repo) => (
                            <Col md={4} className="project-card" key={repo.id}>
                                <ProjectCard
                                    imgPath={repo.image}
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                    homePage={repo.homepage}
                                />
                            </Col>
                        ))}
                    {!loading && reposData.length === 0 && <p>No data</p>}
                </Row>
            </Container>
        </Container>
    );
};
