import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FirstOption from "./pages/FirstOption";
import SecondOption from "./pages/SecondOption";
import ThirdOption from "./pages/ThirdOption";
import Navbar from "./components/NavBar";
import Dias from "./components/Dias";
import DayView from "./pages/DayView";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <HomePage />
    </HashRouter>
  );
}

export default App;
