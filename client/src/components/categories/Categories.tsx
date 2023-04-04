// import library
import React from 'react'

// import img
// import itemFirstImg from '../../../public/image/img1.jpeg'
// import itemSecondImg from '../../../public/image/img2.jpeg'
// import itemThirdImg from '../../../public/image/img3.jpeg'
// import itemFourthImg from '../../../public/image/img4.jpeg'

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
              {/* <img src={itemSecondImg} alt='' /> */}
            </div>
            <div className={s.cards_button}>
              <button>Худи</button>
            </div>
          </div>
          <div className={s.cards__body}>
            <div className={s.card__img}>
              {/* <img src={itemFirstImg} alt='' /> */}
            </div>
            <div className={s.cards_button}>
              <button>Футболки</button>
            </div>
          </div>
          <div className={s.cards__body}>
            <div className={s.card__img}>
              {/* <img src={itemThirdImg} alt='' /> */}
            </div>
            <div className={s.cards_button}>
              <button>Худи с росписью</button>
            </div>
          </div>
          <div className={s.cards__body}>
            <div className={s.card__img}>
              {/* <img src={itemFourthImg} alt='' /> */}
            </div>
            <div className={s.cards_button}>
              <button>Футболки с росписью</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
