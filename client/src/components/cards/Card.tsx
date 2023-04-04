// library
import React from 'react'
import { Link } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import { fetchDescriptionCard } from '../../store/descriptionCardSlice/descriptionCardSlice'
import { fetchCards } from '../../store/cardSlice/cardSlice'
// hooks
import { useAppDispatch } from '../../hooks/hook'

// constants
import { path } from '../../shared/constants/path'

// styles
import s from '../../style/pages/componentStyle/catalog-card.module.scss'
import { type CardType } from '../../shared/interfaces/CardProps'

export interface ICardProps {
  todo: CardType
  index: number
}

export const Card: React.FC<ICardProps> = ({ todo, index }) => {
  const dispatch = useAppDispatch()
  const handleClick = (id: string) => {
    void dispatch(fetchDescriptionCard(id))
    void dispatch(fetchCards())
  }
  // const makeFavorite = (id: number) => {
  //   dispatch(
  //     // @ts-ignore
  //     Favorites({ id }))
  // }
  return (
    <div key={index} className={s.card}>
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        // onClick={() => makeFavorite(todo.id)}
        className={s.favorite}
        // checked={todo.checkHeart}
      />
      <div className={s.card__image}>
        <Link
       onClick={() => handleClick(todo._id)}
        to="/catalog/card">
          <img src={`${path}/${todo.image}`} alt="" />
        </Link>
      </div>
      <div className={s.card__title}>{todo.name}</div>
      <div className={s.card__price}>{todo.price} ₽</div>
      <div className={s.card__sizes}>
         {todo.sizes.map((item, index) => {
           return <div className={s.card__size} key={index}>{item.size}</div>
         })}
      </div>
      <div className={s.card__colorCircle}>
        <div className={s.white}></div>
        <div className={s.black}></div>
      </div>
    </div>
  )
}
