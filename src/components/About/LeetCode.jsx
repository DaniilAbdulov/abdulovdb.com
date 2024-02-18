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
            setObjLength(Object.keys(data).length);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!objLength) {
            getData();
        }
    }, [objLength]);
    return (
        <>
            {loading && <Spinner />}
            {!objLength && !loading && <div>No data</div>}
            {objLength && !loading && (
                <div>
                    <h1>LeetCode</h1>

                    <h5>Total solved: {tasksData.totalSolved}</h5>
                    <h6>
                        Easy {tasksData.easySolved}/{tasksData.totalEasy}
                    </h6>
                    <ProgressBar
                        style={{ backgroundColor: "#80cbc4" }}
                        variant="success"
                        now={Math.round(
                            (tasksData.easySolved / tasksData.totalEasy) * 100
                        )}
                    />
                    <h6>
                        Medium {tasksData.mediumSolved}/{tasksData.totalMedium}
                    </h6>
                    <ProgressBar
                        style={{ backgroundColor: "#ffe082" }}
                        variant="warning"
                        now={Math.round(
                            (tasksData.mediumSolved / tasksData.totalMedium) *
                                100
                        )}
                    />
                    <h6>
                        Hard {tasksData.hardSolved}/{tasksData.totalHard}
                    </h6>
                    <ProgressBar
                        style={{ backgroundColor: "#ffab91" }}
                        variant="danger"
                        now={Math.round(
                            (tasksData.hardSolved / tasksData.totalHard) * 100
                        )}
                    />
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
