// library
import React, { useState, useCallback } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
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
import { createBasket } from '../../../store/BasketSlices/BasketSlice'
// styles
import s from '../../../style/pages/description-card.module.scss'
export const DescriptionCard: React.FC = () => {
  const dispatch = useAppDispatch()
  const card = useAppSelector(state => state.descriptionCardSlice.descriptionCard)
  const loading = useAppSelector(state => state.descriptionCardSlice.loading)
  const Basketmessage = useAppSelector(state => state.BasketSlice.message)
  const [opened, setOpened] = useState<boolean>(false)
  const [size, setSize] = useState<string[] | string>([])
  const [color, setColor] = useState<boolean>(false)
  const [btn, setBtn] = useState<boolean>(true)
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)
  const handleAddToBasket = useCallback((
    // _item: DescriptionCardProps[],
    size: string[] | string,
    _id: string
  ) => {
    handleSnackbarOpen()
    if (size.length === 0) {
      setColor(true)
      setBtn(true)
    } else {
      setColor(false)
      setBtn(false)
    }
    void dispatch(createBasket({ productId: _id, sizes: size }))
  },
  [dispatch]
  )
  const handleSnackbarOpen = () => {
    setSnackbarOpen(true)
    setTimeout(() => {
      setSnackbarOpen(false)
    }, 1000)
  }
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
            <Snackbar
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  open={snackbarOpen}
  // onClose={handleSnackbarClose}
  message={Basketmessage}
/>
    </>
  )
}
