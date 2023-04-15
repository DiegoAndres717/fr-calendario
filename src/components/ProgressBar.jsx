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
/* div class="progress-container">
        <div class="progress-background"></div>
        <div class="progress-bar">
          <span class="progress-label">Avance del mes 25%</span>
        </div>
      </div> */
export default ProgressBar;
