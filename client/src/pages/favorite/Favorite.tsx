// library
import * as React from 'react'
import { useEffect } from 'react'
// components
import { CustomBreadcrumbs } from '../../components/breadcrumbs'

// hooks
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { path } from '../../shared/constants/path'
// mock
import { fetchFavorite, deleteToFavorite } from '../../store/favoriteSlice/favoriteSlice'

// styles
import s from '../../style/pages/componentStyle/view-product.module.scss'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
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
    }>,
    image: string
   
  }>
}
export const Favorites: React.FC<FavoriteProps> = () => {
  const Favorites = useAppSelector(state => state.FavoriteSlice.favorites)
  const loading = useAppSelector(state => state.FavoriteSlice.loading)
  console.log(Favorites)
  const dispatch = useAppDispatch()


  const handleDelete = (id: string) => {
    dispatch(
      deleteToFavorite(id)
    )
  }
  useEffect(() => {
    dispatch(fetchFavorite())
  }, [dispatch])
  return (
    <div className={s.card}>
      <CustomBreadcrumbs />
      <div className={s.card_title}>Избранное</div>
      <div className={s.card_items}>
      {loading
      ?
      <div>Please Wait</div>
      :
      Favorites?.map((product, index)=>{
        return product?.productId?.map((item)=>{

  return(
          <div className={s.todo} key={index}>
            <Checkbox
              icon={<FavoriteBorder  />}
              checkedIcon={<Favorite />}
              className={s.favorite}
             onClick={() => handleDelete(product._id)}
            />
            <div className={s.todo_image}>
            <img src={`${path}/${item.image}`} alt="" />
            </div>
            <div className={s.todo_title}>{item.name}</div>
            <div className={s.todo_price}>{item.price} ₽</div>
            <div className={s.todo__sizes}>
        {item?.sizes?.map((item, index) => {
          return <div className={s.todo__size} key={index}>{item.size}</div>
        })}
      </div>
            <div className={s.todo_colorcircle}>
              <div className={s.white}></div>
              <div className={s.black}></div>
            </div>
          </div>
          )
          
        })
      })}
      
      </div>
    </div>
  )
}
