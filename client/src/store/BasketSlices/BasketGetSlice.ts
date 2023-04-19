import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit'
import { type RootState } from '../store'

interface CardType {
  id: number
  _id: string
  categoryId: string
  name: string
  categoryIdName: string
  price: number
  priceId: string
  color: string
  colorId: string
  image: string
  sizes: Array<{
    _id: string
    size: string
    inStock: number
    count: number
  }>
}

export const fetchBasket = createAsyncThunk(
  'baskets',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    console.log(state.authorizationSlice.token)
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
      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export interface StateProps {
  products: CardType[]
  loading: boolean
  items: CardType[]

}

const initialState: StateProps = {
  loading: false,
  items: [],
  products: []

}
const BasketGetSlice = createSlice({
  name: 'BasketGet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBasket.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchBasket.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addMatcher(isRejectedWithValue, (state) => {
        state.loading = false
        state.items = []
      })
  }
})
export default BasketGetSlice.reducer
