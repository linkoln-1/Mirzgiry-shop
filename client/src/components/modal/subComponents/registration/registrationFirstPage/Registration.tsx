// import library
import React, { useState } from 'react'
import { createUser } from '../../../../../store/applicationSlice/applicationSlice'

// import components
// import { Forms } from '../../FormsInput'

// import style
import s from '../../../../../style/smallComponents/homepage-form.module.scss'
// hooks
import { useAppSelector, useAppDispatch } from '../../../../../hooks/hook'
// import { strict } from 'assert'

export const Registration: React.FC = () => {
  const dispatch = useAppDispatch()
  const error = useAppSelector(state => state.applicationSlice.error)
  const isLoading = useAppSelector(state => state.applicationSlice.loading)
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleChangeLogin = (e: { target: { value: React.SetStateAction<string> } }) => {
    setLogin(e.target.value)
  }
  const handleChangePassword = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPassword(e.target.value)
  }
  const handleSubmit = () => {
    void dispatch(createUser({ login, password }))
  }
  return (
    <div className={s.form}>
      <div className={s.form__container}>
        <div className={s.form__title}>Регистрация</div>
        <div className={s.form__content}>
          <div className="form__content">
            <div className={s.form__input}>
              <p>
                { error === 'string' ? error : String(error) }
              </p>
              <input
                type="text"
                placeholder="Ваш e-mail*"
                value={login}
                onChange={e => handleChangeLogin(e)}
              />
            </div>
            <div className={s.form__input_second}>
              <input
                type="text"
                placeholder="Ваш пароль*"
                value={password}
                onChange={e => handleChangePassword(e)}
              />
            </div>
          </div>
          <div className={s.form__button}>
            <button
              className={s.form__button__link}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Продолжить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
