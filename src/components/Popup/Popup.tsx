import styles from './popup.module.css';
import { useAppSelector } from '../../state/reduxHooks';
import LoginForm from './Forms/LoginForm';
import RegistrationForm from './Forms/RegistrationForm';

const Popup = () => {
  const isPopupOpen = useAppSelector((store) => store.openPopup.isPopupOpen);

  const isLoginFormOpen = useAppSelector(
    (store) => store.openPopup.isLoginFormOpen
  );

  return (
    <div className={isPopupOpen === true ?  styles.back_blur: styles.active}>
      <div >
        {isLoginFormOpen ? <LoginForm /> : <RegistrationForm />}
      </div>
    </div>
  );
};

export default Popup;
