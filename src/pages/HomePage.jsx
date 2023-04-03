import React from "react";
import { Link } from "react-router-dom";
import Imagen from '../assets/imagen-publica.png'
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <>
        <h1>¿En cuánto tiempo quieres finalizar tu curso?</h1>
      <div class="container-home">
        <Link to={"/first-option"} className="my-link">
          <div class="card">
            <p>4 meses</p>
          </div>
        </Link>
        <Link to={"/second-option"} className="my-link">
          <div class="card">
            <p>6 meses</p>
          </div>
        </Link>
        <Link to={"/third-option"} className="my-link">
          <div class="card">
            <p>11 meses</p>
          </div>
        </Link>
      </div>
        <div className="imagen-publica">
            <img src={Imagen} alt="Imagen Publica" />
        </div>
    </>
  );
};

export default HomePage;
