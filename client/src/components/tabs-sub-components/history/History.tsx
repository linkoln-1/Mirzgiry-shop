// library
import React, { useState, useEffect } from 'react'

// hooks
import { useAppSelector,  useAppDispatch } from '../../../hooks/hook'
import { path } from '../../../shared/constants/path'
import { fetchHistories } from '../../../store/HistorySlice/HistorySlice'
// styles
import s from '../../../style/smallComponents/history.module.scss'
export interface HistoryProps {

  totalPrice: number
  _id: string
  user: string
  date: string
  count: number
 basket: Array<{
    productId:Array<{
        color: string
        _id: string
        categoryId: string
        priceId: string
        colorId: string
        categoryIdName: string
        name: string
        image: string
        price: number
        colors: string
        sizes: Array<{
          _id: string
          size: string
          inStock: number
          count: number
        }>


    }>
    sizes: string
    user: string
    _id: string

    }>
    
  
  
}
export const History: React.FC<HistoryProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(fetchHistories())
   
  }, [])

  const [openedStates, setOpenedStates] = useState<boolean[]>([]);
  // const [circleColor] = useState('Белый')
  // const History = useAppSelector(state => state.BasketSlice.history)
  const History = useAppSelector(state => state.historySlice.history)
  console.log(History);
  const [circleColor] = useState('Белый')
  const handleOpen = (index: number) => {
    setOpenedStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };
      

   const handleClose = (index: number) => {
    setOpenedStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  return (
    <div className={s.history}>
      {History.length?History?.map((history, historyIndex)=>{
        const opened = openedStates[historyIndex] || false;
        return(
          <>
          <div key={historyIndex}  className={s.history__wrapper}>
            <div className={s.history__order__number}>
              № {history.count} от {history.date.split('T')[0].split('-').reverse().join('.')}
              </div> 
             <div className={s.history__status}>
             <div>Статус:</div>
             <div className={s.status__completed}>Выполнен</div>
             </div>
             <div className={s.history__order__price}>
             <div>Сумма заказа:</div>
             <div className={s.order__price}>{history.totalPrice} ₽</div>
             </div>
             <div>
             <svg
            onClick={() => handleOpen(historyIndex)}
            className={opened ? s.history__icon__open : s.history__icon}
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="#ac2b16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z"
              fill="#ac2b16"
            />
          </svg>
          <svg
            onClick={() => handleClose(historyIndex)}
            className={!opened ? s.history__icon__close : s.history__icon}
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="#ac2b16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z"
              fill="#ac2b16"
            />
          </svg>
             </div>
          </div>
          <div>
            {opened&&history.basket?.map((product, indexProduct)=>{
              
              return(
                <div key={indexProduct}>
{product.productId?.map((item, index)=>{
  return(
    <div key={index} className={s.history_wrapper}>
              <div className={s.history_image_description}>
                 <div className={s.history_image}>
                    <img src={`${path}/${item.image}`} alt="" />
                  </div>
                  <div className={s.history_description}>
                    <div className={s.history_artikul}>
                      арт. 1589956
                    </div>
                    <div className={s.history_nameCategory}>
                      {item.categoryIdName}:
                    </div>
                    <div className={s.history_name}>{item.name}</div>
                  </div>
              </div>
              <div className={s.item_colorcircle}>
                  <button
                      className={
                       item.color === circleColor ? s.white : s.black
                      }
                  >
                    {}
                  </button>
                </div>
                <div className={s.history_quantity}>
                  <div>Размер:</div>
                  <div className={s.count}>{product.sizes}</div>
                </div>
                <div className={s.history_price}>{item.price} ₽</div>
  
               </div>        
                   )

                  })}
                   
                </div>
              
              )
            })}
          </div>
           <div className={!opened ? s.history__close :s.history__information}>
            <div><p>Имя Фамилия:</p><p>Спсосб доставки:</p></div>
            <div><p>E-mail:</p></div>
            <div><p>Номер телефона:</p><p>Спсосб оплаты:</p></div>
          </div>
          <hr className={ s.history__hr}></hr>
      
</>
        )
      }):<div className={s.history__text}>У вас нет истории заказов</div>}
  
        
        
    </div>
  )
}

     
    



      
 

