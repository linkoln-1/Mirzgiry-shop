// library
import React, { useEffect } from 'react'

// components
import { Information } from './subComponents/Information'
import { Categories } from '../../categories'
import { Forms } from './subComponents/Forms'

// styles
import '../../../style/globals.scss'
import { fetchCards } from '../../../store/cardSlice/cardSlice'
import { useAppDispatch } from '../../../hooks/hook'

export const HomePage: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted')
  }
  const dispatch = useAppDispatch()
useEffect(()=>{
dispatch(fetchCards())
}, [])
  return (
    <div className='homepage'>
      <Information />
      <Categories />
      <Forms
        formTitle="Узнайте первым о новинках"
        inputPlaceholder="Ваш e-mail*"
        privacyText="Нажимая на кнопку «Подписаться»,
        я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности."
        onSubmit={handleSubmit}
      />
    </div>
  )
}
