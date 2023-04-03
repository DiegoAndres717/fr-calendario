import React, { useState } from "react";
import "../styles/Dias.css";

const Dias = (props) => {
  const [showBox, setShowBox] = useState(false);
  const { selectedBoxes, setSelectedBoxes } = props;

  const handleDropdownClick = () => {
    setShowBox(!showBox);
  };

  const handleBoxClick = (index) => {
    // Check if the box is already selected
    const isSelected = selectedBoxes.includes(index);

    // If the box is not selected, add it to the selected boxes array
    if (!isSelected) {
      setSelectedBoxes([...selectedBoxes, index]);
    } else {
      // If the box is selected, remove it from the selected boxes array
      setSelectedBoxes(selectedBoxes.filter((item) => item !== index));
    }
  };

  return (
    <>
      <div className="dropdown-container">
        <div className="dropdown-header" onClick={handleDropdownClick}>
          <span>Día 1</span>
          <span className="arrow-icon">{showBox ? "▲" : "▼"}</span>
        </div>
        {showBox && (
          <div className="box-container">
            {Array.from({ length: 13 }, (_, i) => (
              <div
                className={`box-dropdown ${
                  selectedBoxes.includes(i) ? "selected" : ""
                }`}
                key={i}
                onClick={() => handleBoxClick(i)}
              >
                <h2>Titulo</h2>
                <p>Duración</p>
              </div>
            ))}
            {/* <div className="box-dropdown">
              <h2>Titulo</h2>
              <p>Duración</p>
            </div>
            <div className="box-dropdown">
              <h2>Titulo</h2>
              <p>Duración</p>
            </div>
            <div className="box-dropdown">
              <h2>Titulo</h2>
              <p>Duración</p>
            </div>
            <div className="box-dropdown">
              <h2>Titulo</h2>
              <p>Duración</p>
            </div>
            <div className="box-dropdown">
              <h2>Titulo</h2>
              <p>Duración</p>
            </div>
            <div className="box-dropdown">
              <h2>Titulo</h2>
              <p>Duración</p>
            </div>
            <div className="box-dropdown">
              <h2>Titulo</h2>
              <p>Duración</p>
            </div>
            <div className="box-dropdown">
              <h2>Titulo</h2>
              <p>Duración</p>
            </div>
            <div className="box-dropdown">
              <h2>Titulo</h2>
              <p>Duración</p>
            </div>
            <div className="box-dropdown">
              <h2>Titulo</h2>
              <p>Duración</p>
            </div>
            <div className="box-dropdown">
              <h2>Titulo</h2>
              <p>Duración</p>
            </div>
            <div className="box-dropdown">
              <h2>Titulo</h2>
              <p>Duración</p>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Dias;
