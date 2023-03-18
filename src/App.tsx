import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './app.module.css'
import Home from './pages/Home';
import TypeOfCocktales from './pages/TypeOfCocktales';
import CardOpened from './pages/CardOpened';
import Popup from './components/Popup/Popup';
import { useAppSelector } from './state/reduxHooks';


function App() {
  const isPopupOpen = useAppSelector((store) => store.openPopup.isPopupOpen);

  
  return (
    <BrowserRouter basename='/Cocktailes'>
      <div className={styles.app}>
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
