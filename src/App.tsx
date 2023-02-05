import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import TypeOfCocktales from './pages/TypeOfCocktales';
import CardOpened from './pages/CardOpened';
import Auth from './pages/Auth';
import { useAppSelector } from './state/reduxHooks';
import LoginForm from './components/Popup/Forms/LoginForm';
import Popup from './components/Popup/Popup';


function App() {
  const isPopupOpen = useAppSelector((store) => store.openPopup.isPopupOpen);

  return (
    <BrowserRouter>
      <div className="app">
        <Popup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="strong-alcohol" element={<TypeOfCocktales />} />
          <Route path="low-alcohol" element={<TypeOfCocktales />} />
          <Route path="non-alcoholic" element={<TypeOfCocktales />} />
          <Route path=":category/:id" element={<CardOpened />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
