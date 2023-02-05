import { Route, Routes } from 'react-router';
import LoginForm from '../components/Popup/Forms/LoginForm';
import RegistrationForm from '../components/Popup/Forms/RegistrationForm';
import { useSelector } from 'react-redux';

const Auth = () => {
  const isLoginFormOpen = useSelector(
    (store) => store.openPopup.isLoginFormOpen
  );

  return (
    <>
      <LoginForm />
      <Routes>
        <Route path="register" element={<RegistrationForm />} />
      </Routes>
    </>
  );
};

export default Auth;
