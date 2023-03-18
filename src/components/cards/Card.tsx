// library
import React from 'react'
import { Link } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'

// mock
import { addCard, Favorites } from '../../store/slice/slice'

// hooks
import { useAppDispatch, useAppSelector } from '../../hooks/hook'

// styles
import s from '../../style/pages/componentStyle/catalog-card.module.scss'

export interface ICardProps {
  todo: {
    id: number
    categoryId: number
    name: string
    categoryIdName: string
    price: number
    priceId: number
    color: string
    colorId: number
    image: string
    sizes: [{
      id: number
      size: string
      inStock: number
      count: number
    }]
    checkHeart: boolean
  }
  index?: number
}

export const Card: React.FC<ICardProps> = ({ todo, index }) => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.products)
  const handleClick = (id: number) => {
    dispatch(
      // @ts-ignore
      addCard(products.find(item => item.id === id), id))
  }
  const makeFavorite = (id: number) => {
    dispatch(
      // @ts-ignore
      Favorites({ id }))
  }
  return (
    <div key={index} className={s.card}>
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        onClick={() => makeFavorite(todo.id)}
        className={s.favorite}
        checked={todo.checkHeart}
      />
      <div className={s.card__image}>
        <Link onClick={() => handleClick(todo.id)} to="/catalog/card">
          <img src={todo.image} alt="" />
        </Link>
      </div>
      <div className={s.card__title}>{todo.name}</div>
      <div className={s.card__price}>{todo.price} ₽</div>
      <div className={s.card__sizes}>
         {todo.sizes.map((item) => {
           return <div className={s.card__size} key={item.id}>{item.size}</div>
         })}
      </div>
      <div className={s.card__colorCircle}>
        <div className={s.white}></div>
        <div className={s.black}></div>
      </div>
    </div>
  )
}
