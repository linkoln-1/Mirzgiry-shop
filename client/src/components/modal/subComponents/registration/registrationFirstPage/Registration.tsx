import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../../../../store/applicationSlice/registrationSlice'

import s from '../../../../../style/smallComponents/homepage-form.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hook'
import { ModalReg } from '../../../../modalForReg'

interface ServerError {
  message: string
}
export const Registration: React.FC = () => {
  const dispatch = useAppDispatch()
  const error = useAppSelector<ServerError | unknown>(state => state.registrationSlice.error)
  const registrationStatus = useAppSelector<boolean>(state => state.registrationSlice.success)

  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordlDirty] = useState(false)
  const [emailError, setEmailError] = useState('Емайл не может быть пустым')
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  const [formvalid, setFormValid] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigation = useNavigate()

  const closeModal = () => {
    setIsModalOpen(false)
    window.location.reload()
  }

  useEffect(() => {
    if (emailError || passwordError || error) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!reg.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный емейл')
    } else {
      setEmailError('')
    }
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Пароль должен быть длинне 3 и меньше 8')
    } else {
      setPasswordError('')
    }
    if (e.target.value === '') {
      setPasswordError('Пароль не может быть пустым')
    }
  }
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === 'email' && e.target.value === '') {
      setEmailDirty(true)
    }
    if (e.target.name === 'password' && e.target.value === '') {
      setPasswordlDirty(true)
    }
  }
  useEffect(() => {
    if (registrationStatus) {
      navigation('/registration/second')
    }
  }, [registrationStatus, navigation])

  useEffect(() => {
    if (error) {
      setIsModalOpen(true)
    }
  }, [error])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    void dispatch(registerUser({ login, password }))
  }

  return (
    <div className={s.form}>
      <div className={s.form__container}>
        <div className={s.form__title}>Регистрация</div>
        <div className={s.form__content}>
          <div className={s.form__error}></div>
          <div className={s.form__input}>
            <input
              name="email"
              type="text"
              placeholder="Ваш e-mail*"
              value={login}
              onChange={handleChangeLogin}
              onBlur={blurHandler}
            />
            <div className={s.erroremail}>
              {emailDirty && emailError ? (<div>{emailError}</div>) : ''}
            </div>
          </div>
          <div className={s.form__input_second}>
            <input
              name="password"
              onBlur={blurHandler}
              type="text"
              placeholder="Ваш пароль*"
              value={password}
              onChange={handleChangePassword}
            />
            <div className={s.errorpassword}>
              {passwordDirty && passwordError && (
                <div style={{ color: 'red' }}>{passwordError}</div>
              )}
            </div>
          </div>
          <div className={s.form__button}>
            <form className={s.form__container} onSubmit={(e) => handleSubmit(e)}>
              <button
                type='submit'
                className={s.form__button__link}
                disabled={!formvalid}>
                Продолжить
              </button>
            </form>
          </div>
                <ModalReg tag='p' text={error} isOpen={isModalOpen} onClose={closeModal}/>
        </div>
      </div>
    </div>
  )
}
