// import library
import React, { useState } from 'react'
// import style
import s from '../../../style/smallComponents/homepage-form.module.scss'
// hooks
import { useAppSelector } from '../../../hooks/hook'
export const Forms: React.FC = () => {
  const error = useAppSelector(state => state.applicationSlice.error)
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleChangeLogin = (e: { target: { value: React.SetStateAction<string> } }) => {
    setLogin(e.target.value)
  }
  const handleChangePassword = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPassword(e.target.value)
  }
  return (
    <div className="form__content">
      {error}
    <div className={s.form__input}>
    <input
    type='text'
    placeholder='Ваш e-mail*'
    value={login}
    onChange={handleChangeLogin} />
    </div>
    <div className={s.form__input_second}>
    <input
    type='text'
    placeholder='Ваш пароль*'
    value={password}
    onChange={handleChangePassword} />
    </div>
</div>
  )
}
