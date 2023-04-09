// import library
import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../../../hooks/hook'
// import components


// import style
import s from '../../../../style/smallComponents/homepage-form.module.scss'

export const Authorization: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const avtorization = useAppSelector((state) => state);
  const error = useAppSelector((state) => state);

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value);
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSubmit = () => dispatch(auth(login, password));
  return (
    <div className={s.form}>
        <div className={s.form__container}>
        <div className={s.form__title}>Авторизация</div>
        <div className={s.form__content}>
        <div className="form__content">
            <div className={s.form__input}>
              <input
                type="text"
                placeholder="Ваш e-mail*"
                value={login}
                onChange={e => handleChangeLogin(e)}
              />
            </div>
             <div className={s.form__error}>
                { error === 'string' ? error : String(error) }
              </div>
            <div className={s.form__input_second}>
              <input
                type="text"
                placeholder="Ваш пароль*"
                value={password}
                onChange={e => handleChangePassword(e)}
              />
            </div>
          </div>
          <div className={s.form__container__link}>
          <NavLink className={s.form__link} to="/recovery">
          Забыли пароль?
          </NavLink>
          <NavLink className={s.form__link} to="/registration">
            Нет аккаунта?
          </NavLink>
            </div>
          <div className={s.form__button}>
          <button
          disabled={avtorization}
          onClick={handleSubmit} 
          type="submit"
          >Войти</button>
          </div>
        </div>
      </div>
    </div>
  )
}
