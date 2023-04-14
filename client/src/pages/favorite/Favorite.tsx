// library
import * as React from 'react'

// components
import { CustomBreadcrumbs } from '../../components/breadcrumbs'

// hooks
import { useAppDispatch, useAppSelector } from '../../hooks/hook'

// mock
// import { deleteFavorite } from '../../store/slice/slice'

// styles
import s from '../../style/pages/componentStyle/view-product.module.scss'
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'

export const Favorites: React.FC = () => {
  const Favorites = useAppSelector(state => state.cardSlice.favorites)
  const loading = useAppSelector(state => state.cardSlice.loading)
  // const dispatch = useAppDispatch()
  // const handleDelete = (id: number) => {
  //   dispatch(
  //     deleteFavorite({ id })
  //   )
  // }
  return (
    <div className={s.card}>
      <CustomBreadcrumbs />
      <div className={s.card_title}>Избранное</div>
      <div className={s.card_items}>
        {!loading
          ? Favorites.map((item, index: number) => (
            item.checkHeart
              ? (
                    <div className={s.todo} key={index}>
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        className={s.favorite}
                        // onClick={() => handleDelete(item.id)}
                      />
                      <div className={s.todo_image}>
                        <img src={item.image} alt="" />
                      </div>
                      <div className={s.todo_title}>{item.name}</div>
                      <div className={s.todo_price}>{item.price}</div>
                      <div className={s.todo_size}>
                        {item.sizes.map((el, index) => (
                          <div key={index}>
                            {el.size}
                          </div>
                        ))}
                      </div>
                      <div className={s.todo_colorcircle}>
                        <div className={s.white}></div>
                        <div className={s.black}></div>
                      </div>
                    </div>
                )
              : null
          ))
          : <div>Please Wait</div>
            }
      </div>
    </div>
  )
}
