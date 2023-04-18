import "../styles/ProgressBar.css";
import React from "react";

const ProgressBar = ({ progressPercentage }) => {

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progressPercentage}%` }}>
        <span>{`Avance de ${progressPercentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
