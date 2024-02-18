import { Octokit } from "@octokit/core";

console.log(process.env);

export const octokit = new Octokit({
    auth: process.env.REACT_APP_SECRET_CODE,
});
