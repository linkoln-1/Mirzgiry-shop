// library
import React, { type FC } from 'react'

// components
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// styles
import s from '../../../style/pages/description-card.module.scss'

interface DescriptionCardProps {
  id: string
  categoryId: string
  priceId: string
  colorId: string
  categoryIdName: string
  name: string
  price: number
  colors: string
  sizes: Array<{ size: string }>
  _id: string
}

interface CardDescriptionProps {
  item: DescriptionCardProps
  handleChange: (event: SelectChangeEvent<string>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void
  handleAddToBasket: (size: string | string[], _id: string) => void
  color: boolean
  size: string | string[]
  index: number
  btn: boolean
  opened: boolean
  setOpened: (a: boolean) => void
}

export const CardDescription: FC<CardDescriptionProps> = ({
  item,
  handleChange,
  handleBlur,
  handleAddToBasket,
  color,
  size,
  // index,
  btn,
  opened,
  setOpened
}) => {
  return (
    <div className={s.card_description}>
      <div className={s.card_description}>
        <div className={s.item_nameid}>{item.categoryIdName}</div>
        <div className={s.item_name}>{item.name}</div>
        <div className={s.item_price}>{item.price} ₽</div>
        <div className={s.item_colorcircle}>
          <button className={s.white}></button>
          <button className={s.black}></button>
        </div>
        <div className={s.item_colortext}>Цвет: {item.colors}</div>
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
              {item.sizes.map((name, index) => (

                <MenuItem key={index} value={name.size}>

                  {name.size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={s.item_buttons}>
          <button
            onClick={() => handleAddToBasket(size, item._id)}
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
  )
}
