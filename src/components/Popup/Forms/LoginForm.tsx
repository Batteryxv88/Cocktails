import { passwordCheck, emailCheck } from './formConsts';
import { useAppDispatch } from '../../../state/reduxHooks';
import { popupToggle } from '../../../state/openPopup/openPopupActions';
import { useForm } from 'react-hook-form';
import styles from './form.module.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data: any): any => {
    alert(JSON.stringify(data));
    dispatch(popupToggle);
    reset();
  };

  const popupCloseHandler = () => {
    dispatch(popupToggle);
    reset();
  };

  return (
    <div className={styles.blur}>
      <div className={styles.form}>
        <div className={styles.title_wrapper}>
          <h1 className={styles.title}>Войти</h1>
          <Link
            className={styles.close}
            to="/"
            onClick={popupCloseHandler}
          ></Link>
        </div>
        <form className={styles.login_form} onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.title_input}>Электронная почта</label>
          <input
            {...register('email', {
              required: 'Обязательное поле',
              pattern: {
                value: emailCheck,
                message: 'Введите корректный e-mail',
              },
            })}
            className={styles.input}
          ></input>
          <div className={styles.error_wrapper}>
            {errors?.email && (
              <p className={styles.report}>
                {errors?.email?.message?.toString() || 'Ошибка'}
              </p>
            )}
          </div>
          <p className={styles.title_input}>Пароль</p>
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
            className={styles.input}
          ></input>
          <div className={styles.error_wrapper_last}>
            {errors?.password && (
              <p className={styles.report}>
                {errors?.password?.message?.toString() || 'Ошибка'}
              </p>
            )}
          </div>
          <button disabled={!isValid} className={styles.button} type="submit">
            Войти
          </button>
        </form>
        
          <Link className={styles.button_link} to="register">
            Зарегистрироваться
          </Link>
        
      </div>
    </div>
  );
};

export default LoginForm;
