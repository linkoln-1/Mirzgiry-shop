// library
import React, { useState } from 'react'

// hooks
import { useAppSelector } from '../../../hooks/hook'

// styles
import s from '../../../style/smallComponents/history.module.scss'

export const History: React.FC = () => {
  const [opened, setOpened] = useState(false)
  const [circleColor] = useState('Белый')
  const History = useAppSelector(state => state.history)
  console.log(History)
  const sizehistory = useAppSelector(state => state.sizehistory)
  console.log(sizehistory)
  const historyp = useAppSelector(state => state.paymenthistory)
  console.log(historyp)
  const handleOpen = () => {
    setOpened(false)
  }
  const handleClouse = () => {
    setOpened(true)
  }
  return (
    <div className={s.history}>
      <div className={s.history__wrapper}>
        <div className={s.history__order__number}>№ 718 от 28.09.21</div>
        <div className={s.history__status}>
          <div>Статус:</div>
          <div className={s.status__completed}>Выполнен</div>
        </div>
        <div className={s.history__order__price}>
          <div>Сумма заказа:</div>
          <div className={s.order__price}>7650 грн</div>
        </div>
        <div>
          <svg
            onClick={() => handleOpen()}
            className={opened ? s.history__icon__open : s.history__icon}
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="#ac2b16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z"
              fill="#ac2b16"
            />
          </svg>
          <svg
            onClick={() => handleClouse()}
            className={!opened ? s.history__icon__close : s.history__icon}
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="#ac2b16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z"
              fill="#ac2b16"
            />
          </svg>
        </div>
      </div>
      <hr className={opened ? s.history__hrnone : s.history__hr}></hr>
      <div>
        {opened &&
          History.map((product, indexProduct) => {
            return (
              <div key={indexProduct}>
                {sizehistory.length ? (
                  sizehistory.map((items, indexSize) =>
                    indexProduct === indexSize ? (
                      <div key={indexSize} className={s.history_wrapper}>
                        <div className={s.history_image_description}>
                          <div className={s.history_image}>
                            <img src={product.image} alt="" />
                          </div>
                          <div className={s.history_description}>
                            <div className={s.history_artikul}>
                              арт. 1589956
                            </div>
                            <div className={s.history_nameCategory}>
                              {product.categoryIdName}:
                            </div>
                            <div className={s.history_name}>{product.name}</div>
                          </div>
                        </div>
                        <div className={s.item_colorcircle}>
                          <button
                            className={
                              product.color === circleColor ? s.white : s.black
                            }
                          >
                            {}
                          </button>
                        </div>
                        <div className={s.history_quantity}>
                          <div>Размер:</div>
                          {/* eslint-disable-next-line @typescript-eslint/no-base-to-string */}
                          <div className={s.count}>{`${items}`}</div>
                        </div>
                        {product.sizes.map((item, index) => {
                          // @ts-ignore
                          if (item.size === items) {
                            return (
                              <div key={index} className={s.history_quantity}>
                                <div>Количество:</div>
                                <div className={s.count}>{item.count}</div>
                              </div>
                            )
                          }
                        })}
                        <div className={s.history_price}>{product.price} ₽</div>
                      </div>
                    ) : (
                      ''
                    ),
                  )
                ) : (
                  <div>null</div>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}
