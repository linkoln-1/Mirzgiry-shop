// import library
import React from 'react'

// import style
import s from '../../../../style/smallComponents/homepage-form.module.scss'

export const Forms: React.FC = () => {
  return (
    <div className={s.form}>
      <div className={s.form__container}>
        <div className={s.form__title}>Узнайте первым о новинках</div>
        <div className={s.form__input}>
          <input type='text' placeholder='Ваш e-mail*' />
        </div>
        <div className={s.form__button}>
          <button>Подписаться</button>
        </div>
        <div className={s.form__privacy}>
          Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
          персональных данных и ознакомлен(а) с условиями конфиденциальности.
        </div>
      </div>
    </div>
  )
}
