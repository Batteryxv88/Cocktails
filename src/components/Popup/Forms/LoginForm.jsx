import { passwordCheck, emailCheck } from './formConsts';
import { useDispatch } from 'react-redux';
import {
  popupToggle,
  formToggle,
} from '../../../store/openPopup/openPopupActions';
import { useForm } from 'react-hook-form';
import './Form.css';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import { useSelector } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    getValues,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    dispatch(popupToggle);
    reset();
  };

  const popupCloseHandler = (props) => {
    dispatch(popupToggle);
    reset();
  };

  return (
    <div className="form-blur">
      <div className="form">
        <div className="form__title-wrapper">
          <h1 className="form__title">Войти</h1>
          <Link
            className="form__close"
            to="/"
            onClick={popupCloseHandler}
          ></Link>
        </div>
        <form className="form__login-form" onSubmit={handleSubmit(onSubmit)}>
          <label className="form__title_input">Электронная почта</label>
          <input
            {...register('email', {
              required: 'Обязательное поле',
              pattern: {
                value: emailCheck,
                message: 'Введите корректный e-mail',
              },
            })}
            className="form__input"
          ></input>
          <div className="error-wrapper">
            {errors?.email && (
              <p className="error-wrapper__report">
                {errors?.email?.message || 'Ошибка'}
              </p>
            )}
          </div>
          <p className="form__title_input">Пароль</p>
          <input
            type="password"
            {...register('password', {
              required: 'Обязательное поле',
              pattern: {
                value: passwordCheck,
                message:
                  'Пароль должен содержать не меньше 8 символов верхнего и нижнего регистра, цифры а так же спецсимволы',
              },
            })}
            className="form__input"
          ></input>
          <div className="error-wrapper">
            {errors?.password && (
              <p className="error-wrapper__report">
                {errors?.password?.message || 'Ошибка'}
              </p>
            )}
          </div>
          <button disabled={!isValid} className="form__button" type="submit">
            Войти
          </button>
        </form>
        
          <Link className="form__button_link" to="register">
            Зарегистрироваться
          </Link>
        
      </div>
    </div>
  );
};

export default LoginForm;
