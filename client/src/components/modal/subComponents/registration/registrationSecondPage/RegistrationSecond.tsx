// import library
import React from 'react'
import { NavLink } from 'react-router-dom'
// hooks

// import style
import s from '../../../../../style/smallComponents/homepage-form.module.scss'

export const RegistrationSecond: React.FC = () => {
  return (
    <div className={s.form}>
        <div className={s.form__container}>
        <div className={s.form__title}>Регистрация - шаг 2</div>
        <div className={s.form__privacy}>
        Мы отправили вам на почту код для подтверждения регистации. Введите его, пожалуйста
        </div>
        <div className={s.form__input}>
          <input type='text' placeholder='Код с e-mail*' />
        </div>
        <div className={s.form__button}>
          <button><NavLink className={s.form__button__link} to="/registration/success"> ЗАРЕГИСТРИРОВАТЬСЯ </NavLink></button>
        </div>
      </div>
    </div>
  )
}
