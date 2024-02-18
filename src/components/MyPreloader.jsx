import React from "react";
export const MyPreloader = (props) => {
    return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};
