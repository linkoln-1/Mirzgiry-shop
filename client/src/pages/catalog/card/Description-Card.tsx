// library
import React, { useState, useCallback , useEffect} from 'react'

// components
import { CustomBreadcrumbs } from '../../../components/breadcrumbs'
import { ViewProducts } from '../../../components/viewProduct'
import { Like } from '../../../components/like'
import { type SelectChangeEvent } from '@mui/material/Select'
import { CardDescription } from './CardDescription'
import { CardPictures } from './CardPictures'

// hooks
import { useAppDispatch, useAppSelector } from '../../../hooks/hook'

// mock
// import { addToBasket } from '../../../store/slice/slice'

// styles
import s from '../../../style/pages/description-card.module.scss'
import { createBasket} from '../../../store/BasketSlices/BasketSlice'
// import { fetchBasket} from '../../../store/BasketSlices/BasketGetSlice'



// interface DescriptionCardProps {
//   id: string
//   categoryId: string
//   priceId: string
//   colorId: string
//   categoryIdName: string
//   name: string
//   price: number
//   colors: string
//   sizes: Array<{ size: string }>
//   _id: string
// }

export const DescriptionCard: React.FC = () => {
  const dispatch = useAppDispatch()
  const card = useAppSelector(state => state.descriptionCardSlice.descriptionCard)
  const loading = useAppSelector(state => state.descriptionCardSlice.loading)

  const [opened, setOpened] = useState<boolean>(false)
  const [size, setSize] = useState<string[] | string>([])
  const [color, setColor] = useState<boolean>(false)
  const [btn, setBtn] = useState<boolean>(true)

 
  const handleAddToBasket = useCallback((
    // _item: DescriptionCardProps[],
    size: string,
    _id: string
  ) => {
    if (size.length === 0) {
      setColor(true)
      setBtn(true)
    } else {
      setColor(false)
      setBtn(false)
    }
    void dispatch(createBasket({ productId: _id, sizes: size }))
   
   
    // void  dispatch(fetchBasket())

    
  },
  [dispatch]
  )

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
      if (e.target.value.length === 0) {
        setBtn(true)
        setColor(true)
      } else {
        setColor(false)
      }
    },
    []
  )

  const handleChange = useCallback((event: SelectChangeEvent<string[] | string>) => {
    const value = event.target.value
    if (value.length === 0) {
      setBtn(true)
      setColor(true)
    } else {
      setBtn(false)
      setBtn(false)
    }
    setSize(value)
  }, [])

  return (
    <>
      {loading
        ? (
        <div>Please Wait</div>
          )
        : (
            card.map((card, index: number) => {
              return (
            <div className={s.catalog_card} key={index}>
              <CustomBreadcrumbs />
              <div className={s.card_item}>
                <CardPictures card={card} />
                <CardDescription
                  item={card}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  handleAddToBasket={handleAddToBasket}
                  color={color}
                  size={size}
                  index={index}
                  btn={btn}
                  opened={opened}
                  setOpened={setOpened}
                  />
              </div>
              <ViewProducts />
              <Like />
            </div>
              )
            })
          )}
    </>
  )
}
