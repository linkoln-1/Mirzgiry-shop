import React from 'react';
import{ useEffect } from 'react'
import { useAppDispatch, useAppSelector,  } from '../../../hooks/hook'
import s from '../../../style/smallComponents/logout.module.scss'
import { logOut } from '../../../store/applicationSlice/authorizationSlice';
import { useNavigate } from 'react-router-dom'

export const LogOut: React.FC =() => {
    const token = useAppSelector(state => state.authorizationSlice.token)
    console.log(token)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (token ===  null || token === undefined) {
          navigate('/authorization')
        }
      }, [token,navigate])
    const handleLogOut =()=>{
        dispatch(logOut())
    //     setTimeout(() => {
    //   window.location.reload()
    // }, 1000)
        
    }
    return (
        <div className={s.logout}>
           <button 
           onClick={handleLogOut}
           className={s.button}>ВЫХОД</button> 
        </div>
    );
};

