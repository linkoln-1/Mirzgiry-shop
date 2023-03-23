// library
import React from 'react'

// components
import { Information } from './subComponents/Information'
import { Categories } from '../../categories'
import { Forms } from './subComponents/Forms'

// styles
import '../../../style/globals.scss'

export const HomePage: React.FC = () => {
  return (
    <div className='homepage'>
      <Information />
      <Categories />
      <Forms />
    </div>
  )
}
