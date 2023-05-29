// import library
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../../../hooks/hook'
// import components
import { auth } from '../../../../store/applicationSlice/authorizationSlice'
// import style
import s from '../../../../style/smallComponents/homepage-form.module.scss'

export const Authorization: React.FC = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const avtorization = useAppSelector(state => state.authorizationSlice.loading)
  const error = useAppSelector(state => state.authorizationSlice.error)
  const token = useAppSelector(state => state.authorizationSlice.token)

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLogin(e.target.value)
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  if (token !== null) {
    navigate('/personal')
  }

  const handleSubmit = () => {
    void dispatch(auth({ login, password }))
  }

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
            <div className={s.form__error}></div>
            <div className={s.form__input_second}>
              <input
                type="text"
                placeholder="Ваш пароль*"
                value={password}
                onChange={e => handleChangePassword(e)}
              />
            </div>
          </div>
          <div className={s.erroremail}>
            {' '}
            {error === 'string' ? error : String(error)}
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
              className={s.form__button__link}
              disabled={avtorization}
              onClick={handleSubmit}
              type="submit"
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
