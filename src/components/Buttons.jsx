import React from "react";
import { Link } from "react-router-dom";
import '../styles/Buttons.css'

const Buttons = ({ showMore, handleThemeButtonClick, lecciones }) => {

  const start = showMore ? 0 : 7;
  const end = showMore ? 7 : lecciones.length;
  const buttonText = showMore ? "Ir a temas 1 - 7" : "Ir a temas 8 - " + lecciones.length;
  const buttonAction = showMore ? () => handleThemeButtonClick(0, 7) : () => handleThemeButtonClick(7, lecciones.length);

  return (
    <>
        <div>
          <div className="button-circle-back">
            <Link
              className="back-button-day"
              to='/home'
            >
              <i className="fa-solid fa-circle-chevron-left btn"></i>
              <span>Regresar</span>
            </Link>
          </div>
        </div>
        <div>
          <div className="button-circle-next">
            <Link
              className="next-button"
              onClick={buttonAction}
            >
              <span>{buttonText}</span>
              <i className="fa-solid fa-circle-chevron-right"></i>
            </Link>
          </div>
        </div>
        
    </>
  );
};

export default Buttons;
