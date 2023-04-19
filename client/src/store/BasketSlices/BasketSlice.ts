import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// import { API_URL } from '../../shared/constants/path'

interface CardType {
  id: string
  categoryId: string
  priceId: string
  colorId: string
  categoryIdName: string
  name: string
  price: number
  colors: string
  sizes: Array<{ size: string }>
  _id: string
}
export interface initialStateProps {
  products: CardType[]
  loading: boolean
  error: null | string | unknown

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

const initialState: initialStateProps = {
  loading: false,
  products: [],
  error: ''

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
        console.log(action.payload)
        state.loading = false
        state.error = null
        state.products.push(action.payload)
      })
      .addCase(createBasket.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})
export default BasketSlice.reducer
