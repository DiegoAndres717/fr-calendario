import { useCallback, useEffect, useMemo, useState } from "react";
import Dias from "../components/Dias";
import "../styles/DayViewTwo.css";
import ProgressBar from "../components/ProgressBar";
import Spinner from "../components/Spinner";
import data from "../../data/api.json";

const DayView = ({ setCurrentMonth, selectedMonth, setSelectedMonth }) => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [lecciones, setLecciones] = useState(data.cursos[0].lecciones);
  const maxMonth = 6;

  useEffect(() => {
    setLecciones(data.cursos[0].lecciones);
    setIsLoading(false);
  }, [data.cursos]);

  const handleBoxClick = useCallback(
    (index) => {
      const isSelected = selectedBoxes.includes(index);
      if (!isSelected) {
        setSelectedBoxes([...selectedBoxes, index]);
        setProgress(progress + 1);
      } else {
        setSelectedBoxes(selectedBoxes.filter((item) => item !== index));
        setProgress(progress - 1);
      }
    },
    [selectedBoxes, progress]
  );

  const totalTemas = useMemo(() => {
    return lecciones.reduce(
      (total, leccion) => total + (leccion.temas?.length ?? 0),
      0
    );
  }, [lecciones]);

  const progressPercentage = Math.round((progress / totalTemas) * 100);

  const handleNextMonthClick = () => {
    setSelectedMonth((selectedMonth) => {
      if (selectedMonth === maxMonth) {
        return maxMonth;
      } else {
        return selectedMonth + 1;
      }
    });
  };
  const handlePrevMonthClick = () => {
    setSelectedMonth((selectedMonth) => {
      if (selectedMonth === 1) {
        return 1;
      } else {
        return selectedMonth - 1;
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="content">
          <div className="container-two">
            <div className={`container-month-two ${selectedMonth === 1 ? "selected-container" : ""}`}>
              {selectedMonth !==
                1 ? (
                  <button
                    className="day-month-one"
                    onClick={handlePrevMonthClick}
                    disabled={selectedMonth === 0}
                  >
                    Ir a mes {selectedMonth - 1}
                  </button>
                ) : null}
              <div className={`day-month-two`}>
                <p>Mes {selectedMonth}</p>
              </div>
              {
                selectedMonth!== maxMonth? (
                  <button
                    className="day-month-three"
                    onClick={handleNextMonthClick}
                    disabled={selectedMonth === maxMonth}
                  >
                    Ir a mes {selectedMonth + 1}
                  </button>
                ) : null
              }
            </div>
            <div className="day-summary">
              <span>Resumen del mes</span>
              <p>{selectedMonth}</p>
            </div>
            <div className="day-lecciones">
              <p>233 lecciones</p>
              <p>20 dias de estudio</p>
              <p>67 h 32 min</p>
            </div>
          </div>
          <ProgressBar progressPercentage={progressPercentage} selectedMonth={selectedMonth} />
          <Dias
            lecciones={lecciones}
            selectedBoxes={selectedBoxes}
            selectedMonth={selectedMonth}
            setCurrentMonth={setCurrentMonth}
            handleBoxClick={handleBoxClick}
          />
        </div>
      )}
    </>
  );
};

export default DayView;
