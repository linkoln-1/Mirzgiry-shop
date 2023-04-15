// import library
import React from 'react'

// import style
import s from '../../../../style/smallComponents/homepage-form.module.scss'

interface IFormsProps {
  formTitle: string
  inputPlaceholder: string
  privacyText: string
  onSubmit: () => void
}

export const Forms: React.FC<IFormsProps> = ({
  formTitle,
  inputPlaceholder,
  privacyText,
  onSubmit,
}) => {
  return (
    <div className={s.form}>
      <div className={s.form__container}>
        <div className={s.form__title}>{formTitle}</div>
        <div className={s.form__input}>
          <input type="text" placeholder={inputPlaceholder} />
        </div>
        <div className={s.form__button}>
          <button onClick={onSubmit}>Подписаться</button>
        </div>
        <div className={s.form__privacy}>{privacyText}</div>
      </div>
    </div>
  )
}
