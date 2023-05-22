import { Link } from "react-router-dom";
import { setFilter } from "../../../state/filteredItem/filteredGridSlice";
import { useAppDispatch, useAppSelector } from "../../../state/reduxHooks";
import { popupToggle } from "../../../state/openPopup/openPopupActions";
import styles from './headerWide.module.css'

const HeaderWide = () => {
    const dispatch = useAppDispatch();
    const isPopupOpen = useAppSelector((store) => store.openPopup.isPopupOpen);

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link
          className={styles.nav_title}
          to="/"
          onClick={() => dispatch(setFilter('All'))}
        >
          домой
        </Link>
        <Link
          className={styles.nav_title}
          to="/strong-alcohol"
          onClick={() => dispatch(setFilter('Strong'))}
        >
          крепкие
        </Link>
        <Link
          className={styles.nav_title}
          to="/low-alcohol"
          onClick={() => dispatch(setFilter('Low'))}
        >
          слабоалкогольные
        </Link>
        <Link
          className={styles.nav_title}
          to="/non-alcoholic"
          onClick={() => dispatch(setFilter('Non'))}
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

export default HeaderWide;
