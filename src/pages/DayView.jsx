import { useCallback, useEffect, useMemo, useState } from "react";
import Dias from "../components/Dias";
import "../styles/DayView.css";
import ProgressBar from "../components/ProgressBar";
import Spinner from "../components/Spinner";
import data from "../../data/api.json";

const DayView = () => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [lecciones, setLecciones] = useState(() => {
    return data.cursos[0].lecciones;
  });
  console.log(data.cursos[0].lecciones)
  console.log(lecciones);

  useEffect(() => {
    setLecciones(data.cursos[0].lecciones);
    setIsLoading(false);
  }, [data.cursos]);

  const handleBoxClick = useCallback((index) => {
    const isSelected = selectedBoxes.includes(index);
    if (!isSelected) {
      setSelectedBoxes([...selectedBoxes, index]);
      setProgress(progress + 1);
    } else {
      setSelectedBoxes(selectedBoxes.filter((item) => item !== index));
      setProgress(progress - 1);
    }
  }, [selectedBoxes, progress]);
  const totalTemas = useMemo(() => {
    return lecciones.reduce(
      (total, leccion) => total + leccion.temas.length,
      0
    );
  }, [lecciones]);
  const progressPercentage = Math.round((progress / totalTemas) * 100);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="content">
          <div className="container">
            <div className="container-month">
              <div className="month-one">
                <p>Mes 1 de 4</p>
              </div>
              <div className="month-two">
                <p>Mes 2 de 4</p>
              </div>
              <div className="month-three">
                <p>Mes 3 de 4</p>
              </div>
              <div className="month-four">
                <p>Mes 4 de 4</p>
              </div>
            </div>
            <div className="summary">
              <span>Resumen del mes</span>
              <p>1</p>
            </div>
            <div className="lecciones">
              <p>233 lecciones</p>
              <p>20 dias de estudio</p>
              <p>67 h 32 min</p>
            </div>
          </div>
          <ProgressBar progressPercentage={progressPercentage} />
          <Dias
            lecciones={lecciones}
            selectedBoxes={selectedBoxes}
            handleBoxClick={handleBoxClick}
          />
        </div>
      )}
    </>
  );
};

export default DayView;
