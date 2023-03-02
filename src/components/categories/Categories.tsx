// import library
import React from 'react'

// import img
import itemFirstImg from '../../assets/image/img1.jpeg'
import itemSecondImg from '../../assets/image/img2.jpeg'
import itemThirdImg from '../../assets/image/img3.jpeg'
import itemFourthImg from '../../assets/image/img4.jpeg'

// import style
import s from '../../style/pages/componentStyle/categories-common.module.scss'

export const Categories: React.FC = () => {
  return (
    <>
      <div className={s.categories__container}>
        <div className={s.categories}>Категории</div>
        <div className={s.categories__wrapper}>
          <div className={s.cards__body}>
            <div className={s.card__img}>
              <img src={itemSecondImg} alt='' />
            </div>
            <div className={s.cards_button}>
              <button>Худи</button>
            </div>
          </div>
          <div className={s.cards__body}>
            <div className={s.card__img}>
              <img src={itemFirstImg} alt='' />
            </div>
            <div className={s.cards_button}>
              <button>Худи</button>
            </div>
          </div>
          <div className={s.cards__body}>
            <div className={s.card__img}>
              <img src={itemThirdImg} alt='' />
            </div>
            <div className={s.cards_button}>
              <button>Худи</button>
            </div>
          </div>
          <div className={s.cards__body}>
            <div className={s.card__img}>
              <img src={itemFourthImg} alt='' />
            </div>
            <div className={s.cards_button}>
              <button>Худи</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
