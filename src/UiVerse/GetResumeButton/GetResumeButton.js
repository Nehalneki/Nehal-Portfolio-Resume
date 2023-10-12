import React from "react";
import classes from "./GetResumeButton.module.css";
import Nehal from "../../Assets/resume.pdf";

const GetResumeButton = () => {
  return (
    <a href={Nehal} download={"Nehal Resume.pdf"}>
      <button className={classes.button}>
        {" "}
        <span></span>
        Resume
      </button>
    </a>
  );
};

export default GetResumeButton;
