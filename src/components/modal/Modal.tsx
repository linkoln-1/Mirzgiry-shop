// import library
import * as React from 'react'
import { NavLink } from 'react-router-dom'

// import style
import s from '../../style/smallComponents/modal.module.scss'

interface IModalProps {
  active: boolean
  onClose: () => void
}
export const Modal: React.FC<IModalProps> = ({
  active,
  onClose
}) => {
  if (!active) {
    return null
  }
  return (
    <div className={s.modal}>
        <div className={s.modal__content}>
            <div className={s.modal__content__container}>
                <NavLink className={s.modal__content__link} to="/authorization" onClick={onClose}>
                    Войти
                </NavLink>
            </div>
            <div className={s.modal__content__container}>
            <NavLink className={s.modal__content__link} to="/registration" onClick={onClose}>
                    Регистрация
                </NavLink>
            </div>
            <div className={s.modal__button}>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>

    </div>
  )
}
