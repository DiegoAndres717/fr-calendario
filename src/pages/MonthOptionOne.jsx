import React, { useState } from "react";
import "../styles/MonthOptionOne.css";
import DayView from "./DayView";
import { useLocalStorageFirst } from "../functions/useLocalStorage";

const MonthOptionOne = ({ setMonthSelection }) => {
  const [currentMonth, setCurrentMonth] = useLocalStorageFirst(
    "currentMonth",
    ""
  );
  const [selectedMonth, setSelectedMonth] = useState(0)

  const monthOptions = {
    "mes-1": <DayView setCurrentMonth={setCurrentMonth} currentMonth={currentMonth} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}/>,
    "mes-2": <DayView setCurrentMonth={setCurrentMonth}  currentMonth={currentMonth} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}/>,
    "mes-3": <DayView setCurrentMonth={setCurrentMonth}  currentMonth={currentMonth} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}/>,
    "mes-4": <DayView setCurrentMonth={setCurrentMonth}  currentMonth={currentMonth} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth}/>,
  };
  const handleBackButtonClick = () => {
    setMonthSelection("");
    return;
  };

  return (
    monthOptions[currentMonth] ? monthOptions[currentMonth] : (
      <>
        <div className="container-first">
          <h1>Selecciona el mes que estás estudiando actualmente</h1>
          {cards.map((card, index) => (
            <button
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
    )
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
