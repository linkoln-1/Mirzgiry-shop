// library
import React, { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/hook'
// styles
import s from '../../../style/smallComponents/personaldata.module.scss'
import { changePersonalData, fetchPersonalData } from '../../../store/personalDataSlice/PersonalDataSlice'
export const PersonalData: React.FC = () => {
  const personalData = useAppSelector(state => state.personalDataSlice.personal)
  console.log(personalData)

  const [name, setName] = useState('')
  const [surName, setSurName] = useState('')
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [homeNumber, setHomeNumber] = useState('')
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    
    setName(personalData.map(item => item.name).join(''));
    setSurName(personalData.map(item => item.surName).join(''));
    setEmail(personalData.map(item => item.email).join(''));
    setPhone(personalData.map(item => item.phone).join(''));
    setStreet(personalData.map(item => item.street).join(''));
    setHomeNumber(personalData.map(item => item.homeNumber).join(''));
  }, [personalData]);


  useEffect(() => {
    if (name.length === 0 || surName.length === 0 || email.length === 0 || phone.length === 0 || street.length === 0 || homeNumber.length === 0) {
      setIsValid(false)
   
    } else {
      setIsValid(true)
    }
  }, [name, surName, email, phone, street, homeNumber])

  const dispatch = useAppDispatch()

  useEffect(() => {
    void dispatch(fetchPersonalData())
  }, [dispatch])

  const handleChangePersonalData = () => {
  
    dispatch(changePersonalData({ name, surName, email, phone, street, homeNumber }));
    setName('')
    setSurName('');
    setEmail('');
    setPhone('');
    setStreet('');
    setHomeNumber('');
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {


setName(e.target.value)
     
 
  }

  const handleChangeSurName = (e: React.ChangeEvent<HTMLInputElement>) => {

    setSurName(e.target.value)

 
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  
      setEmail(e.target.value)

  
  }

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
   
      setPhone(e.target.value)

 
  }

  const handleChangeStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
  
      setStreet(e.target.value)

  }

  const handleChangeHome = (e: React.ChangeEvent<HTMLInputElement>) => {
 
      setHomeNumber(e.target.value)

  }

  return (
    <div className={s.personaldata}>
      <div className={s.person__title}>Персональные данные:</div>
   
        <div>
          <div className={s.personal__wrapper__input}>
            <div>
              <input
                className={s.input}
                name="name"
                type="text"
                placeholder="Ваше имя*"
                value={name}
                onChange={handleChangeName}
              />
            </div>
            <div>
              <input
                className={s.input}
                name="surname"
                type="text"
                placeholder="Ваша фамилия*"
                value={surName}
                onChange={handleChangeSurName}
              />
            </div>
            <div>
              <input
                className={s.input}
                name="email"
                type="text"
                placeholder="Ваш e-mail*"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div>
              <input
                className={s.input}
                name="phone"
                type="text"
                placeholder="Ваш телефон*"
                value={phone}
                onChange={handleChangePhone}
              />
            </div>
          </div>
          <div className={s.person__adress}>Адрес доставки:</div>
          <div className={s.personal__wrapper__adress}>
            <div>
              <input
                className={s.input__adress}
                name="street"
                type="text"
                placeholder="Улица*"
                value={street}
                onChange={handleChangeStreet}
              />
            </div>
            <div>
              <input
            
                className={s.input__adress}
                name="home"
                type="text"
                placeholder="дом №"
                value={homeNumber}
                onChange={handleChangeHome}
              />
             
            </div>
          </div>
          <button
            onClick={handleChangePersonalData}
            disabled={!isValid}
            className={!isValid ? s.disabled : s.button}
          >
            ОБНОВИТЬ ИНФОРМАЦИЮ
          </button>
        </div>
    
    </div>
  );
};

