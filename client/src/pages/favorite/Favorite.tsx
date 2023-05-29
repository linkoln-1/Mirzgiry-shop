// library
import React, { useCallback, useEffect } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/Favorite'
// components
import { changeProduct } from '../../store/cardSlice/cardSlice'
import Snackbar from '@material-ui/core/Snackbar'
// hooks
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { path } from '../../shared/constants/path'
// mock
import {
  fetchFavorite,
  deleteToFavorite,
} from '../../store/favoriteSlice/favoriteSlice'

// styles
import s from '../../style/pages/componentStyle/view-product.module.scss'

interface FavoriteProps {
  _id: string
  user: string

  productId: Array<{
    _id: string
    categoryId: string
    priceId: string
    colorId: string
    categoryIdName: string
    name: string
    price: number
    color: string
    checkHeart: boolean
    sizes: Array<{
      _id: string
      size: string
      inStock: number
      count: number
    }>
    image: string
  }>
}

export const Favorites: React.FC<FavoriteProps> = () => {
  const Favorites = useAppSelector(state => state.FavoriteSlice.favorites)
  const message = useAppSelector(state => state.FavoriteSlice.message)
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)
  const dispatch = useAppDispatch()

  const handleClickFavorite = useCallback(
    (id: string, checkHeart: boolean) => {
      void dispatch(changeProduct({ id, checkHeart }))
      handleSnackbarOpen()
    },
    [dispatch],
  )
  const handleDelete = (id: string) => {
    void dispatch(deleteToFavorite(id))
  }
  useEffect(() => {
    void dispatch(fetchFavorite())
  }, [dispatch])
  const handleSnackbarOpen = () => {
    setSnackbarOpen(true)
    setTimeout(() => {
      setSnackbarOpen(false)
    }, 1000)
  }
  return (
    <div className={s.card}>
      <div className={s.card_title}>Избранное</div>
      <div className={s.card_items}>
        {Favorites.length ? (
          Favorites?.map((product, index) => {
            return product?.productId?.map(item => {
              return (
                <div className={s.todo} key={index}>
                  <div onClick={() => handleDelete(product._id)}>
                    <svg
                      className={s.favorit}
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0H40V40H20C8.95431 40 0 31.0457 0 20V0Z"
                        fill="black"
                      />
                    </svg>
                    <FavoriteBorderIcon
                      className={s.favorit_icon}
                      sx={{ color: !item.checkHeart ? '#fff' : '#ac2b16' }}
                      onClick={() => {
                        handleClickFavorite(item._id, item.checkHeart)
                        handleSnackbarOpen()
                      }}
                    />
                  </div>
                  <div className={s.todo_image}>
                    <img src={`${path}/${item.image}`} alt="" />
                  </div>
                  <div className={s.todo_title}>{item.name}</div>
                  <div className={s.todo_price}>{item.price} ₽</div>
                  <div className={s.todo__sizes}>
                    {item?.sizes?.map((item, index) => {
                      return (
                        <div className={s.todo__size} key={index}>
                          {item.size}
                        </div>
                      )
                    })}
                  </div>
                  <div className={s.todo_colorcircle}>
                    <div className={s.white}></div>
                    <div className={s.black}></div>
                  </div>
                </div>
              )
            })
          })
        ) : (
          <div className={s.favorite__empty}>
            <p className={s.favorite__text__bold}>В избранных нет товаров</p>
            <p className={s.favorite__text}>
              Загляните в каталог, чтобы выбрать товары или найдите нужное в
              поиске
            </p>
          </div>
        )}
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarOpen}
        message={message}
      />
    </div>
  )
}
