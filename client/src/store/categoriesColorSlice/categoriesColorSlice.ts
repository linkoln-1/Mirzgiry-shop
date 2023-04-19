import { type AnyAction, createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ColorsProps {
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
  categoriesColor: ColorsProps[]
  error: string | null
}

export const fetchCategoriesColor = createAsyncThunk<ColorsProps[], undefined, { rejectValue: string }>(
  'categoriesColorSlice/fetch-categories-color-slice/pending',
  async function (_, { rejectWithValue }) {
    const response = await fetch('/categoriesColor')
    if (!response.ok) {
      return rejectWithValue('server is not okey')
    }
    return await response.json()
  }
)

const initialState: initialStateProps = {
  loading: true,
  categoriesColor: [],
  error: null,
}
const categoriesColorSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesColor.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCategoriesColor.fulfilled, (state, action) => {
        state.categoriesColor = action.payload
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
export default categoriesColorSlice.reducer
