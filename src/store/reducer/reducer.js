// library
import { createReducer, createAction } from '@reduxjs/toolkit'

// constant
import { InitialState } from './initialState'

const initialState = InitialState

export const add = createAction('card')

export const todosReducer = createReducer(initialState, builder => {
  builder.addCase(add, (state, action) => {
    state.card = [action.payload.card]

    if (!state.viewProducts.some(item => item.id === action.payload.id)) {
      state.viewProducts.unshift(action.payload.card)
    }
    if (state.viewProducts.length > 8) {
      state.viewProducts.pop()
    }

    if (state.likedProducts.length < 4) {
      for (let i = 0; i < 4; i++) {
        const getRandomNumber = () => {
          const number =
            state.products[Math.floor(Math.random() * state.products.length)]
          if (state.likedProducts.includes(number)) return getRandomNumber()
          else {
            state.likedProducts.push(number)
            return number
          }
        }
        getRandomNumber()
      }
    } else {
      return state.likedProducts.action
    }
  })
})
