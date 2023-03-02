// library
import React, { useState } from 'react'

// components
import { Header } from '../header'
import { Information } from './subComponents/Information'
import { Categories } from '../../categories'
import { Forms } from './subComponents/Forms'

// styles
import '../../../style/globals.scss'
import { Footer } from '../footer'

export const HomePage: React.FC = () => {
  const [colorPlace, setColorPlace] = useState<boolean>(false)
  return (
    <div className='homepage'>
      <Header colorPlace={colorPlace} setColorPlace={a => setColorPlace(a)} />
      <Information />
      <Categories />
      <Forms />
      <Footer setColorPlace={a => setColorPlace(a)} />
    </div>
  )
}
