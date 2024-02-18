import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Projects } from "../components/Projects/Projects";
import { About } from "../components/About/About";
import { ResumeNew } from "../components/Resume/ResumeNew";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<ResumeNew />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
