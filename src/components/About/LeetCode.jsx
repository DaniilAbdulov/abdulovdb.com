import React, { useEffect, useState } from "react";
import homeLogo from "../../Assets/home-main.svg";
import { ProgressBar, Spinner } from "react-bootstrap";

export const LeetCode = () => {
    const [tasksData, setTasksData] = useState([]);
    const [objLength, setObjLength] = useState(0);
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://leetcodestats.cyclic.app/daniilabdulov"
            );
            const data = await response.json();
            setTasksData(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    const renderProgressBar = (value, solved, total) => {
        const percentage = Math.round((solved / total) * 100);
        const variant =
            value === "Easy"
                ? "success"
                : value === "Medium"
                ? "warning"
                : "danger";
        const backgorundColor =
            value === "Easy"
                ? "#80cbc4"
                : value === "Medium"
                ? "#ffe082"
                : "#ffab91";
        return (
            <>
                <h6>
                    {solved}/{total}
                </h6>
                <h6>{value}</h6>
                <ProgressBar
                    style={{
                        marginBottom: "10px",
                        backgroundColor: backgorundColor,
                    }}
                    variant={variant}
                    now={percentage}
                    
                />
            </>
        );
    };
    return (
        <>
            {loading && <Spinner />}
            {tasksData && (
                <div>
                    <h1>LeetCode</h1>
                    <h5>Total solved: {tasksData.totalSolved}</h5>
                    {tasksData.totalEasy &&
                        renderProgressBar(
                            "Easy",
                            tasksData.easySolved,
                            tasksData.totalEasy
                        )}
                    {tasksData.totalMedium &&
                        renderProgressBar(
                            "Medium",
                            tasksData.mediumSolved,
                            tasksData.totalMedium
                        )}
                    {tasksData.totalHard &&
                        renderProgressBar(
                            "Hard",
                            tasksData.hardSolved,
                            tasksData.totalHard
                        )}
                </div>
            )}

            <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "320px", maxWidth: "310px" }}
            />
        </>
    );
};
