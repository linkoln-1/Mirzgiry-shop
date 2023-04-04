// library
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

// styles
import 'swiper/swiper-bundle.min.css'
import s from '../../style/pages/componentStyle/view-product.module.scss'
import { useAppSelector } from '../../hooks/hook'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
// constants
import { path } from '../../shared/constants/path'

export const ViewProducts: React.FC = () => {
  const viewProducts = useAppSelector(state => state.descriptionCardSlice.viewProducts)
  const loading = useAppSelector(state => state.descriptionCardSlice.loading)
  return (
    <>
      <div className={s.card_title}>Вы недавно смотрели</div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        className={s.card_items}
      >
        {loading
          ? (
                <div>Please Wait</div>
            )
          : viewProducts.map((item, index: number) => {
            return (
            <SwiperSlide className={s.todo} key={index}>
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
            </SwiperSlide>
            )
          })
          }
      </Swiper>
    </>
  )
}
