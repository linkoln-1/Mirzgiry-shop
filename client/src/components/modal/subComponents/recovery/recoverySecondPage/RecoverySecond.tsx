// import library
import React from 'react'
import { NavLink } from 'react-router-dom'

// import style
import s from '../../../../../style/smallComponents/homepage-form.module.scss'

export const RecoverySecond: React.FC = () => {
  return (
    <div className={s.form}>
        <div className={s.form__container}>
        <div className={s.form__title}>Забыли пароль?</div>
        <div className={s.form__privacy}>
        Код из сообщения:
        </div>
        <div className={s.form__input}>
          <input type='text' placeholder='Код*' />
        </div>
        <div className={s.form__input_second}>
          <input type='text' placeholder='Новый пароль*' />
        </div>
        <div className={s.form__button}>
          <button><NavLink className={s.form__button__link} to="/recovery/success"> УСТАНОВИТЬ ПАРОЛЬ </NavLink></button>
        </div>
      </div>
    </div>
  )
}
