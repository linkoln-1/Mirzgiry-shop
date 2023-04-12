// import library
import React, { useState, useEffect } from 'react'
import { createUser } from '../../../../../store/applicationSlice/registrationSlice'
import { NavLink } from 'react-router-dom'
// import components
// import { Forms } from '../../FormsInput'

// import style
import s from '../../../../../style/smallComponents/homepage-form.module.scss'
// hooks
import { useAppSelector, useAppDispatch } from '../../../../../hooks/hook'

export const Registration: React.FC = () => {
  const dispatch = useAppDispatch()
  const error = useAppSelector(state => state.registrationSlice.error)

  const [login, setLogin] = useState<string>('')

  const [password, setPassword] = useState<string>('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordlDirty] = useState(false)
  const [emailError, setEmailError] = useState('Емайл не может быть пустым')
  const [passwordError, setPasswordError] = useState(
    'Пароль не может быть пустым'
  )
  const [formvalid, setFormValid] = useState(false)

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])

  function handleChangeLogin (e: { target: { value: React.SetStateAction<string> } }) {
    setLogin(e.target.value)
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!reg.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный емейл')
    } else {
      setEmailError('')
    }
  }
  const handleChangePassword = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Пароль должен быть длинне 3 и меньше 8')
    } else {
      setPasswordError('')
    } if (e.target.value === '') {
      setPasswordError('Пароль не может быть пустым')
    }
  }
  const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.name === 'email' && e.target.value === '') {
      setEmailDirty(true)
    }
    if (e.target.name === 'password' && e.target.value === '') {
      setPasswordlDirty(true)
    }
  }
  const handleSubmit = () => {
    void dispatch(createUser({ login, password }))
    setLogin('')
    setPassword('')
  }

  return (
    <div className={s.form}>
      <form className={s.form__container}>
        <div className={s.form__title}>Регистрация</div>
        <div className={s.form__content}>
          <div className="form__content">
            <div className={s.form__error}>

              </div>
            <div className={s.form__input}>

              <input
                name="email"
                type="text"
                placeholder="Ваш e-mail*"
                value={login}
                onChange={e => handleChangeLogin(e)}
                onBlur={(e) => blurHandler(e)}
              />
            <div className={s.erroremail}>

         {(emailDirty && emailError ? (<div>{emailError}</div>) : (error === 'string') ? `Пользователь с таким адресом ${(error)} уже существует` : String(error))}
        </div>
            </div>

            <div className={s.form__input_second}>

              <input
              name="password"
               onBlur={(e) => blurHandler(e)}
                type="text"
                placeholder="Ваш пароль*"
                value={password}
                onChange={e => handleChangePassword(e)}
              />
              <div className={s.errorpassword}>
              {passwordDirty && passwordError && (<div style={{ color: 'red' }}>{passwordError}</div>)}
        </div>
            </div>
          </div>
          <div className={s.form__button}>

            <NavLink to={error === '' ? '/registration' : '/registration/second'}>
            <button
            type="submit"
            disabled={!formvalid}
            className={!formvalid ? s.disabled : s.form__button__link}
            onClick={handleSubmit}>
           Продолжить </button>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  )
}
