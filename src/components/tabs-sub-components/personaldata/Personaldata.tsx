// library
import React from 'react'

// styles
import s from '../../../style/smallComponents/personaldata.module.scss'

export const PersonalData: React.FC = () => {
  return (
    <div className={s.personaldata}>
      <div className={s.person__title}>Персональные данные:</div>
      <div className={s.personal__wrapper__input}>
        <div>
          <input type="input" name="title" value="Ваше имя*" />
        </div>
        <div>
          <input type="input" name="title" value="Ваша фамилия*" />
        </div>
        <div>
          <input type="input" name="title" value="Ваш e-mail*" />
        </div>
        <div>
          <input type="input" name="title" value="Ваш телефон*" />
        </div>
      </div>
      <div className={s.person__adress}>Адрес доставки:</div>
      <div className={s.personal__wrapper__adress}>
        <div>
          <input type="input" name="title" value="Черновцы" />
        </div>
        <div>
          <input type="input" name="title" value="№4" />
        </div>
      </div>
      <button className={s.button}>ОБНОВИТЬ ИНФОРМАЦИЮ</button>
    </div>
  )
}
