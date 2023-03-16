// import library
import React from 'react'

// import style
import s from '../../../style/smallComponents/homepage-form.module.scss'

export const Forms: React.FC = () => {
  return (
    <div className="form__content">
    <div className={s.form__input}>
    <input type='text' placeholder='Ваш e-mail*' />
    </div>
    <div className={s.form__input_second}>
    <input type='text' placeholder='Ваш пароль*' />
    </div>
</div>
  )
}
