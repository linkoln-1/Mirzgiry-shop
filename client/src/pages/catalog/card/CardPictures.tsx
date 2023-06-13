// library
import React, { type FC } from 'react'

// path
import { path } from '../../../shared/constants/path'

// styles
import s from '../../../style/pages/description-card.module.scss'

interface CardPicturesProps {
  _id: string
  categoryId: string
  priceId: string
  colorId: string
  categoryIdName: string
  name: string
  price: number
  color: string

  image: string
}

interface CardType {
  card: CardPicturesProps
}

export const CardPictures: FC<CardType> = ({ card }) => {
  return (
    <div className={s.card_pictures}>
      <div className={s.additional_pictures}>
        <div className={s.additional_pictures}>
          <div>
            <img src={`${path}/${card.image}`} alt="" />
          </div>
          <div>
            <img src={`${path}/${card.image}`} alt="" />
          </div>
          <div>
            <img src={`${path}/${card.image}`} alt="" />
          </div>
          <div>
            <img src={`${path}/${card.image}`} alt="" />
          </div>
          <div>
            <img src={`${path}/${card.image}`} alt="" />
          </div>
        </div>
      </div>
      <div className={s.main_picture}>
        <img src={`${path}/${card.image}`} alt="" />
      </div>
    </div>
  )
}
