// library
import React, { useState } from 'react'

// components
import { CustomBreadcrumbs } from '../../../components/breadcrumbs'
import { ViewProducts } from '../../../components/viewProduct'
import { Like } from '../../../components/like'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { type SelectChangeEvent } from '@mui/material/Select'

// interfaces
import { type DescriptionType } from '../../../shared/interfaces/DescriptionType'

// hooks
import { useAppDispatch, useAppSelector } from '../../../hooks/hook'

// mock
import { addToBasket } from '../../../store/reducer/reducer'

// styles
import s from '../../../style/pages/description-card.module.scss'

export const DescriptionCard: React.FC = () => {
  const dispatch = useAppDispatch()
  const card = useAppSelector(state => state.card)
  const [opened, setOpened] = useState<boolean>(false)
  const [size, setSize] = useState<string[] | string>([])
  const [color, setColor] = useState<boolean>(false)
  const [btn, setBtn] = useState<boolean>(true)

  const handleAddToBasket = (
    item: DescriptionType,
    size: string[] | string,
    id: number,
    indexProduct: number,
    prices: number
  ) => {
    if (size.length === 0) {
      setColor(true)
      setBtn(true)
    } else {
      setColor(false)
      setBtn(false)
    }
    // @ts-ignore
    dispatch(addToBasket({ product: item, size, id, indexProduct, prices }))
  }
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) => {
    if (e.target.value.length === 0) {
      setBtn(true)
      setColor(true)
    } else {
      setColor(false)
    }
  }

  const handleChange = (event: SelectChangeEvent<string[] | string>) => {
    const value = event.target.value
    if (value.length === 0) {
      setBtn(true)
      setColor(true)
    } else {
      setBtn(false)
      setBtn(false)
    }
    setSize(value)
  }

  return (
    <>
      {card.length
        ? (
            card.map(
              (
                item: DescriptionType, index: number,
              ) => {
                return (
              <div className={s.catalog_card} key={index}>
                <CustomBreadcrumbs />
                <div className={s.card_item}>
                  <div className={s.card_pictures}>
                    <div className={s.additional_pictures}>
                      <div>
                        <img src={item.image} alt="" />
                      </div>
                      <div>
                        <img src={item.image} alt="" />
                      </div>
                      <div>
                        <img src={item.image} alt="" />
                      </div>
                      <div>
                        <img src={item.image} alt="" />
                      </div>
                      <div>
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                    <div className={s.main_picture}>
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                  <div className={s.card_description}>
                    <div className={s.item_name}>{item.categoryIdName}</div>
                    <div className={s.item_price}>{item.price} ₽</div>
                    <div className={s.item_colorcircle}>
                      <button className={s.white}></button>
                      <button className={s.black}></button>
                    </div>
                    <div className={s.item_colortext}>Цвет: {item.color}</div>
                    <div>
                      <FormControl
                        className={color ? s.back : s.bac}
                        sx={{
                          mt: 2,
                          width: 580,
                        }}
                      >
                        <InputLabel id={s.demo_simple_select_label}>
                          Выберите размер
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={`${size}`}
                          onChange={e => handleChange(e)}
                          onBlur={e => handleBlur(e)}
                          label="Age"
                          sx={{
                            '.MuiOutlinedInput-notchedOutline': {
                              borderColor: '#000 !important',
                              borderWidth: '0.5px !important',
                            },
                            '.MuiFormLabel-root-MuiInputLabel-root': {
                              '& .Mui-focused': {
                                color: '#000 !important',
                              },
                            },
                          }}
                        >
                          {item.sizes.map(name => (
                            <MenuItem key={name.id} value={name.size}>
                              {name.size}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <div className={s.item_buttons}>
                      <button
                        onClick={() =>
                          handleAddToBasket(item, size, item.id, index, item.price)
                        }
                        disabled={btn}
                        className={btn ? s.disabled : s.add_to_cart}
                      >
                        В КОРЗИНУ
                      </button>
                      <button className={s.to_favorites}>В ИЗБРАННОЕ</button>
                    </div>
                    <div className={s.details}>Подробности</div>
                    <div className={s.description}>
                      <div>Обмеры и описание</div>
                      <svg
                        className={s.icon}
                        onClick={() => setOpened(true)}
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 3.88903L8.88906 -2.8597e-05L10 1.11091L5 6.11091L1.32478e-08 1.11091L1.11094 -2.85042e-05L5 3.88903Z"
                          fill="#ac2b16"
                        />
                      </svg>
                    </div>
                    {opened
                      ? (
                      <div>
                        <hr></hr>
                        <div className={s.compound}>
                          <div>Состав и уход</div>
                          <svg
                            className={s.icon}
                            onClick={() => setOpened(false)}
                            width="10"
                            height="7"
                            viewBox="0 0 10 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 2.22184L1.11094 6.1109L1.32478e-08 4.99997L5 -3.0458e-05L10 4.99997L8.88906 6.1109L5 2.22184Z"
                              fill="#ac2b16"
                            />
                          </svg>
                        </div>

                        <div className={s.composition_and_care}>
                          <div>Состав: 80% Хлопок, 20% Полиэстер</div>
                          <div>Нанесение: прямая печать</div>
                          <div>Бережная машинная и ручная стирка 30 С</div>
                          <hr></hr>
                        </div>
                      </div>
                        )
                      : null}
                  </div>
                </div>
                <ViewProducts />
                <Like />
              </div>
                )
              },
            )
          )
        : (
        <div>Ошибка! Нету данных!</div>
          )}
    </>
  )
}
