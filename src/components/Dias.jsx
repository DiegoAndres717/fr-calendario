import React, { useEffect, useState } from "react";
import "../styles/Dias.css";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

const Dias = ({ lecciones = [], handleBoxClick, selectedBoxes, setCurrentMonth, selectedMonth }) => {
  const [selectedDay, setSelectedDay] = useState(-1);
  const [showMore, setShowMore] = useState(false);
  const [visibleLessons, setVisibleLessons] = useState([]);
  const [isFirstPage, setIsFirstPage] = useState(true);

  useEffect(() => {
    setVisibleLessons(lecciones.slice(0, 7));
  }, [lecciones]);

  const handleDropdownClick = (index) => {
    if (selectedDay === index) {
      setSelectedDay(null);
    } else {
      setSelectedDay(index);
    }
  };

  const handleShowMoreThemes  = (start, end) => {
    setShowMore(end > 7);
    setVisibleLessons(lecciones.slice(start, end));
    setIsFirstPage(start === 0);
  };

  return (
    <>
      {visibleLessons.map((leccion, index) => (
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
        lecciones={lecciones}
        showMore={showMore}
        selectedMonth={selectedMonth}
        setCurrentMonth={setCurrentMonth}
        handleShowMoreThemes ={handleShowMoreThemes }
      />
    </>
  );
};

export default Dias;
