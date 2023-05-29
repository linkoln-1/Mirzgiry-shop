// library
import React, { useState, useEffect } from 'react'
import { path } from '../../shared/constants/path'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
// components
import { CustomBreadcrumbs } from '../../components/breadcrumbs'
import { Order } from '../order'

// hooks
import { useAppSelector, useAppDispatch } from '../../hooks/hook'

// styles
import s from '../../style/pages/basket.module.scss'

import {
  fetchBasket,
  deleteToBasket,
} from '../../store/BasketSlices/BasketSlice'

export interface BasketProps {
  
  _id: string
  user: string
  sizes: string
  productId: Array<{
    id: string
    categoryId: string
    priceId: string
    colorId: string
    categoryIdName: string
    name: string
    price: number
    color: string
    sizes: Array<{
      _id: string
      size: string
      inStock: number
      count: number
    }>
    

    _id: string
    image: string
  }>
}
const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(2),
      top: theme.spacing(2),
      color: '#ac2b16',
      width: '24px', 
      height: '24px'
    },
  });
export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);



export const Basket: React.FC<BasketProps> = () => {
  const Basket = useAppSelector(state => state.BasketSlice.products)
 const [open, setOpen] = useState(false)
  const Basketmessage = useAppSelector(state => state.BasketSlice.message)
 const find =  Basket.map((item)=>item)
 const [snackbarOpen, setSnackbarOpen] = React.useState(false);


  const products = useAppSelector(state => state.BasketSlice.products)

  const totalPrice = products.reduce((acc, product) => {
    return (
      acc +
      product.productId.reduce((acc, item) => {
        return acc + item.price
      }, 0)
    )
  }, 0)
<<<<<<< HEAD
  const [circleColor] = useState('Белый')
=======


  // const payment = useAppSelector(state => state.payment)
  const [circleColor] = useState('Белый')

  // const handlePlus = (basketId: string, index: number, category: string, sizeId: string, indexSize: number, change: string,inStock: number, count: number) => {
  //   if (count > 0 && count < inStock) {
  //      dispatch(BasketPlus({ basketId: basketId, indexProduct: index, categoryId: category, sizeId: sizeId, indexSize: indexSize, change: change,inStock: inStock, count: count}))
  //   }
  //   }

  // const handleMinus = (basketId: string, index: number, category: string, sizeId: string, indexSize: number, change: string,  count: number, ) => {
  //   if (count > 1) {
  //   // @ts-ignore
  //   dispatch(BasketMinus({ basketId: basketId, indexProduct: index, categoryId: category, sizeId: sizeId, indexSize: indexSize, change: change, count: count }))
  //   }
  // }
  const handleClose = () => {
    setOpen(false);
  };
>>>>>>> 8dc56bfcb1d09289b519c9b64879c4059a4e1ca2
  const dispatch = useAppDispatch()

  const handleDelete = (id: string, index: number, price: number) => {
    handleSnackbarOpen();
    void dispatch(
      // @ts-ignore
      deleteToBasket({ id, indexProduct: index, price }),
    )
  }
  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
    setTimeout(() => {
      setSnackbarOpen(false);
    }, 1000); 
  }; 

  useEffect(() => {
    void dispatch(fetchBasket())
  }, [dispatch])

  return (
    <div className={s.basket}>
      <CustomBreadcrumbs />
      <div className={s.basket_title}>Ваш заказ</div>

      {/* eslint-disable-next-line multiline-ternary */}
      {Basket.length ? (
        Basket?.map((product, indexProduct) => {
          return (
            <div key={indexProduct}>
              {product.productId?.map((item, index) => {
                return (
                  <>
                    <div key={index} className={s.basket_wrapper}>
                      <div className={s.basket_image_description}>
                        <div className={s.basket_image}>
                          <img src={`${path}/${item.image}`} alt="" />
                        </div>
                        <div className={s.basket_description}>
                          <div className={s.basket_artikul}>арт. 1589956</div>
                          <div className={s.basket_nameCategory}>
                            {item.categoryIdName}:
                          </div>
                          <div className={s.basket_name}>{item.name}</div>
                        </div>
                      </div>
                      <div className={s.item_colorcircle}>
                        <button
                          className={
                            item.color === circleColor ? s.white : s.black
                          }
                        ></button>
                      </div>
                      <div className={s.basket_quantity}>
                        <div className={s.count}>{`${product.sizes}`}</div>
                      </div>
                      <div className={s.basket_price_delete}>
                        <div className={s.basket_price}>{item.price} ₽</div>

<<<<<<< HEAD
                        <svg
                          onClick={() =>
                            handleDelete(product._id, indexProduct, item.price)
                          }
                          className={s.basket_delete}
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.75 5H25V7.5H22.5V23.75C22.5 24.0815 22.3683 24.3995 22.1339 24.6339C21.8995 24.8683 21.5815 25 21.25 25H3.75C3.41848 25 3.10054 24.8683 2.86612 24.6339C2.6317 24.3995 2.5 24.0815 2.5 23.75V7.5H0V5H6.25V1.25C6.25 0.918479 6.3817 0.600537 6.61612 0.366116C6.85054 0.131696 7.16848 0 7.5 0H17.5C17.8315 0 18.1495 0.131696 18.3839 0.366116C18.6183 0.600537 18.75 0.918479 18.75 1.25V5ZM20 7.5H5V22.5H20V7.5ZM8.75 11.25H11.25V18.75H8.75V11.25ZM13.75 11.25H16.25V18.75H13.75V11.25ZM8.75 2.5V5H16.25V2.5H8.75Z" />
                        </svg>
                      </div>
                    </div>
                    <hr></hr>
                  </>
                )
              })}
            </div>
          )
        })
      ) : (
        <div className={s.basket__empty}>
          <p className={s.basket__text__bold}>В корзине пока пусто</p>
          <p className={s.basket__text}>
            Загляните в каталог, чтобы выбрать товары или найдите нужное в
            поиске
          </p>
        </div>
      )}
      {Basket.length ? (
        <div className={s.basket_payment}>
          <div>К оплате:</div>
          <div className={s.basket_payment_sum}>{totalPrice} ₽</div>
        </div>
      ) : null}
      {Basket.length ? <Order totalPrice={totalPrice} /> : null}
    </div>
  )
}
=======
                    <svg
                      onClick={() => handleDelete(product._id, indexProduct, item.price)}
                      className={s.basket_delete}
                      viewBox='0 0 25 25'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18.75 5H25V7.5H22.5V23.75C22.5 24.0815 22.3683 24.3995 22.1339 24.6339C21.8995 24.8683 21.5815 25 21.25 25H3.75C3.41848 25 3.10054 24.8683 2.86612 24.6339C2.6317 24.3995 2.5 24.0815 2.5 23.75V7.5H0V5H6.25V1.25C6.25 0.918479 6.3817 0.600537 6.61612 0.366116C6.85054 0.131696 7.16848 0 7.5 0H17.5C17.8315 0 18.1495 0.131696 18.3839 0.366116C18.6183 0.600537 18.75 0.918479 18.75 1.25V5ZM20 7.5H5V22.5H20V7.5ZM8.75 11.25H11.25V18.75H8.75V11.25ZM13.75 11.25H16.25V18.75H13.75V11.25ZM8.75 2.5V5H16.25V2.5H8.75Z' />
                    </svg>
                  </div>
                </div><hr></hr></>
              )
            })}
          </div>
        )
      }) : <div className={s.basket__empty}><p className={s.basket__text__bold}>В корзине пока пусто</p><p className={s.basket__text}>Загляните в каталог, чтобы выбрать товары или найдите нужное в поиске</p></div>}
      {Basket.length ? <div className={s.basket_payment}><div>К оплате:</div><div className={s.basket_payment_sum}>{totalPrice} ₽</div></div> : null}
    {Basket.length ? <Order totalPrice={totalPrice} basket={find} setOpen={setOpen}/> : null}
    {open?<div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         {Basketmessage} 
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
        Ваш заказ успешно подтвержден
          <p>  Информация о заказе и номер заказа появится в разделе "История заказов".</p>
          </Typography>
        </DialogContent>
      </Dialog>
      </div>:null}
      <Snackbar
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  open={snackbarOpen}
  // onClose={handleSnackbarClose}
  message={Basketmessage}
/>
    </div>
  )
}

>>>>>>> 8dc56bfcb1d09289b519c9b64879c4059a4e1ca2
