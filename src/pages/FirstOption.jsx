import React from "react";
import { Link } from "react-router-dom";
import "../styles/FirstOption.css";

const FirstOption = () => {
  return (
    <>
      <div className="container-first">
        <h1>Selecciona el mes que estás estudiando actualmente</h1>
        {
          cards.map((card, index) => (
            <Link to={card.to} className={card.classLink} key={index}>
              <div className={card.claseDiv}>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
                <p>{card.text2}</p>
                <p>{card.text3}</p>
              </div>
            </Link>
          ))
        }
        <div className="button-circle">
          <Link to={"/home"} className="back-button">
            <i className="fa-solid fa-circle-chevron-left">
              <span>Regresar</span>
            </i>
          </Link>
        </div>
      </div>
    </>
  );
};
const cards = [];
cards.push({
  to: "/view-day",
  classLink: "my-link",
  claseDiv: 'card-first',
  title: "Mes 1",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
})
cards.push({
  to: "/view-day",
  classLink: "my-link",
  claseDiv: 'card-first',
  title: "Mes 2",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
})
cards.push({
  to: "/view-day",
  classLink: "my-link",
  claseDiv: 'card-first',
  title: "Mes 3",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
})
cards.push({
  to: "/view-day",
  classLink: "my-link",
  claseDiv: 'card-first',
  title: "Mes 4",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
})

export default FirstOption;
