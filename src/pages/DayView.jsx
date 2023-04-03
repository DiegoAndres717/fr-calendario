import { useState } from "react";
import { Link } from "react-router-dom";
import Dias from "../components/Dias";
import ProgressBar from "../components/ProgressBar";

import "../styles/DayView.css";

const DayView = () => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  return (
    <>
      <div className="content">
        <div class="container">
          <div class="month-one">
            <p>Mes 1 de 4</p>
          </div>
          <div class="month-two">
            <p>Mes 2 de 4</p>
          </div>
          <div class="month-three">
            <p>Mes 3 de 4</p>
          </div>
          <div class="month-four">
            <p>Mes 4 de 4</p>
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
          <div className="button-circle-back">
            <Link to={"/home"} className="back-button-day">
              <i class="fa-solid fa-circle-chevron-left btn"></i>
              <span>Regresar</span>
            </Link>
          </div>
          <div className="button-circle-next">
            <Link to={"/home"} className="next-button">
              <span>Ir a los días 8 - 14</span>
              <i class="fa-solid fa-circle-chevron-right"></i>
            </Link>
          </div>
          <ProgressBar
            selectedBoxes={selectedBoxes}
            setSelectedBoxes={setSelectedBoxes}
          />
        </div>
        <Dias
          selectedBoxes={selectedBoxes}
          setSelectedBoxes={setSelectedBoxes}
        />
      </div>
    </>
  );
};

export default DayView;
