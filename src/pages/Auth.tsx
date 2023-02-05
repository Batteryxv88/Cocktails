import LoginForm from '../components/Popup/Forms/LoginForm';
import RegistrationForm from '../components/Popup/Forms/RegistrationForm';
import { useAppSelector } from '../state/reduxHooks';


const Auth = () => {
  const isLoginFormOpen = useAppSelector(
    (store) => store.openPopup.isLoginFormOpen
  );

  return (
    <>
      {isLoginFormOpen ? <LoginForm /> : <RegistrationForm />}
    </>
  );
};

export default Auth;
