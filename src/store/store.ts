import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from './reducer/reducer'

export const store = configureStore({
  reducer: todosReducer,
})
