import React, { useState } from "react";
import "../styles/Dias.css";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

const Dias = (props) => {
  const { lecciones = [], handleBoxClick, selectedBoxes } = props;
  const [selectedDay, setSelectedDay] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [leccionesToShow, setLeccionesToShow] = useState(lecciones.slice(0, 7));
  const [isFirstPage, setIsFirstPage] = useState(true);
  console.log(props);

  const handleDropdownClick = (index) => {
    if (selectedDay === index) {
      setSelectedDay(null);
    } else {
      setSelectedDay(index);
    }
  };

  const handleThemeButtonClick = (start, end) => {
    setShowMore(end > 7);
    setLeccionesToShow(lecciones.slice(start, end));
    setIsFirstPage(start === 0);
  };

  return (
    <>
      {leccionesToShow.map((leccion, index) => (
        <div className="dropdown-container" key={index}>
          <div
            className="dropdown-header"
            onClick={() => handleDropdownClick(index)}
          >
            <span>{leccion.dia}</span>
            <span className="arrow-icon">
              {selectedDay === index ? "▲" : "▼"}
            </span>
          </div>
          {selectedDay === index && (
            <div className="box-container">
              {leccion.temas.map((tema, idx) => (
                <Link to={tema.url} target="_blank"
                  className={`box-dropdown ${
                    selectedBoxes.includes(idx) ? "selected" : ""
                  }`}
                  key={idx}
                  onClick={() => handleBoxClick(idx)}
                >
                  <h2>{tema.titulo}</h2>
                  <p>{tema.duracion}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <Buttons
        handleThemeButtonClick={handleThemeButtonClick}
        showMore={showMore}
        lecciones={lecciones}
      />
    </>
  );
};

export default Dias;
