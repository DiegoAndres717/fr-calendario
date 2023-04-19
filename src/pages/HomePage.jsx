import React, { useEffect, useState } from "react";
import Imagen from '../assets/imagen-publica.png'
import "../styles/HomePage.css";
import FirstOption from "./FirstOption";
import SecondOption from "./SecondOption";
import ThirdOption from "./ThirdOption";
import { useLocalStorage } from "../functions/useLocalStorage";

const HomePage = () => {
  const [mes, setMes] = useLocalStorage('mes', '');

  if (mes === 'mes-4') {
    return <FirstOption />;
  } else if (mes === 'mes-6') {
    return <SecondOption />;
  } else if (mes === 'mes-11') {
    return <ThirdOption />;
  }
  return (
    <>
        <h1>¿En cuánto tiempo quieres finalizar tu curso?</h1>
      <div className="container-home">
        <button className="btn-home" onClick={() => setMes('mes-4')}>
          <div className="card">
            <p>4 meses</p>
          </div>
        </button>
        <button className="btn-home" onClick={() => setMes('mes-6')}>
          <div className="card">
            <p>6 meses</p>
          </div>
        </button>
        <button className="btn-home" onClick={() => setMes('mes-11')}>
          <div className="card">
            <p>11 meses</p>
          </div>
        </button>
      </div>
        <div className="imagen-publica">
            <img src={Imagen} alt="Imagen Publica" />
        </div>
    </>
  );
};

export default HomePage;
