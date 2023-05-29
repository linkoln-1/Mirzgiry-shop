// library
import React, { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/hook'
import { checkAuth } from '../../store/applicationSlice/authorizationSlice'
// components
import { RoutesPath } from '../../routes/Routes'

export const App: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      void dispatch(checkAuth())
    }
  }, [])
  return (
    <>
      <RoutesPath />
    </>
  )
}
