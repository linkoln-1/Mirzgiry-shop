import React from 'react';

import { useAppDispatch } from '../../../hooks/hook'
import s from '../../../style/smallComponents/logout.module.scss'
import { logOut } from '../../../store/applicationSlice/authorizationSlice';


export const LogOut: React.FC =() => {
    const dispatch = useAppDispatch()
    const handleLogOut =()=>{
        dispatch(logOut())
    }
    return (
        <div className={s.logout}>
           <button 
           onClick={handleLogOut}
           className={s.button}>ВЫХОД</button> 
        </div>
    );
};

