// library
import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

// components
import { Layout } from '../components/common/layout/Layout'
import { New } from '../pages/newProducts/New'
import { Catalog } from '../pages/catalog'
import { HomePage } from '../components/common/homepage/HomePage'
import { DescriptionCard } from '../pages/catalog/card'
import { Basket } from '../pages/basket'
import { About } from '../pages/About'
import { Exchange } from '../pages/exchange-and-refund'
import { Delivery } from '../pages/delivery'
import { Favorites } from '../pages/favorite'

export const RoutesPath: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='/new' element={<New />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/about' element={<About />} />
      <Route path='/exchange' element={<Exchange />} />
      <Route path='/catalog/card' element={<DescriptionCard />} />
      <Route path='/delivery' element={<Delivery />} />
      <Route path='/basket' element={<Basket />} />
      <Route path='/favorite' element={<Favorites />} />
      </Route>
    </Routes>
  )
}
