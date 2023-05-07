import React, { useState } from "react";
import "../styles/MonthOptionOne.css";
import { useLocalStorageFirst } from "../functions/useLocalStorage";
import DayView from "./DayView";

const MonthOptionOne = ({ setMonthSelection }) => {
  const [currentMonth, setCurrentMonth] = useLocalStorageFirst(
    "currentMonth",
    ""
  );
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedOne, setSelectedOne] = useState(true);
  const months = ["mes-1", "mes-2", "mes-3", "mes-4"];

  const handleBackButtonClick = () => {
    setMonthSelection("");
    return;
  };

  const handleMonthClick = (index) => {
    setSelectedMonth(index + 1);
    setCurrentMonth(`mes-${index + 1}`);
  };

  if (months.includes(currentMonth)) {
    return (
      <DayView
        selectedOne={selectedOne}
        setCurrentMonth={setCurrentMonth}
        currentMonth={currentMonth}
        setSelectedMonth={setSelectedMonth}
        selectedMonth={selectedMonth}
      />
    );
  }

  return (
    <>
      <div className="container-first">
        <h1>Selecciona el mes que estás estudiando actualmente</h1>
        {cards.map((card, index) => (
          <button
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

export default MonthOptionOne;
