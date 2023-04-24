import React from "react";
import { Link } from "react-router-dom";
import '../styles/Buttons.css'

const Buttons = ({ showMore, handleShowMoreThemes , lecciones, setCurrentMonth, selectedMonth }) => {

  const start = showMore ? 0 : 7;
  const end = showMore ? 7 : lecciones.length;
  const buttonText = showMore ? "Ir a temas 1 - 7" : "Ir a temas 8 - " + lecciones.length;
  const buttonAction = showMore ? () => handleShowMoreThemes (0, 7) : () => handleShowMoreThemes(7, lecciones.length);
  const handleBackButtonClick = () => {
    setCurrentMonth("");
    return 
  };
  return (
    <>
        <div>
            <button
              className={`back-button-day ${selectedMonth ? "selected-back" : ""}`}
              to='/home'
              onClick={handleBackButtonClick}
            >
              <i className="fa-solid fa-circle-chevron-left btn"></i>
              <span>Regresar</span>
            </button>
        </div>
        <div>
          <div className="button-circle-next">
            {selectedMonth ? (
              <button
              className="day-next-button"
              onClick={buttonAction}
            >
              <span>{buttonText}</span>
              <i className="fa-solid fa-circle-chevron-right"></i>
            </button>
            ) : (
              <button
              className="next-button"
              onClick={buttonAction}
            >
              <span>{buttonText}</span>
              <i className="fa-solid fa-circle-chevron-right"></i>
            </button>
            )}
          </div>
        </div>
        
    </>
  );
};

export default Buttons;
