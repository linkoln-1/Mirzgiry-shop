// library
import React from 'react'

// hooks
import { useAppSelector } from '../../hooks/hook'
import FavoriteBorderIcon from '@mui/icons-material/Favorite'
// import styles
import s from '../../style/pages/componentStyle/view-product.module.scss'
// import Checkbox from '@mui/material/Checkbox'
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
// import Favorite from '@mui/icons-material/Favorite'
// constants
import { path } from '../../shared/constants/path'

export const Like: React.FC = () => {
  const likedProducts = useAppSelector(state => state.cardSlice.likedProducts)
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
                <div 
      //         onClick={() => {
      //    handleFavorite(_id, changeCheckHeart)
      //    handleSnackbarOpen()
      //  }}
       >
       
        <svg 
      
       className={s.favorit} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H40V40H20C8.95431 40 0 31.0457 0 20V0Z" fill="black"/>
</svg>

<FavoriteBorderIcon className={s.favorit_icon} sx={{ color: item.checkHeart ? '#ac2b16' : '#fff' }} />

   </div>
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
