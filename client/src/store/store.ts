import cardSlice from './cardSlice/cardSlice'
import categoriesProductSlice from './categoriesProductSlice/categoriesSlice'
import categoriesSizeSlice from './categoriesSizeSlice/categoriesSizeSlice'
import categoriesColorSlice from './categoriesColorSlice/categoriesColorSlice'
import categoriesPriceSlice from './categoriesPriceSlice/categoriesPriceSlice'
import descriptionCardSlice from './descriptionCardSlice/descriptionCardSlice'
import registrationSlice from './applicationSlice/registrationSlice'
import authorizationSlice from './applicationSlice/authorizationSlice'
import BasketSlice from './BasketSlices/BasketSlice'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    cardSlice,
    categoriesProductSlice,
    categoriesSizeSlice,
    categoriesColorSlice,
    categoriesPriceSlice,
    descriptionCardSlice,
    registrationSlice,
    authorizationSlice,
    BasketSlice,

  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
