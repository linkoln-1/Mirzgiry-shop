// library
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

// styles
import 'swiper/swiper-bundle.min.css'
import s from '../../style/pages/componentStyle/view-product.module.scss'
import { useAppSelector } from '../../hooks/hook'
import { type DescriptionType } from '../../shared/interfaces/DescriptionType'

export const ViewProducts: React.FC = () => {
  const viewProducts = useAppSelector(state => state.viewProducts)
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
        {viewProducts.length
          ? viewProducts.map((item: DescriptionType) => {
            return (
            <SwiperSlide className={s.todo}>
              <div className={s.todo_image}>
                <img src={item.image} alt='' />
              </div>
              <div className={s.todo_title}>{item.name}</div>
              <div className={s.todo_price}>{item.price}</div>
              <div className={s.todo_size}>{item.size}</div>
              <div className={s.todo_colorcircle}>
                <div className={s.white}></div>
                <div className={s.black}></div>
              </div>
              <svg
                className={s.favorites}
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 0H40V40H20C8.95431 40 0 31.0457 0 20V0Z'
                  fill='#ac2b16'
                />
              </svg>
              <svg
                className={s.heart}
                width='15'
                height='13.86'
                viewBox='0 0 25 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.501 2.16119C15.4372 -0.475012 19.9746 -0.387513 22.8033 2.44618C25.6308 5.28113 25.7283 9.79605 23.0983 12.741L12.4985 23.3558L1.90122 12.741C-0.728729 9.79605 -0.62998 5.27363 2.19622 2.44618C5.02741 -0.383763 9.55608 -0.478762 12.501 2.16119ZM21.0334 4.2124C19.1584 2.33494 16.1335 2.25869 14.171 4.02115L12.5023 5.51863L10.8323 4.0224C8.86359 2.25744 5.8449 2.33494 3.96493 4.2149C2.10247 6.07737 2.00872 9.05856 3.72494 11.0285L12.4998 19.8171L21.2746 11.0298C22.9921 9.05856 22.8983 6.08112 21.0334 4.2124Z'
                  fill='white'
                />
              </svg>
            </SwiperSlide>
            )
          })
          : <div>Ошибка! Нету товара!</div>}
      </Swiper>
    </>
  )
}
