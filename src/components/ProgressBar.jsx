import "../styles/ProgressBar.css";
import React from "react";

const ProgressBar = ({ selectedBoxes }) => {
  const progress = Math.floor((selectedBoxes.length / 13) * 100);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}>
        <span>{`Avance de ${progress}%`}</span>
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
