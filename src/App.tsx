import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import TypeOfCocktales from './pages/TypeOfCocktales';
import CardOpened from './pages/CardOpened';
import Auth from './pages/Auth';


function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="strong-alcohol" element={<TypeOfCocktales />} />
          <Route path="low-alcohol" element={<TypeOfCocktales />} />
          <Route path="non-alcoholic" element={<TypeOfCocktales />} />
          <Route path=":category/:id" element={<CardOpened />} />
          <Route path="auth/*" element={<Auth />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
