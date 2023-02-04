import styles from './popup.module.css';
import { useAppSelector } from '../../state/reduxHooks';
import LoginForm from './Forms/LoginForm';
import RegistrationForm from './Forms/RegistrationForm';

const Popup = () => {
  const isLoginFormOpen = useAppSelector(
    (store) => store.openPopup.isLoginFormOpen
  );

  return (
    <div className={styles.popup}>
      {isLoginFormOpen && <LoginForm />}
      {!isLoginFormOpen && <RegistrationForm />}
    </div>
  );
};

export default Popup;
