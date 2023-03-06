// library
import * as React from 'react'
import { useState } from 'react'

// components
import { CustomBreadcrumbs } from '../../components/breadcrumbs'

// mock
import { deleteToBasket, minus, plus } from '../../store/reducer/reducer'
import { type DescriptionType } from '../../shared/interfaces/DescriptionType'

// hooks
import { useAppDispatch, useAppSelector } from '../../hooks/hook'

// styles
import s from '../../style/pages/basket.module.scss'

export const Basket: React.FC = () => {
  const dispatch = useAppDispatch()
  const Basket = useAppSelector(state => state.basket)
  const size = useAppSelector(state => state.size)
  const [circleColor] = useState('Белый')

  const handlePlus = (index: number, count: number, inStock: number) => {
    if (count > 0 && count < inStock) {
      // @ts-ignore
      dispatch(plus({ indexProduct: index }))
    }
  }
  const handleMinus = (index: number, count: number) => {
    if (count > 1) {
      // @ts-ignore
      dispatch(minus({ indexProduct: index }))
    }
  }
  const handleDelete = (id: number, index: number) => {
    dispatch(
      // @ts-ignore
      deleteToBasket({ id, indexProduct: index }))
  }

  return (
    <div className={s.basket}>
      <CustomBreadcrumbs />
      <div className={s.basket_title}>Ваш заказ</div>
      {Basket.length
        ? Basket.map((product: DescriptionType, indexProduct) => {
          return (
          <div key={indexProduct}>
            {size.length
              ? size?.map((sizes, indexSize) => (
                indexProduct === indexSize
                  ? (
                    <div key={indexSize} className={s.basket_wrapper}>
                      <div className={s.basket_image_description}>
                        <div className={s.basket_image}>
                          <img src={product.image} alt='' />
                        </div>
                        <div className={s.basket_description}>
                          <div className={s.basket_artikul}>арт. 1589956</div>

                          <div className={s.basket_nameCategory}>
                            {product.categoryIdName}:
                          </div>
                          <div className={s.basket_name}>{product.name}</div>
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

                      <div className={s.basket_quantity}>
                        <div className={s.count}>{sizes}</div>
                      </div>
                      {product.sizes?.map((item, index) => {
                        if (item.size === sizes) {
                          return (
                            <div key={index} className={s.basket_quantity}>
                              <div
                                className={s.minus}
                                onClick={() => handleMinus(
                                  product.id,
                                  indexProduct,
                                )}
                              >
                                -
                              </div>

                              <div className={s.count}>{item.count}</div>

                              <div
                                onClick={() => handlePlus(
                                  indexProduct,
                                  item.count,
                                  item.inStock
                                )}
                                className={s.plus}
                              >
                                +
                              </div>
                            </div>
                          )
                        }
                      })}
                      <div className={s.basket_price_delete}>
                        <div className={s.basket_price}>{product.price} ₽</div>

                        <svg
                          onClick={() => handleDelete(product.id, indexProduct)}
                          className={s.basket_delete}
                          width='25'
                          height='25'
                          viewBox='0 0 25 25'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M18.75 5H25V7.5H22.5V23.75C22.5 24.0815 22.3683 24.3995 22.1339 24.6339C21.8995 24.8683 21.5815 25 21.25 25H3.75C3.41848 25 3.10054 24.8683 2.86612 24.6339C2.6317 24.3995 2.5 24.0815 2.5 23.75V7.5H0V5H6.25V1.25C6.25 0.918479 6.3817 0.600537 6.61612 0.366116C6.85054 0.131696 7.16848 0 7.5 0H17.5C17.8315 0 18.1495 0.131696 18.3839 0.366116C18.6183 0.600537 18.75 0.918479 18.75 1.25V5ZM20 7.5H5V22.5H20V7.5ZM8.75 11.25H11.25V18.75H8.75V11.25ZM13.75 11.25H16.25V18.75H13.75V11.25ZM8.75 2.5V5H16.25V2.5H8.75Z'
                            fill='#ac2b16'
                          />
                        </svg>
                      </div>
                    </div>
                    )
                  : <div>nothing</div>
              )
              )
              : <div>null</div>}

            <hr></hr>
          </div>
          )
        })
        : <div>Ошибка! Нет товаров!</div>}
    </div>
  )
}
