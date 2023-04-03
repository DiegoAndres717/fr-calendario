import React from "react";
import { Link } from "react-router-dom";
import "../styles/SecondOption.css";

const SecondOption = () => {
  return (
    <>
      <div class="container-second">
        <h1>Selecciona el mes que estás estudiando actualmente</h1>
        <Link to={"/view-day"} className="my-link">
          <div class="card-second">
            <h2>Mes 1</h2>
            <p>15 lecciones</p>
            <p>20 dias de estudio</p>
            <p>20 horas</p>
          </div>
        </Link>
        <Link to={"/view-day"} className="my-link">
          <div class="card-second">
            <h2>Mes 2</h2>
            <p>15 lecciones</p>
            <p>20 dias de estudio</p>
            <p>20 horas</p>
          </div>
        </Link>
        <Link to={"/view-day"} className="my-link">
          <div class="card-second">
            <h2>Mes 3</h2>
            <p>15 lecciones</p>
            <p>20 dias de estudio</p>
            <p>20 horas</p>
          </div>
        </Link>
        <Link to={"/view-day"} className="my-link">
          <div class="card-second">
            <h2>Mes 4</h2>
            <p>15 lecciones</p>
            <p>20 dias de estudio</p>
            <p>20 horas</p>
          </div>
        </Link>
        <Link to={"/view-day"} className="my-link">
          <div class="card-second">
            <h2>Mes 5</h2>
            <p>15 lecciones</p>
            <p>20 dias de estudio</p>
            <p>20 horas</p>
          </div>
        </Link>
        <Link to={"/view-day"} className="my-link">
          <div class="card-second">
            <h2>Mes 6</h2>
            <p>15 lecciones</p>
            <p>20 dias de estudio</p>
            <p>20 horas</p>
          </div>
        </Link>
        <div className="button-circle-second">
          <Link to={"/home"} className="back-button">
            <i class="fa-solid fa-circle-chevron-left">
              <span>Regresar</span>
            </i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SecondOption;
