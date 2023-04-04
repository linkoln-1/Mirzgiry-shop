// import library
import * as React from 'react'
import { NavLink } from 'react-router-dom'

// import components
import { Forms } from '../FormsInput'

// import style
import s from '../../../../style/smallComponents/homepage-form.module.scss'

export const Authorization: React.FC = () => {
  return (
    <div className={s.form}>
        <div className={s.form__container}>
        <div className={s.form__title}>Авторизация</div>
        <div className={s.form__content}>
          <Forms />
          <div className={s.form__container__link}>
          <NavLink className={s.form__link} to="/recovery">
          Забыли пароль?
          </NavLink>
          <NavLink className={s.form__link} to="/registration">
            Нет аккаунта?
          </NavLink>
            </div>
          <div className={s.form__button}>
          <button>Войти</button>
          </div>
        </div>
      </div>
    </div>
  )
}
