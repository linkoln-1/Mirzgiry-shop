import { type AnyAction, createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface PricesType {
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
  loading: boolean
  categoriesPrice: PricesType[]
  error: string | null
}

export const fetchCategoriesPrice = createAsyncThunk<PricesType[], undefined, { rejectValue: string }>(
  'categoriesPricelice/fetch-categories-price-slice/pending',
  async function (_, { rejectWithValue }) {
    const response = await fetch('/categoriesPrice')
    if (!response.ok) {
      return rejectWithValue('server is not okey')
    }
    return await response.json()
  }
)

const initialState: initialStateProps = {
  loading: true,
  categoriesPrice: [],
  error: null,
}
const categoriesPriceSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesPrice.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCategoriesPrice.fulfilled, (state, action) => {
        state.categoriesPrice = action.payload
        state.loading = false
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload
        state.loading = false
      })
  }

})
function isError (action: AnyAction) {
  return action.type.endsWith('rejected')
}
export default categoriesPriceSlice.reducer
