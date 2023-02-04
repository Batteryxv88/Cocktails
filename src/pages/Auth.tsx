import { Route, Routes } from 'react-router';
import LoginForm from '../components/Popup/Forms/LoginForm';
import RegistrationForm from '../components/Popup/Forms/RegistrationForm';
import { useAppSelector } from '../state/reduxHooks';

const Auth = () => {
  const isLoginFormOpen = useAppSelector(
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
