// import library
import React from 'react'
import { NavLink } from 'react-router-dom'

// import style
import s from '../../../../../style/smallComponents/homepage-form.module.scss'

export const Recovery: React.FC = () => {
  return (
    <div className={s.form}>
      <div className={s.form__container}>
        <div className={s.form__title}>Забыли пароль?</div>
        <div className={s.form__privacy}>
        Введите свою почту и мы отправим вам код для сброса пароля и восстановления аккаунта:
        </div>
        <div className={s.form__input}>
          <input type='text' placeholder='Ваш e-mail*' />
        </div>
        <div className={s.form__button}>
        <button><NavLink className={s.form__button__link} to="/recovery/second"> СБРОСИТЬ </NavLink></button>
        </div>
      </div>
    </div>
  )
}
