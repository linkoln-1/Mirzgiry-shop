// import library
import React from 'react'

// hooks

// import style
import s from '../../../../../style/smallComponents/homepage-form.module.scss'

export const RegistrationSecond: React.FC = () => {
  return (
    <div className={s.form}>
        <div className={s.form__container}>
        <div className={s.form__title}>Регистрация - шаг 2</div>
        <div className={s.form__privacy}>
        На адрес отправлено письмо с уникальной ссылкой для подтверждения аккаунта. Если вы не получили письмо, запросите новое письмо
        </div>
        <div className={s.form__button}>
         <button className={s.form__button__link__second}> Запросить новое письмо</button> 
        </div>
      </div>
    </div>
  )
}
