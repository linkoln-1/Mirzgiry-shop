import React, { useState } from 'react'

// styles
import s from '../../style/pages/order.module.scss'

import { useAppDispatch } from '../../hooks/hook'
import { createHistory } from '../../store/HistorySlice/HistorySlice'
import {CardTypee} from '../../store/BasketSlices/BasketSlice'
import {clearBasket} from '../../store/BasketSlices/BasketSlice'

type setOpenType = React.Dispatch<React.SetStateAction<boolean>>;

interface OrderProps {
    
    basket: CardTypee[]
    totalPrice: number
    setOpen: setOpenType
  }
export const Order: React.FC<OrderProps> = ({totalPrice, basket, setOpen}) => {
  const [selectedRadio1, setSelectedRadio1] = useState('');
  const [selectedRadio2, setSelectedRadio2] = useState('');
  const [name, setName] =useState('')
  const [surName, setSurName] = useState('')
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [postOffice, setPostOffice] = useState('')
  const [isValid, setIsValid] = useState(false);
  const validateInputs = () => {
    if (
      name !== '' &&
      surName !== '' &&
      email !== '' &&
      phone !== '' &&
      city !== '' &&
      postOffice !== '' &&
      selectedRadio1 !== ''
       && selectedRadio2 !== ''
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const dispatch = useAppDispatch()
const handleAddToHistory =()=>{
  validateInputs();

  if (!isValid) {
    setOpen(true);
    dispatch(clearBasket());
    dispatch(
      createHistory({
        totalPrice,
        basket,
        selectedRadio1,
        selectedRadio2,
        name,
        surName,
        email,
        phone,
        city,
        postOffice,
      })
    );
 
  }
 
    
 
}


  const handleRadio1Change = (e: React.ChangeEvent<HTMLInputElement>) => setSelectedRadio1(e.target.value);
  const handleRadio2Change =(e: React.ChangeEvent<HTMLInputElement>) => setSelectedRadio2(e.target.value);
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleChangeSurName = (e: React.ChangeEvent<HTMLInputElement>) => setSurName(e.target.value);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);
  const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value);
  const handleChangePostOffice = (e: React.ChangeEvent<HTMLInputElement>) => setPostOffice(e.target.value);

  return (
        <div className={s.order}>
            <div className={s.order__decor}>Оформление заказа</div>
            <div className={s.order__personal__information}>
                <div className={s.order__wrapper__personal__information}>
                     <p>Персональные данные:</p>
            <div className={s.order__wrapper__input}>
            <input
                type="text"
                placeholder="Ваше имя*"
                value={name}
                onChange={e => handleChangeName(e)}
              />
               <input
                type="text"
                placeholder="Ваша фамилия*"
                value={surName}
                onChange={e => handleChangeSurName(e)}
              />
            </div>
            <div className={s.order__wrapper__input}>
            <input
                type="text"
                placeholder="Ваш e-mail*" 
                value={email}
                onChange={e => handleChangeEmail(e)}
              />
              <input
                type="text"
                placeholder="Ваш телефон*" 
                value={phone}
                onChange={e => handleChangePhone(e)}
              />
            </div>
            <p className={s.order__delivery}>Способ доставки:</p>
        
            <div className={s.order__wrapper}>
      <div className={s.order__wrapper__radio}>
        <p>По России:</p>
        <div>
          <input
            id="a"
            type="radio"
            name="title1"
            value="Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)"
            checked={selectedRadio1 === "Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)"}
            onChange={(e) => handleRadio1Change( e)}
          />
          <label htmlFor="a">Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)</label>
        </div>
        <div>
          <input
            id="b"
            type="radio"
            name="title2"
            value="Новая Почта"
            checked={selectedRadio1 === "Новая Почта"}
            onChange={(e) => handleRadio1Change( e)}
          />
          <label htmlFor="b">Новая Почта</label>
        </div>
      </div>
      <div className={s.order__wrapper__radio}>
        <p>Международная доставка:</p>
        <div>
          <input
            id="c"
            type="radio"
            name="title3"
            value="Украпочта / 1-3 недели / 30$"
            checked={selectedRadio1 === "Украпочта / 1-3 недели / 30$"}
            onChange={(e) => handleRadio1Change( e)}
          />
          <label htmlFor="c">Украпочта / 1-3 недели / 30$</label>
        </div>
        <div>
          <input
            id="d"
            type="radio"
            name="title4"
            value="DHL / 3-7 дней / 60$"
            checked={selectedRadio1 === "DHL / 3-7 дней / 60$"}
            onChange={(e) => handleRadio1Change( e)}
          />
          <label htmlFor="d">DHL / 3-7 дней / 60$</label>
        </div>
      </div>
    </div>

            <p className={s.bonus}>Адрес доставки:</p>
            <div className={s.order__wrapper__input}>
            <input
                type="text"
                placeholder="Город*" 
                value={city}
                onChange={e => handleChangeCity(e)}
              />
                <input
                type="text"
                placeholder="Отделение почты*"
                value={postOffice}
                onChange={e => handleChangePostOffice(e)}
              />
            </div>
            <p className={s.bonus}>Вы можете оплатить покупку одним из ниже перечисленных способов:</p>
            <div className={s.order__wrapper}>
            <div className={s.order__wrapper__radio}>
              
            <div>
            <input
            id="e"
            type="radio"
            name="title5"
            value="Полная предоплата через Приват 24"
            checked={selectedRadio2 === "Полная предоплата через Приват 24"}
            onChange={(e) => handleRadio2Change( e)}
          />
          <label htmlFor="e">Полная предоплата через Приват 24</label>
            </div>
            <div>
            <input
            id="f"
            type="radio"
            name="title6"
            value="Наложенным платежом в отделении Новой Почты"
            checked={selectedRadio2 === "Наложенным платежом в отделении Новой Почты"}
            onChange={(e) => handleRadio2Change( e)}
          />
          <label htmlFor="f">Наложенным платежом в отделении Новой Почты</label>
           
            </div>
            </div>
            <div className={s.order__wrapper__radio}>
            <div>
            <input
            id="g"
            type="radio"
            name="title7"
            value="Денежным переводом  Visa/MasterCard"
            checked={selectedRadio2 === "Денежным переводом  Visa/MasterCard"}
            onChange={(e) => handleRadio2Change( e)}
          />
          <label htmlFor="g">Денежным переводом  Visa/MasterCard</label>
            </div>
            </div>
            </div>
            <p className={s.bonus}>Использование бонусного счёта:</p>
            <input className={s.order__bonus}type="input" name="title" value="Сумма списания бонусов*" />
                </div>
               <div className={s.order__wrapper__decor}>
               <div className={s.order__decor__welcome}>Войти в личный кабинет</div>
               <div className={s.order__decor__conditions}>УСЛОВИЯ ДОСТАВКИ</div>
               <div className={s.order__decor__conditions}>УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</div>
               <div className={s.order__decor__information}>ИНФОРМАЦИЯ ОБ ОПЛАТЕ</div>
               <div className={s.order__decor}>
              <div className={s.order__decor__delivery}>
                <div>ДОСТАВКА:</div><div className={s.order__bold}>По тарифам перевозчика</div>
              </div>
              <div className={s.order__decor__bonus}>
              <div>БОНУСЫ:</div><div className={s.order__bold}>-69 грн</div>
              </div>
              <div className={s.order__decor__total}>
              <div>ИТОГО:</div><div className={s.order__bold}>{totalPrice} ₽</div>
              </div>
               <button onClick={handleAddToHistory} disabled={isValid} className={!isValid ? s.disabled: s.button}>ОФОРМИТЬ ЗАКАЗ</button>
               <div className={s.order__consent}>Нажимая на кнопку «оплатить заказ», я принимаю условия публичной оферты и политики конфиденциальности</div>
               </div>
               </div>
            </div>
 </div>
  )
}
