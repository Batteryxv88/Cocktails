import { passwordCheck, emailCheck } from "./formConsts";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { popupToggle } from "../../../store/openPopup/openPopupActions";
import './Form.css'
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    getValues
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    dispatch(popupToggle);
    reset();
  };

  const popupCloseHandler = () => {
    dispatch(popupToggle);
    reset();
  };

    return ( 
      <div className="form-blur">
        <div className="form">
          <div className="form__title-wrapper">
            <h1 className="form__title">Регистрация</h1>
            <Link to="/"
              className="form__close"
              onClick={popupCloseHandler}
            ></Link>
          </div>
          <form className="form__registration-form" onSubmit={handleSubmit(onSubmit)}>
            <p className="form__title_input">Электронная почта</p>
            <input
              {...register('email', {
                required: 'Обязательное поле',
                pattern: {
                  value: emailCheck,
                  message:
                    'Введите корректный e-mail',
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
            name='confirm_password'
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
            <p className="form__title_input">Повторите пароль</p>
            <input
            name='confirm_password'
              type="password"
              {...register('confirm_password', {
                required: true,
                validate: (val) => {
                  const { password } = getValues();
                  return password === val || 'Пароли не совпадают';
                }
              })}
              className="form__input"
            ></input>
            <div className="error-wrapper">
              {errors?.confirm_password && (
                <p className="error-wrapper__report">
                  {errors?.confirm_password?.message || 'Повторите пароль'}
                </p>
              )}
            </div>
            <button disabled={!isValid} className="form__button" type="submit">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
        
     );
}
 
export default RegistrationForm;