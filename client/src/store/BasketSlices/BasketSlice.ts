import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface CardTypee {

  _id: string
  user: string
  sizes: string
  productId: Array<{
    color: string
    _id: string
    categoryId: string
    priceId: string
    colorId: string
    categoryIdName: string
    name: string
    price: number
    colors: string
    sizes: Array<{
      _id: string
      size: string
      inStock: number
      count: number
    }>
    image: string }>
}
export interface initialStateProps {
  products: CardTypee[]
  loading: boolean
  error: null | string | unknown
  message: null | string

}
interface loginData {
  productId: string
  sizes: string[] | string

}
export const createBasket = createAsyncThunk(
  'basketadd',
  async (loginData: loginData, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch('/basketadd', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${state.authorizationSlice.token}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({ loginData }),
      })
      const data = await response.json()
      if (response.status !== 200) {
        return rejectWithValue(data.message)
      }
      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const fetchBasket = createAsyncThunk(
  'baskets',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch('/baskets', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${state.authorizationSlice.token}`,
          'Content-type': 'application/json',
        },

      })
      const data = await response.json()
      if (response.status !== 200) {
        return rejectWithValue(data)
      }
      console.log(data)
      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)
interface loginDataDelete {
  id: string
  indexProduct: number
  price: number
}
export const deleteToBasket = createAsyncThunk(
  'basketdelete',

  async (loginDataDelete: loginDataDelete, { getState, rejectWithValue }) => {
    console.log(loginDataDelete)
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch(`/basket/${loginDataDelete.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${state.authorizationSlice.token}`,
          'Content-type': 'application/json',
        },
      })
      const data = await response.json()
      if (response.status !== 200) {
        return rejectWithValue(data)
      }
      console.log(data)
      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)
export const clearBasket = createAsyncThunk(
  'basketclear',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch('/basketclear', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${state.authorizationSlice.token}`,
          'Content-type': 'application/json',
        },
      })
      const data = await response.json()
      if (response.status !== 200) {
        return rejectWithValue(data)
      }
      console.log(data)
      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)
interface loginDataCount {
  basketId: string
  indexProduct: number
  categoryId: string
  sizeId: string
  indexSize: number
  change: string
  inStock: number
  count: number

}
export const BasketPlus = createAsyncThunk(
  'basketplus',
  async (loginDataCount: loginDataCount, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch(`/basket/${loginDataCount.basketId}`, {

        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${state.authorizationSlice.token}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({ loginDataCount }),
      })
      const data = await response.json()
      if (response.status !== 200) {
        return rejectWithValue(data.message)
      }
      console.log(data)

      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const BasketMinus = createAsyncThunk(
  'basketminus',
  async (loginDataCount: loginDataCount, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch(`/basket/${loginDataCount.basketId}`, {

        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${state.authorizationSlice.token}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({ loginDataCount }),
      })
      const data = await response.json()
      if (response.status !== 200) {
        return rejectWithValue(data.message)
      }
      console.log(data)
      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

const initialState: initialStateProps = {
  loading: false,
  products: [],
  message: '',
  error: '',

}
const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBasket.pending, (state) => {
        state.loading = true
        state.error = null
        state.message = null
      })
      .addCase(createBasket.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.error = null
        state.message = action.payload.message
        state.products.push(action.payload.basket)
      })
      .addCase(createBasket.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(deleteToBasket.pending, (state) => {
        state.loading = true
        state.error = null
        state.message = null
      })
      .addCase(deleteToBasket.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.message = action.payload.message
        state.products = state.products.filter((item) => {
          if (item._id === action.payload.id) {
            return false
          } else {
            return true
          }
        })
      })
      .addCase(deleteToBasket.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(clearBasket.pending, (state) => {
        state.loading = true
        state.error = null
        state.message = null
      })
      .addCase(clearBasket.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.message = action.payload
        state.products = []
      })
      .addCase(clearBasket.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(fetchBasket.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchBasket.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.error = null
        state.products = action.payload
      })
      .addCase(fetchBasket.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(BasketPlus.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(BasketPlus.fulfilled, (state, action) => {
        console.log(action.payload.loginDataCount)
        state.loading = false
        state.error = null
        state.products.map((product) => {
          if (product._id === action.payload.loginDataCount.basketId) {
            return state.products[action.payload.loginDataCount.indexProduct].productId[0].sizes[action.payload.loginDataCount.indexSize].count += 1
          }
        })
      })

      .addCase(BasketPlus.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(BasketMinus.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(BasketMinus.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.products.map((product) => {
          if (product._id === action.payload.loginDataCount.basketId) {
            return state.products[action.payload.loginDataCount.indexProduct].productId[0].sizes[action.payload.loginDataCount.indexSize].count -= 1
          }
        })
      })
      .addCase(BasketMinus.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})
export default BasketSlice.reducer
