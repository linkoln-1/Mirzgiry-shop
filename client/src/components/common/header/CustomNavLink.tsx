import React, { type FC, type MouseEventHandler } from 'react'
import { NavLink } from 'react-router-dom'
import s from '../../../style/pages/componentStyle/header-common.module.scss'
import { type IHeaderProps } from '../../../shared/interfaces/commonProps'

const CustomNavLink: FC<IHeaderProps> = ({ to, children, colorPlace, onClick }) => {
  // Добавляем проверку на undefined перед использованием значения `to`
  const validTo = to === undefined ? '#' : to

  // Создаем функцию-обработчик, которая принимает MouseEvent
  const handleClick: MouseEventHandler<HTMLAnchorElement> = () => {
    if (onClick) {
      // Вызываем функцию onClick с параметром boolean
      onClick(!colorPlace)
    }
  }

  return (
    <NavLink
      className={colorPlace ? `${s.iconblack}` : `${s.link}`}
      to={validTo}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  )
}

export default CustomNavLink
