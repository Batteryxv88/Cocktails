import styles from './headerSlim.module.css';
import { popupToggle } from '../../../state/openPopup/openPopupActions';
import { useAppDispatch, useAppSelector } from '../../../state/reduxHooks';

const HeaderSlim = () => {
  const dispatch = useAppDispatch();
  const isPopupOpen = useAppSelector((store) => store.openPopup.isPopupOpen);


  return <div className={styles.header}>
    <div className={styles.catalog}></div>
    <div className={styles.logo}></div>
    <div className={styles.wrap}>
        <div className={styles.find}></div>
        <div className={styles.login} onClick={() => dispatch(popupToggle)}></div>
    </div>
  </div>;
};

export default HeaderSlim;
