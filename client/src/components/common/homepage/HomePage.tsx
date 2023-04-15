// library
import React from 'react'

// components
import { Information } from './subComponents/Information'
import { Categories } from '../../categories'
import { Forms } from './subComponents/Forms'

// styles
import '../../../style/globals.scss'

export const HomePage: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted')
  }

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
