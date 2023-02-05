import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from './components/Card/Card.js';
import TypeOfCocktales from './pages/TypeOfCocktales';
import { useSelector } from 'react-redux';
import Auth from './pages/Auth';
import CardOpened from './pages/CardOpened';

function App() {
  const coctails = useSelector((state) => state.coctails);
  const isCardOpen = useSelector((state) => state.isCardOpen);

  const [date, setDate] = useState();
  const [dateUpdate, setDateUpdate] = useState(false);

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/Europe/Moscow')
      .then((res) => {
        return res.json();
      })
      .then((date) => setDate(date.datetime))
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }, [dateUpdate]);

  let currentDate = new Date(date);
  const month = currentDate.getMonth() + 1;

  const summerArr = coctails.filter((item) => item.season === 'summer');
  const fallArr = coctails.filter((item) => item.season === 'fall');
  const winterArr = coctails.filter((item) => item.season === 'winter');
  const springArr = coctails.filter((item) => item.season === 'spring');

  const coctailsOfSeason =
    month === 6 || month === 7 || month === 8
      ? summerArr
      : month === 9 || month === 10 || month === 11
      ? fallArr
      : month === 12 || month === 1 || month === 2
      ? winterArr
      : month === 3 || month === 4 || month === 5
      ? springArr
      : '';



  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home arr={coctailsOfSeason} />} />
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

//https://color.romanuke.com/czvetovaya-palitra-4516/

//name={targetCard[0].name} src={targetCard[0].src_sqv}

//https://color.romanuke.com/czvetovaya-palitra-4567/
