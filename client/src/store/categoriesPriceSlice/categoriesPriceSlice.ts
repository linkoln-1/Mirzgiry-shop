import { type AnyAction, createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CardType } from '../../shared/interfaces/CardProps'

export interface initialStateProps {
  loading: boolean
  categoriesPrice: CardType['categoriesForSidebar']
  error: string | null
}

export const fetchCategoriesPrice = createAsyncThunk<CardType[], undefined, { rejectValue: string }>(
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
