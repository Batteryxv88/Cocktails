import './BackgroundBlur.css';
import { useAppSelector } from '../../../state/reduxHooks';
import { Route, Routes } from 'react-router';
import LoginForm from '../../Popup/Forms/LoginForm';
import RegistrationForm from '../../Popup/Forms/RegistrationForm';
import { Link } from 'react-router-dom';

const BackgroundBlur = () => {
  const isPopupOpen = useAppSelector((store) => store.openPopup.isPopupOpen);
  const isLoginFormOpen = useAppSelector(
    (store) => store.openPopup.isLoginFormOpen
  );

  return (
    <div className={isPopupOpen === true ? 'background-blur' : 'active'}>
      <LoginForm />
    </div>
  );
};
