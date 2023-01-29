import './BackgroundBlur.css';
import Popup from '../../Popup/Popup';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import LoginForm from '../../Popup/Forms/LoginForm';
import RegistrationForm from '../../Popup/Forms/RegistrationForm';
import { Link } from 'react-router-dom';

const BackgroundBlur = () => {
  const isPopupOpen = useSelector((store) => store.openPopup.isPopupOpen);
  const isLoginFormOpen = useSelector(
    (store) => store.openPopup.isLoginFormOpen
  );

  return (
    <div className={isPopupOpen === true ? 'background-blur' : 'active'}>
      <LoginForm />
    </div>
  );
};
