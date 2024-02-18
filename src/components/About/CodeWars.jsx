import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";

export const CodeWars = () => {
    const [tasksData, setTasksData] = useState({});
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://www.codewars.com/api/v1/users/abdulovdb"
            );
            const data = await response.json();
            const { honor, codeChallenges, ranks } = data;
            const { totalCompleted } = codeChallenges;
            const { languages } = ranks;

            const codeWarsObject = {
                honor,
                totalCompleted,
                languages: Object.entries(languages)
                    .map(([key, value]) => [key, value])
                    .sort((a, b) => b[1].score - a[1].score),
            };
            setTasksData(codeWarsObject);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!tasksData.honor) {
            getData();
        }
    }, [tasksData]);
    return (
        <div>
            <h1>CodeWars</h1>
            {tasksData.honor && !loading && (
                <>
                    <h5>Total solved: {tasksData.totalCompleted}</h5>
                    <Table striped bordered hover responsive variant="dark">
                        <thead>
                            <tr>
                                <th>Lang</th>
                                <th>Kyo</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasksData.languages.map((lang) => (
                                <tr key={lang[0]}>
                                    <td>{lang[0]}</td>
                                    <td>{lang[1].name}</td>
                                    <td>{lang[1].score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
            {!tasksData.honor && !loading && <div>No data</div>}
            {loading && <Spinner />}
        </div>
    );
};
