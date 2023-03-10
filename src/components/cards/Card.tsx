// library
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'

// styles
import s from '../../style/pages/componentStyle/catalog-card.module.scss'

// mock
// import { add } from '../../store/reducer/reducer'
import { addCard, Favorite } from '../../store/slice/slice'

export interface ICardProps {
  todo: {
    id: number
    categoryId: number
    name: string
    categoryIdName: string
    price: number
    priceId: number
    color: string
    colorId: number
    image: string
    sizes: [{
      id: number
      size: string
      inStock: number
      count: number
    }]
  }
  index?: number
}

export const Card: React.FC<ICardProps> = ({ todo }) => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.products)
  const handleClick = (id: number) => {
    dispatch(
      // @ts-ignore
      addCard(products.find(item => item.id === id), id))
  }
  const makeFavorite = (id: number) => {
    dispatch(
      // @ts-ignore
      Favorite({ favorites: products.find(item => item.id === id), id }))
  }
  /*   const [checked, setChecked] = useState<boolean>(false)
  const handleChange = (event: SelectChangeEvent<boolean | boolean[]>) => {
    const Value = event.target.value
    // @ts-ignore
    setChecked(!Value)
    dispatch(
      // @ts-ignore
      // eslint-disable-next-line no-dupe-keys
      check({ checked: products.find(item => item.checked === checked) })
    )
  } */

  return (
    <div key={todo.id} className={s.card}>
      <div className={s.card__image}>
        <Link onClick={() => handleClick(todo.id)} to="/catalog/card">
          <img src={todo.image} alt="" />
        </Link>
      </div>
      <div className={s.card__title}>{todo.name}</div>
      <div className={s.card__price}>{todo.price} ₽</div>
      <div className={s.card__sizes}>
         {todo.sizes.map((item) => {
           return <div className={s.card__size}>{item.size}</div>
         })}
      </div>
      <div className={s.card__colorCircle}>
        <div className={s.white}></div>
        <div className={s.black}></div>
      </div>
      <svg
        className={s.favorites}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H40V40H20C8.95431 40 0 31.0457 0 20V0Z" fill="#ac2b16" />
      </svg>
      <svg
        onClick={() => makeFavorite(todo.id)}
/*         checked= {checked} onChange={(event) => handleChange(event)} */
        className={s.heart}
        width="15"
        height="13.86"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.501 2.16119C15.4372 -0.475012 19.9746 -0.387513 22.8033 2.44618C25.6308 5.28113 25.7283 9.79605 23.0983 12.741L12.4985 23.3558L1.90122 12.741C-0.728729 9.79605 -0.62998 5.27363 2.19622 2.44618C5.02741 -0.383763 9.55608 -0.478762 12.501 2.16119ZM21.0334 4.2124C19.1584 2.33494 16.1335 2.25869 14.171 4.02115L12.5023 5.51863L10.8323 4.0224C8.86359 2.25744 5.8449 2.33494 3.96493 4.2149C2.10247 6.07737 2.00872 9.05856 3.72494 11.0285L12.4998 19.8171L21.2746 11.0298C22.9921 9.05856 22.8983 6.08112 21.0334 4.2124Z"
          fill="white"
        />
      </svg>
    </div>
  )
}
