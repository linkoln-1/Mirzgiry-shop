import React, { useEffect, useState } from 'react'

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
  const [selectedRadio1Dirty, setSelectedRadio1Dirty] = useState(false)
  const [selectedRadio2, setSelectedRadio2] = useState('');
  const [selectedRadio2Dirty, setSelectRadio2Dirty] = useState(false)
  const [name, setName] =useState('')
  const [nameDirty, setNameDirty] = useState(false)
  const [surName, setSurName] = useState('')
  const [surNameDirty, setSurNameDirty]= useState(false)
  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false)
  const [phone, setPhone] = useState('')
  const [phoneDirty, setPhoneDirty]= useState(false)
  const [city, setCity] = useState('')
  const [cityDirty, setCityDirty] = useState(false)
  const [postOffice, setPostOffice] = useState('')
  const [postOfficeDirty, setPostOfficeDirty] = useState(false)
  const [isValid, setIsValid] = useState(false);
const blurHandler = (e: { target: { name: string } })=>{
  switch(e.target.name){
    case 'name':
     setNameDirty(true) 
      break
    case 'surname':
      setSurNameDirty(true)
       break
    case 'email':
      setEmailDirty(true)
      break
      case 'phone':
        setPhoneDirty(true)
        break
        case 'city':
          setCityDirty(true)
          break
          case 'postOffice':
          setPostOfficeDirty(true)
          break
          case 'title1':
            setSelectedRadio1Dirty(true)
            break
          case 'title2':
            setSelectRadio2Dirty(true)
            break
  }
}

useEffect(()=>{
if(name.length==0 || surName.length===0 || email.length===0 || phone.length===0|| selectedRadio1.length===0||selectedRadio2.length===0||city.length===0 ||postOffice.length===0){
setIsValid(false)
}else{
  setIsValid(true)
}
}, [name,surName, email,phone, selectedRadio1, selectedRadio2, city, postOffice])
  
  const dispatch = useAppDispatch()

const handleAddToHistory =()=>{
if(isValid){
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


  const handleRadio1Change = (e: React.ChangeEvent<HTMLInputElement>) =>{
     setSelectedRadio1(e.target.value);
  
   
  } 
  const handleRadio2Change =(e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio2(e.target.value);
 
  }
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

  }
  const handleChangeSurName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurName(e.target.value);
  
  }
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value);
  
  } 
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setPhone(e.target.value);
   
  } 
  const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setCity(e.target.value);
 
   
  } 
  const handleChangePostOffice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostOffice(e.target.value);
    
  }

  return (
        <div className={s.order}>
            <div className={s.order__decor}>Оформление заказа</div>
            <div className={s.order__personal__information}>
                <div className={s.order__wrapper__personal__information}>
                     <p>Персональные данные:</p>
            <div className={s.order__wrapper__input}>
            <input
            onBlur={e => blurHandler(e)}
               className= {name.length===0 && nameDirty ? s.input_shadow :s.input}
               name='name'
                type="text"
                placeholder="Ваше имя*"
                value={name}
                onChange={e => handleChangeName(e)}
              />
               <input
                onBlur={e => blurHandler(e)}
               name='surname'
                className=  {surName.length===0&&surNameDirty ? s.input_shadow :s.input}
                type="text"
                placeholder="Ваша фамилия*"
                value={surName}
                onChange={e => handleChangeSurName(e)}
              />
            </div>
            <div className={s.order__wrapper__input}>
            <input
             onBlur={e => blurHandler(e)}
            name='email'
                    className= {email.length===0&&emailDirty ? s.input_shadow :s.input}
                type="text"
                placeholder="Ваш e-mail*" 
                value={email}
                onChange={e => handleChangeEmail(e)}
              />
              <input
               onBlur={e => blurHandler(e)}
              name='phone'
                      className =  {phone.length===0 && phoneDirty ? s.input_shadow :s.input}
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
          className=  {selectedRadio1.length===0 && selectedRadio1Dirty ? s.radio_shadow :s.input_radio}
         
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
                  className=  {selectedRadio1.length===0 && selectedRadio1Dirty ? s.radio_shadow :s.input_radio}
            id="b"
            type="radio"
            name="title1"
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
                  className=  {selectedRadio1.length===0 && selectedRadio1Dirty ? s.radio_shadow :s.input_radio}
            id="c"
            type="radio"
            name="title1"
            value="Украпочта / 1-3 недели / 30$"
            checked={selectedRadio1 === "Украпочта / 1-3 недели / 30$"}
            onChange={(e) => handleRadio1Change( e)}
          />
          <label htmlFor="c">Украпочта / 1-3 недели / 30$</label>
        </div>
        <div>
          <input
                  className=  {selectedRadio1.length===0 && selectedRadio1Dirty ? s.radio_shadow :s.input_radio}
            id="d"
            type="radio"
            name="title1"
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
             onBlur={e => blurHandler(e)}
            name='city'
                    className=  {city.length===0&&cityDirty ? s.input_shadow :s.input}
                type="text"
                placeholder="Город*" 
                value={city}
                onChange={e => handleChangeCity(e)}
              />
                <input
                 onBlur={e => blurHandler(e)}
                name='postOffice'
                        className=  {postOffice.length===0&&postOfficeDirty ? s.input_shadow :s.input}
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
                    className= {selectedRadio2.length===0 && selectedRadio2Dirty ? s.radio_shadow :s.input_radio}
            id="e"
            type="radio"
            name="title2"
            value="Полная предоплата через Приват 24"
            checked={selectedRadio2 === "Полная предоплата через Приват 24"}
            onChange={(e) => handleRadio2Change( e)}
          />
          <label htmlFor="e">Полная предоплата через Приват 24</label>
            </div>
            <div>
            <input
                    className=  {selectedRadio2.length===0 && selectedRadio2Dirty ? s.radio_shadow :s.input_radio}
            id="f"
            type="radio"
            name="title2"
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
            className=   {selectedRadio2.length===0 && selectedRadio2Dirty ? s.radio_shadow :s.input_radio}
            id="g"
            type="radio"
            name="title2"
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
              <button onClick={handleAddToHistory} disabled={!isValid} className={!isValid ?s.disabled : s.button }>ОФОРМИТЬ ЗАКАЗ</button>
               <div className={s.order__consent}>Нажимая на кнопку «оплатить заказ», я принимаю условия публичной оферты и политики конфиденциальности</div>
               </div>
               </div>
            </div>
 </div>
  )
}
