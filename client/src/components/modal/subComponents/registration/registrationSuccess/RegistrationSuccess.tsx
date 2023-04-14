// import library
import React from 'react'
// import style
import s from '../../../../../style/smallComponents/homepage-form.module.scss'

export const RegistrationSuccess: React.FC = () => {
  return (
    <div className={s.form}>
        <div className={s.form__container}>
        <div className={s.form__title}>
        Вы успешно зарегестрировались! Приятных покупок!
        </div>
      </div>
    </div>
  )
}
