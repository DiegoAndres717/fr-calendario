import React, { useState } from "react";
import "../styles/MonthOptionTwo.css";
import { useLocalStorageFirst } from "../functions/useLocalStorage";
import DayView from "./DayView";

const MonthOptionTwo = ({ setMonthSelection }) => {
  const [currentMonth, setCurrentMonth] = useLocalStorageFirst(
    "currentMonth",
    ""
  );
  const [selectedMonth, setSelectedMonth] = useState(1)
  const [selectedTwo, setSelectedTwo] = useState(true)
  const months = ["mes-1", "mes-2", "mes-3", "mes-4", "mes-5", "mes-6"];
  if (months.includes(currentMonth)) {
    return <DayView selectedTwo={selectedTwo} setCurrentMonth={setCurrentMonth} currentMonth={currentMonth} setSelectedMonth={setSelectedMonth} selectedMonth={selectedMonth}/>;
  }
  const handleBackButtonClick = () => {
    setMonthSelection("");
    return
  };
  const handleMonthClick = (index) => {
    setSelectedMonth(index + 1);
    setCurrentMonth(`mes-${index + 1}`);
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
            onClick={() => handleMonthClick(index)}
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

export default MonthOptionTwo;
