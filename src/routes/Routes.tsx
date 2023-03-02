// library
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// components
import { Layout } from '../components/common/layout/Layout'

export const RoutesPath: React.FC = () => {
  return (
    <Routes>
      <Route index path='/' element={<Layout />} />
      {/* <Route path='/new' element={<New />} /> */}
      {/* <Route path='/catalog' element={<Catalog />} /> */}
      {/* <Route path='/about' element={<About />} /> */}
      {/* <Route path='/return' element={<Exchange />} /> */}
      {/* <Route path='/catalog/card' element={<Card />} /> */}
      {/* <Route path='/delivery' element={<Delivery />} /> */}
    </Routes>
  )
}
