// library
import React, { type FC, useCallback } from 'react'
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

export const Card: FC<ICardProps> = ({ todo, index }) => {
  const dispatch = useAppDispatch()

  const handleClick = useCallback((id: string) => {
    void dispatch(fetchDescriptionCard(id))
    void dispatch(fetchCards())
  }, [dispatch])

  // const makeFavorite = useCallback((id: number) => {
  //   dispatch(
  //     // @ts-ignore
  //     Favorites({ id }))
  // }, [dispatch])

  const { _id, image, name, price, sizes } = todo

  return (
    <div key={index} className={s.card}>
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        // onClick={() => makeFavorite(_id)}
        className={s.favorite}
        // checked={todo.checkHeart}
      />
      <div className={s.card__image}>
        <Link onClick={() => handleClick(_id)} to="/catalog/card">
          <img src={`${path}/${image}`} alt="" />
        </Link>
      </div>
      <div className={s.card__title}>{name}</div>
      <div className={s.card__price}>{price} ₽</div>
      <div className={s.card__sizes}>
        {sizes.map((item, index) => {
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
