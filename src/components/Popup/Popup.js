import './Popup.css';
import { useSelector } from 'react-redux';
import LoginForm from './Forms/LoginForm';
import RegistrationForm from './Forms/RegistrationForm';
import { Switch, Route, Routes } from 'react-router-dom';

const Popup = () => {
  const isLoginFormOpen = useSelector(
    (store) => store.openPopup.isLoginFormOpen
  );

  return (
    <div className="popup">
      {isLoginFormOpen && <LoginForm />}
      {!isLoginFormOpen && <RegistrationForm />}
    </div>
  );
};

// export default Popup;
