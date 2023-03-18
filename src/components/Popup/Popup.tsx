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
    
      <div >
        {isLoginFormOpen === null ?  '' :
        isLoginFormOpen? <LoginForm />: <RegistrationForm />}
      </div>
    
  );
};

export default Popup;
