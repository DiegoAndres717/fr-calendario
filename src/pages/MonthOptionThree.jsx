import React, { useState } from "react";
import "../styles/MonthOptionThree.css";
import { useLocalStorageFirst } from "../functions/useLocalStorage";
import DayView from "./DayView";

const MonthOptionThree = ({ setMonthSelection }) => {
  const [currentMonth, setCurrentMonth] = useLocalStorageFirst(
    "currentMonth",
    ""
  );
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedThree, setSelectedThree] = useState(true)
  const months = [
    "mes-1",
    "mes-2",
    "mes-3",
    "mes-4",
    "mes-5",
    "mes-6",
    "mes-7",
    "mes-8",
    "mes-9",
    "mes-10",
    "mes-11",
  ];
  if (months.includes(currentMonth)) {
    return (
      <DayView
        selectedThree={selectedThree}
        setCurrentMonth={setCurrentMonth}
        currentMonth={currentMonth}
        setSelectedMonth={setSelectedMonth}
        selectedMonth={selectedMonth}
      />
    );
  }
  const handleMonthClick = (index) => {
    setSelectedMonth(index + 1);
    setCurrentMonth(`mes-${index + 1}`);
  };
  const handleBackButtonClick = () => {
    setMonthSelection("");
    return;
  };
  return (
    <>
      <div className="container-third">
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
  classLink: "btn-third-option",
  claseDiv: "box-third",
  title: "Mes 1",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-third-option",
  claseDiv: "box-third",
  title: "Mes 2",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-third-option",
  claseDiv: "box-third",
  title: "Mes 3",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-third-option",
  claseDiv: "box-third",
  title: "Mes 4",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-third-option",
  claseDiv: "box-third",
  title: "Mes 5",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-third-option",
  claseDiv: "box-third",
  title: "Mes 6",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-third-option",
  claseDiv: "box-third",
  title: "Mes 7",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-third-option",
  claseDiv: "box-third",
  title: "Mes 8",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-third-option",
  claseDiv: "box-third",
  title: "Mes 9",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-third-option",
  claseDiv: "box-third",
  title: "Mes 10",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});
cards.push({
  classLink: "btn-third-option",
  claseDiv: "box-third",
  title: "Mes 11",
  text: "15 lecciones",
  text2: "20 dias de estudio",
  text3: "20 horas",
});

export default MonthOptionThree;
