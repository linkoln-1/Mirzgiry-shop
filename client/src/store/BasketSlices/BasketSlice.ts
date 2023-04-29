import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// import { API_URL } from '../../shared/constants/path'

interface CardType {
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
  products: CardType[]
  loading: boolean
  error: null | string | unknown

}
interface loginData {
  productId: string
  sizes: string
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
    // console.log(state.authorizationSlice.token)
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
interface loginDataCount {
  basketId: string
  indexProduct: number
  categoryId: string
  sizeId: string
  indexSize: number
  change: string

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
      console.log(data);
      
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

// Загрузить данные из localStorage
const savedProducts = localStorage.getItem('basketState');


// Если данные доступны, преобразовать их из строки JSON в объект
const initialStateProducts = savedProducts ? JSON.parse(savedProducts) : [];

console.log(initialStateProducts);

const initialState: initialStateProps = {
  loading: false,
  products: [],
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
      })
      .addCase(createBasket.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.products.push(action.payload)
      })
      .addCase(createBasket.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(deleteToBasket.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteToBasket.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.products = state.products.filter((item) => {
          if (item._id === action.payload) {
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
      .addCase(fetchBasket.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchBasket.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.products = initialStateProducts === null ? action.payload : initialStateProducts
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
        state.loading = false;
        state.error = null;
        state.products.forEach((product) => {
          if (product._id === action.payload.basketId) {
            state.products[action.payload.indexProduct].productId[0].sizes[action.payload.indexSize].count += 1;
          }
          localStorage.setItem('basketState', JSON.stringify(state.products));
        });
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
          console.log(action.payload)
          if (product._id === action.payload.basketId) {
            state.products[action.payload.indexProduct].productId[0].sizes[action.payload.indexSize].count -= 1
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
