import Imagen from '../assets/imagen-publica.png'
import "../styles/HomePage.css";
import MonthOptionOne from "./MonthOptionOne";
import MonthOptionTwo from "./MonthOptionTwo";
import MonthOptionThree from "./MonthOptionThree";
import { useLocalStorage } from "../functions/useLocalStorage";

const HomePage = () => {
  const [monthSelection, setMonthSelection] = useLocalStorage('mes', '');

  if (monthSelection === 'mes-4') {
    return <MonthOptionOne setMonthSelection={setMonthSelection}/>;
  } else if (monthSelection === 'mes-6') {
    return <MonthOptionTwo setMonthSelection={setMonthSelection}/>;
  } else if (monthSelection === 'mes-11') {
    return <MonthOptionThree setMonthSelection={setMonthSelection}/>;
  }
  return (
    <>
        <h1>¿En cuánto tiempo quieres finalizar tu curso?</h1>
      <div className="container-home">
        <button className="btn-home" onClick={() => setMonthSelection('mes-4')}>
          <div className="card">
            <p>4 meses</p>
          </div>
        </button>
        <button className="btn-home" onClick={() => setMonthSelection('mes-6')}>
          <div className="card">
            <p>6 meses</p>
          </div>
        </button>
        <button className="btn-home" onClick={() => setMonthSelection('mes-11')}>
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
