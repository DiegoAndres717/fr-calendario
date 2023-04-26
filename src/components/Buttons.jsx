import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Buttons.css";

const Buttons = ({
  showMore,
  handleShowMoreThemes,
  lecciones,
  setCurrentMonth,
}) => {
  const start = showMore ? 0 : 7;
  const end = showMore ? 7 : lecciones.length;
  const buttonText = showMore
    ? "Ir a dias 1 - 7"
    : "Ir a dias 8 - " + lecciones.length;
  const buttonAction = showMore
    ? () => handleShowMoreThemes(0, 7)
    : () => handleShowMoreThemes(7, lecciones.length);
  const handleBackButtonClick = () => {
    setCurrentMonth("");
    return;
  };

  // Estado para mantener la posición actual del botón
  const [buttonPosition, setButtonPosition] = useState("absolute");

  // Función para actualizar la posición del botón
  const handleScroll = () => {
    if (window.scrollY /* > window.innerHeight */) {
      setButtonPosition("fixed");
    } else {
      setButtonPosition("absolute");
    }
  };

  // Actualizar la posición del botón cada vez que el usuario hace scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <button
          className={`back-button-day`}
          to="/home"
          onClick={handleBackButtonClick}
        >
          <i className="fa-solid fa-circle-chevron-left btn"></i>
          <span>Regresar a cronograma</span>
        </button>
      </div>
      <div>
        <div className="button-circle-next">
          <button
            className="next-button"
            style={{ position: buttonPosition }}
            onClick={buttonAction}
          >
            <span>{buttonText}</span>
            <i className="fa-solid fa-circle-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Buttons;
