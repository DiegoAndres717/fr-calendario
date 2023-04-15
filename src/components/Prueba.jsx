import React, { useState } from "react";
import "../styles/Dias.css";

const Dias = (props) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const { selectedBoxes, setSelectedBoxes, lecciones = []} = props;
  console.log(lecciones)

  const handleDropdownClick = (index) => {
    if (selectedDay === index) {
      setSelectedDay(null);
    } else {
      setSelectedDay(index);
    }
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
    {lecciones.map((dia, index) => (
      <div className="dropdown-container" key={index}>
        <div className="dropdown-header" onClick={ () => handleDropdownClick(index)}>
          <span>{dia.nombre}</span>
          <span className="arrow-icon">{selectedDay === index ? "▲" : "▼"}</span>
        </div>
        {selectedDay === index && (
          <div className="box-container">
            {dia.temas.map((tema, idx) => (
              <div
                className={`box-dropdown ${
                  selectedBoxes.includes(idx) ? "selected" : ""
                }`}
                key={idx}
                onClick={() => handleBoxClick(idx)}
              >
                {/* {console.log(tema)} */}
                <h2>{tema.titulo}</h2>
                <p>{tema.duracion}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      ))}
    </>
  );
};

export default Dias;
