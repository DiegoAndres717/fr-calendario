import { useEffect, useState } from "react";
import Dias from "../components/Dias";
import "../styles/DayView.css";
import ProgressBar from "../components/ProgressBar";
import Spinner from "../components/Spinner";

const VITE_INITIAL_URL = import.meta.env.VITE_INITIAL_URL

const DayView = () => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [lecciones, setLecciones] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLecciones = async (url) => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLecciones(data[0].lecciones);
        setIsLoading(false);
      });
  };
  console.log(lecciones);

  useEffect(() => {
    fetchLecciones(VITE_INITIAL_URL);
  }, []);

  const handleBoxClick = (index) => {
    // Check if the box is already selected
    const isSelected = selectedBoxes.includes(index);

    // If the box is not selected, add it to the selected boxes array and update progress
    if (!isSelected) {
      setSelectedBoxes([...selectedBoxes, index]);
      setProgress(progress + 1);
    } else {
      // If the box is selected, remove it from the selected boxes array and update progress
      setSelectedBoxes(selectedBoxes.filter((item) => item !== index));
      setProgress(progress - 1);
    }
  };
  const totalTemas = lecciones.reduce(
    (total, leccion) => total + leccion.temas.length,
    0
  );
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
