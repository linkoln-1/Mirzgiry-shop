import { type AnyAction, createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'

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
  categoriesLoading: boolean
  categoriesProduct: Array<{
    _id: string
    name: string
  }>
  error: string | null
}

export const fetchCategories = createAsyncThunk<CardType[], undefined, { rejectValue: string }>(
  'categoriesSlice/fetch-product-categories/pending',
  async function (_, { rejectWithValue }) {
    const response = await fetch('/categoriesProduct')
    if (!response.ok) {
      return rejectWithValue('server is not okey')
    }
    return await response.json()
  }
)

const initialState: initialStateProps = {
  categoriesLoading: true,
  categoriesProduct: [],
  error: null,
}
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesLoading = true
        state.error = null
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesProduct = action.payload
        state.categoriesLoading = false
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload
        state.categoriesLoading = false
      })
  }

})
function isError (action: AnyAction) {
  return action.type.endsWith('rejected')
}
export default categoriesSlice.reducer
