// library
import * as React from 'react'
import { NavLink } from 'react-router-dom'

// components
import { Forms } from '../../FormsInput'
// import style
import s from '../../../../../style/smallComponents/homepage-form.module.scss'

export const Registration = () => {
  return (
    <div className={s.form}>
    <div className={s.form__container}>
    <div className={s.form__title}>Регистрация</div>
    <div className={s.form__content}>
      <Forms />
        <div className={s.form__button}>
        <button><NavLink className={s.form__button__link} to="/registration/second"> Продолжить</NavLink></button>
        </div>
    </div>
  </div>
</div>
  )
}
