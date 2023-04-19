import React from "react";
import { Link } from "react-router-dom";
import "../styles/SecondOption.css";

const SecondOption = () => {
  return (
    <>
      <div className="container-second">
        <h1>Selecciona el mes que estás estudiando actualmente</h1>
        {cards.map((card, index) => (
          <button to={card.to} className={card.classLink} key={index}>
            <div className={card.claseDiv}>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <p>{card.text2}</p>
              <p>{card.text3}</p>
            </div>
          </button>
        ))}
        <button className="back-button">
          <i className="fa-solid fa-circle-chevron-left">
            <span>Regresar</span>
          </i>
        </button>
      </div>
    </>
  );
};

const cards = [];
cards.push({
  to: "/view-day",
  classLink: "btn-second-option",
  claseDiv: "card-second",
  title: "Mes 1",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  to: "/view-day",
  classLink: "btn-second-option",
  claseDiv: "card-second",
  title: "Mes 2",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  to: "/view-day",
  classLink: "btn-second-option",
  claseDiv: "card-second",
  title: "Mes 3",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  to: "/view-day",
  classLink: "btn-second-option",
  claseDiv: "card-second",
  title: "Mes 4",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  to: "/view-day",
  classLink: "btn-second-option",
  claseDiv: "card-second",
  title: "Mes 5",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  to: "/view-day",
  classLink: "btn-second-option",
  claseDiv: "card-second",
  title: "Mes 6",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});

export default SecondOption;
