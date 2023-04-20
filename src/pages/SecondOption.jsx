import React from "react";
import "../styles/SecondOption.css";
import { useLocalStorageFirst } from "../functions/useLocalStorage";
import DayView from "./DayView";

const SecondOption = ({ setMes }) => {
  const [currentMonth, setCurrentMonth] = useLocalStorageFirst(
    "currentMonth",
    ""
  );
  const months = ["mes-1", "mes-2", "mes-3", "mes-4", "mes-5", "mes-6"];
  if (months.includes(currentMonth)) {
    return <DayView setCurrentMonth={setCurrentMonth}/>;
  }
  const handleBackButtonClick = () => {
    setMes("");
    return
  };
  return (
    <>
      <div className="container-second">
        <h1>Selecciona el mes que estás estudiando actualmente</h1>
        {cards.map((card, index) => (
          <button
            to={card.to}
            className={card.classLink}
            key={index}
            onClick={() => setCurrentMonth(`mes-${index + 1}`)}
          >
            <div className={card.claseDiv}>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <p>{card.text2}</p>
              <p>{card.text3}</p>
            </div>
          </button>
        ))}
        <button className="back-button" onClick={handleBackButtonClick}>
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
  classLink: "btn-second-option",
  claseDiv: "card-second",
  title: "Mes 1",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-second-option",
  claseDiv: "card-second",
  title: "Mes 2",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-second-option",
  claseDiv: "card-second",
  title: "Mes 3",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-second-option",
  claseDiv: "card-second",
  title: "Mes 4",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-second-option",
  claseDiv: "card-second",
  title: "Mes 5",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-second-option",
  claseDiv: "card-second",
  title: "Mes 6",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});

export default SecondOption;
