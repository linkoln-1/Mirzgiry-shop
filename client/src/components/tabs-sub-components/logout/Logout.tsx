import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import s from '../../../style/smallComponents/logout.module.scss'
import { logOut } from '../../../store/applicationSlice/authorizationSlice'
import { useNavigate } from 'react-router-dom'

export const LogOut: React.FC = () => {
  const dispatch = useAppDispatch()
  const token = useAppSelector(state => state.authorizationSlice.token)
  const navigate = useNavigate()
  const handleLogOut = () => {
    void dispatch(logOut())
  }
  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token])
  return (
        <div className={s.logout}>
           <button
           onClick={handleLogOut}
           className={s.button}>ВЫХОД</button>
        </div>
  )
}
