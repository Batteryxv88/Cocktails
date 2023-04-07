import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/reduxHooks';
import { popupToggle } from '../../state/openPopup/openPopupActions';
import '../../fonts/stylesheet.css';

// import {
//   setHome,
//   setStrAlk,
//   setLowAlk,
//   setNonAlk,
// } from '../../state/cocktales/cocktailsActions';

import { setStrAlk, setLowAlk, setNonAlk, setHome } from '../../state/cocktales/toolkitSlice';

const Header = () => {
  const [dateUpdate, setDateUpdate] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useAppDispatch();

  // const toggleDate = () => {
  //   callBack(dateUpdate);
  //   setDateUpdate(!dateUpdate);
  //   dispatch(setHome)
  // }

  const isPopupOpen = useAppSelector((store) => store.openPopup.isPopupOpen);

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link className={styles.nav_title} to="/">
          домой
        </Link>
        <Link
          className={styles.nav_title}
          to="/strong-alcohol"
          onClick={() => dispatch(setStrAlk())}
        >
          крепкие
        </Link>
        <Link
          className={styles.nav_title}
          to="/low-alcohol"
          onClick={() => dispatch(setLowAlk())}
        >
          слабоалкогольные
        </Link>
        <Link
          className={styles.nav_title}
          to="/non-alcoholic"
          onClick={() => dispatch(setNonAlk())}
        >
          безалкогольные
        </Link>
      </div>
      <div className={styles.container}>
        <form className={styles.form}>
          <input className={styles.input}></input>
          <button className={styles.button}>поиск</button>
        </form>
        <div className={styles.entry}>
          {!isPopupOpen && 
            <button className={styles.link} onClick={() => dispatch(popupToggle)}>
              войти
            </button>
          }
          {isPopupOpen && <button className={styles.button}>выйти</button>}
        </div>
      </div>
    </div>
  );
};

export default Header;
