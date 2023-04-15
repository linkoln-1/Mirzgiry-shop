// library
import React, { type FC } from 'react'

// style
import s from '../../style/pages/componentStyle/categories-common.module.scss'

const categoriesData = [
  { label: 'Худи', imgSrc: '' /* itemSecondImg */ },
  { label: 'Футболки', imgSrc: '' /* itemFirstImg */ },
  { label: 'Худи с росписью', imgSrc: '' /* itemThirdImg */ },
  { label: 'Футболки с росписью', imgSrc: '' /* itemFourthImg */ },
]

export const Categories: FC = () => {
  return (
    <div className={s.categories__container}>
      <div className={s.categories}>Категории</div>
      <div className={s.categories__wrapper}>
        {categoriesData.map(({ label }) => (
          <div className={s.cards__body} key={label}>
            <div className={s.card__img}>
              {/* <img src={imgSrc} alt='' /> */}
            </div>
            <div className={s.cards_button}>
              <button>{label}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
