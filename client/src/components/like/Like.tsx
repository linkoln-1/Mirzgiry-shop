// library
import React from 'react'

// hooks
import { useAppSelector } from '../../hooks/hook'

// import styles
import s from '../../style/pages/componentStyle/view-product.module.scss'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
// constants
import { path } from '../../shared/constants/path'

export const Like: React.FC = () => {
  const likedProducts = useAppSelector(state => state.cardSlice.likedProducts)
  console.log(likedProducts)
  const loading = useAppSelector(state => state.cardSlice.loading)

  return (
    <>
      <div className={s.card_title}>Вам может понравиться</div>

      <div className={s.card_items}>
        {loading
          ? (
                <div>Please Wait</div>
            )
          : likedProducts.map((item, index) => {
            return (
            <div className={s.todo} key={index}>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                className={s.favorite}
              />
              <div className={s.todo_image}>
              <img src={`${path}/${item.image}`} alt="" />

              </div>
              <div className={s.todo_title}>{item.name}</div>
              <div className={s.todo_price}>{item.price} ₽</div>
              <div className={s.todo__sizes}>
         {item.sizes.map((item, index) => {
           return <div className={s.todo__size} key={index}>{item.size}</div>
         })}
      </div>
              <div className={s.todo_colorcircle}>
                <div className={s.white}></div>
                <div className={s.black}></div>
              </div>
            </div>
            )
          })
         }
      </div>
    </>
  )
}
