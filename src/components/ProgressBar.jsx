import "../styles/ProgressBar.css";
import React from "react";

const ProgressBar = ({ progressPercentage, selectedMonth }) => {

  return (
    <div className={`progress-bar ${selectedMonth ? 'progress-container' : ''}`}>
      <div className="progress" style={{ width: `${progressPercentage}%` }}>
        <span>{`Avance de ${progressPercentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
