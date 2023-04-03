import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FirstOption from './pages/FirstOption';
import SecondOption from './pages/SecondOption';
import ThirdOption from './pages/ThirdOption';
import Navbar from './components/NavBar';
import Dias from './components/Dias';
import DayView from './pages/DayView';


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/first-option' element={<FirstOption />}/>
        <Route path='/second-option' element={<SecondOption />}/>
        <Route path='/third-option' element={<ThirdOption />}/>
        <Route path='/dias' element={<Dias />}/>
        <Route path='/view-day' element={<DayView />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
