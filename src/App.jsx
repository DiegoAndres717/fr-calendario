import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/NavBar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <HomePage />
    </HashRouter>
  );
}

export default App;
