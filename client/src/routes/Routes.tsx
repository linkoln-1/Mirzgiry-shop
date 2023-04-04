// library
import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

// components
import { Layout } from '../components/common/layout/Layout'
import { New } from '../pages/newProducts/New'
import { Catalog } from '../pages/catalog'
import { HomePage } from '../components/common/homepage/HomePage'
import { DescriptionCard } from '../pages/catalog/card'
// import { Basket } from '../pages/basket'
import { About } from '../pages/About'
import { Exchange } from '../pages/exchange-and-refund'
import { Delivery } from '../pages/delivery'
// import { Favorites } from '../pages/favorite'
import { Personal } from '../pages/personal'
import { Authorization } from '../components/modal/subComponents/authorization'
import { Registration } from '../components/modal/subComponents/registration/registrationFirstPage'
import { RegistrationSecond } from '../components/modal/subComponents/registration/registrationSecondPage'
import { RegistrationSuccess } from '../components/modal/subComponents/registration/registrationSuccess'
import { Recovery } from '../components/modal/subComponents/recovery/recoveryFirstPage'
import { RecoverySecond } from '../components/modal/subComponents/recovery/recoverySecondPage'
import { RecoverySuccess } from '../components/modal/subComponents/recovery/recoverySuccess'

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
      {/* <Route path='/basket' element={<Basket />} />
      <Route path='/favorite' element={<Favorites />} /> */}
      <Route path='/personal' element={<Personal />} />
      <Route path='/authorization' element={<Authorization />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/registration/second' element={<RegistrationSecond />} />
      <Route path='/registration/success' element={<RegistrationSuccess />} />
      <Route path='/recovery' element={<Recovery />} />
      <Route path='/recovery/second' element={<RecoverySecond />} />
      <Route path='/recovery/success' element={<RecoverySuccess />} />
      </Route>
    </Routes>
  )
}
