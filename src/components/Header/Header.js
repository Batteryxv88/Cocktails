import { Link } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popupToggle } from '../../store/openPopup/openPopupActions';
import '../../fonts/stylesheet.css';

import {
  setHome,
  setStrAlk,
  setLowAlk,
  setNonAlk,
} from '../../store/coctails/coctailsActions';

const Header = () => {
  const [dateUpdate, setDateUpdate] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  // const toggleDate = () => {
  //   callBack(dateUpdate);
  //   setDateUpdate(!dateUpdate);
  //   dispatch(setHome)
  // }

  const isPopupOpen = useSelector((store) => store.openPopup.isPopupOpen);

  return (
    <div className="header">
      <div className="header__nav">
        <Link className="header__nav_a" to="/">
          Домой
        </Link>
        <Link
          className="header__nav_a"
          to="/strong-alcohol"
          onClick={() => dispatch(setStrAlk)}
        >
          Крепкие
        </Link>
        <Link
          className="header__nav_a"
          to="/low-alcohol"
          onClick={() => dispatch(setLowAlk)}
        >
          Слабоалкогольные
        </Link>
        <Link
          className="header__nav_a"
          to="/non-alcoholic"
          onClick={() => dispatch(setNonAlk)}
        >
          Безалкогольные
        </Link>
      </div>
      <div className="header__container">
        <form className="header__form">
          <input className="header__input"></input>
          <button className="header__button">Find</button>
        </form>
        <div className="header__entry">
          <img className="header__entry_img"></img>
          {!isPopupOpen && (
            <Link
              to="auth"
              className="header__button_link"
              onClick={() => dispatch(popupToggle)}
            >
              Sign in
            </Link>
          )}
          {isPopupOpen && <button className="header__button">Sign out</button>}
        </div>
      </div>
    </div>
  );
};

export default Header;
