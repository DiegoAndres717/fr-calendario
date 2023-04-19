import React from "react";
import "../styles/FirstOption.css";
import DayView from "./DayView";
import useLocalStorageFirst from "../functions/useLocalStorage";

const FirstOption = () => {
  const [mes, setMes] = useLocalStorageFirst("mes", "");

  if (mes === "mes-1") {
    return <DayView />;
  } else if (mes === "mes-2") {
    return <DayView />;
  } else if (mes === "mes-3") {
    return <DayView />;
  } else if (mes === "mes-4") {
    return <DayView />;
  }
  return (
    <>
      <div className="container-first">
        <h1>Selecciona el mes que estás estudiando actualmente</h1>
        {cards.map((card, index) => (
          <button
            className={card.classLink}
            key={index}
            onClick={() => setMes(`mes-${index + 1}`)}
          >
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
  classLink: "btn-first-option",
  claseDiv: "card-first",
  title: "Mes 1",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-first-option",
  claseDiv: "card-first",
  title: "Mes 2",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-first-option",
  claseDiv: "card-first",
  title: "Mes 3",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-first-option",
  claseDiv: "card-first",
  title: "Mes 4",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});

export default FirstOption;
