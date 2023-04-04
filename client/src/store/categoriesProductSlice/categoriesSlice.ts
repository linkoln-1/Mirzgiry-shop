import { type AnyAction, createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CardType } from '../../shared/interfaces/CardProps'

export interface initialStateProps {
  loading: boolean
  categories: CardType['categoriesForSidebar']
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
  loading: true,
  categories: [],
  error: null,
}
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
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
export default categoriesSlice.reducer
