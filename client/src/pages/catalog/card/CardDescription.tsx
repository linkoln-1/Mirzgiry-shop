// library
import React, { type FC } from 'react'
import { useCallback, useState } from 'react'
// components
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FavoriteBorderIcon from '@mui/icons-material/Favorite'
import { createFavorite } from '../../../store/favoriteSlice/favoriteSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
import Snackbar from '@material-ui/core/Snackbar'
// styles
import s from '../../../style/pages/description-card.module.scss'

interface DescriptionCardProps {
  checkHeart: boolean
  id: string
  categoryId: string
  priceId: string
  colorId: string
  categoryIdName: string
  name: string
  price: number
  color: string
  sizes: Array<{ size: string }>
  _id: string
  
}

interface CardDescriptionProps {
  item: DescriptionCardProps
  handleChange: (event: SelectChangeEvent<string>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void
  handleAddToBasket: (size: string[] | string, _id: string, price: number) => void
  color: boolean
  size: string[] | string
  index: number
  btn: boolean
  opened: boolean
  setOpened: (a: boolean) => void
  handleProduct: (a: string)=> any


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
  setOpened,
  handleProduct,
  
 
}) => {
  const [changeCheckHeart, setChangeCheckHeart] = useState(item.checkHeart)
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)
  const Favoritemessage = useAppSelector(state => state.FavoriteSlice.message)
 
  console.log(Favoritemessage)
  const dispatch = useAppDispatch()
  const handleFavorite = useCallback((
    productId: string,
    checkHeart: boolean
  ) => {
    setChangeCheckHeart(!changeCheckHeart)
    // handleSnackbarOpen()
    void dispatch(createFavorite({ productId, checkHeart }))
  }, [dispatch, changeCheckHeart])

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true)
    setTimeout(() => {
      setSnackbarOpen(false)
    }, 1000)
  }

  const cardcopy = useAppSelector(state => state.descriptionCardSlice.descriptionCardCopi)
  return (
    <div className={s.card_description}>
      <div className={s.card_description}>
        <div className={s.item_nameid}>{item.categoryIdName}</div>
        <div className={s.item_name}>{item.name}</div>
        <div className={s.item_price}>{item.price} ₽</div>
        <div className={s.item_colorcircle}>
          <button 
         disabled={!cardcopy[0]?.find((item: { color: string }) => item.color === 'Белый')}
         onClick={() => handleProduct('Белый')}
         className={s.white}
          ></button>
          <button 
         disabled={!cardcopy[0]?.find((item: { color: string }) => item.color === 'Чёрный')}
         onClick={() => handleProduct('Чёрный')}
         className={s.black}
          ></button>
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
              {item.sizes?.map((name, index) => (

                <MenuItem key={index} value={name.size}>

                  {name.size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={s.item_buttons}>
          <button
            onClick={() => handleAddToBasket(size, item._id, item.price)}
            disabled={btn}
            className={btn ? s.disabled : s.add_to_cart}
          >
            В КОРЗИНУ
          </button>
          <button className={s.to_favorites}>
             <div className={s.to_favorites_button}
              onClick={() => {
              handleFavorite(item._id, changeCheckHeart)
              handleSnackbarOpen()
       }}
       >
        {changeCheckHeart ? (<FavoriteBorderIcon className={s.favorit_icon} sx={{ color: changeCheckHeart ? '#ac2b16' : '#fff',width: '17px',
    height: '17px', }} />):
    (<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_243_860)">
<path d="M8.50061 3.14671C10.2623 1.56499 12.9848 1.61749 14.682 3.31771C16.3785 5.01868 16.437 7.72763 14.859 9.49459L8.49911 15.8635L2.14073 9.49459C0.562763 7.72763 0.622012 5.01418 2.31773 3.31771C4.01645 1.61974 6.73365 1.56274 8.50061 3.14671ZM13.62 4.37744C12.495 3.25096 10.6801 3.20521 9.50259 4.26269L8.50136 5.16118L7.49938 4.26344C6.31816 3.20446 4.50694 3.25096 3.37896 4.37894C2.26148 5.49642 2.20523 7.28514 3.23496 8.46711L8.49986 13.7403L13.7648 8.46786C14.7952 7.28514 14.739 5.49867 13.62 4.37744Z" fill="#ac2b16"/>
</g>
<defs>
<clipPath id="clip0_243_860">
<rect width="17" height="17" fill="white"/>
</clipPath>
</defs>
</svg>)}
{changeCheckHeart?  <div>В ИЗБРАННЫХ</div>: <div>В ИЗБРАННОЕ</div>}
   </div>
   </button>
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
              <hr className={s.card_hr}></hr>
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
                <hr className={s.card_hr}></hr>
              </div>
            </div>
            )
          : null}
      </div>
      <Snackbar
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  open={snackbarOpen}
  // onClose={handleSnackbarClose}
  message={Favoritemessage}
/>
    </div>
  )
}
