// library
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// hooks
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hook'
import { ModalReg } from '../../../../modalForReg'
import { useForm } from '../../../../../shared/helpers/customHookUseForm'

// slice
import { registerUser } from '../../../../../store/applicationSlice/registrationSlice'

// styles
import s from '../../../../../style/smallComponents/homepage-form.module.scss'

interface ServerError {
  message: string
}

export const Registration: React.FC = () => {
  const dispatch = useAppDispatch()
  const error = useAppSelector<ServerError | unknown>(state => state.registrationSlice.error)
  const registrationStatus = useAppSelector<boolean>(state => state.registrationSlice.success)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigation = useNavigate()
  const validate = (name: string, value: string) => {
    switch (name) {
      case 'login':
        return value === '' ? 'Емайл не может быть пустым' : null
      case 'password':
        return value === '' ? 'Пароль не может быть пустым' : null
      default:
        return null
    }
  }
  const initialErrors = {
    login: 'Емайл не может быть пустым',
    password: 'Пароль не может быть пустым',
  }
  const { values, handleChange, handleBlur, errors, dirty, formValid } = useForm({
    initialErrors,
    validate,
  })
  const { login, password } = values
  const closeModal = () => {
    setIsModalOpen(false)
    window.location.reload()
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
              onChange={(e) => handleChange('login', e.target.value)}
              onBlur={() => handleBlur('login')}
            />
            <div className={s.erroremail}>{dirty.login && errors.email ? <div>{errors.login}</div> : ''}</div>
          </div>
          <div className={s.form__input_second}>
            <input
              name="password"
              type="text"
              placeholder="Ваш пароль*"
              value={password}
              onChange={(e) => handleChange('password', e.target.value)}
              onBlur={() => handleBlur('password')}
            />
            <div className={s.errorpassword}>
              {dirty.password && errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
            </div>
          </div>
          <div className={s.form__button}>
            <form className={s.form__container} onSubmit={(e) => handleSubmit(e)}>
              <button type="submit" className={s.form__button__link} disabled={!formValid}>
                Продолжить
              </button>
            </form>
          </div>
          <ModalReg tag="p" text={error} isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  )
}
