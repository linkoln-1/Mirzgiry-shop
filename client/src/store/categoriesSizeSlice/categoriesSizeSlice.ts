import { type AnyAction, createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CategoriesProps {
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
  categoriesSize: CategoriesProps[]
  error: string | null
}

export const fetchCategoriesSize = createAsyncThunk<CategoriesProps[], undefined, { rejectValue: string }>(
  'categoriesSizeSlice/fetch-categories-size-slice/pending',
  async function (_, { rejectWithValue }) {
    const response = await fetch('/categoriesSize')
    if (!response.ok) {
      return rejectWithValue('server is not okey')
    }
    return await response.json()
  }
)

const initialState: initialStateProps = {
  loading: true,
  categoriesSize: [],
  error: null,
}
const categoriesSizeSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesSize.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCategoriesSize.fulfilled, (state, action) => {
        state.categoriesSize = action.payload
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
export default categoriesSizeSlice.reducer
