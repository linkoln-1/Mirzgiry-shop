import { type AnyAction, createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CardType } from '../../shared/interfaces/CardProps'

export interface initialStateProps {
  loading: boolean
  favorites: CardType[]
  error: string | null
}

export const fetchCards = createAsyncThunk<CardType[], undefined, { rejectValue: string }>(
  'cardsReducer/fetch-cards/pending',
  async function (_, { rejectWithValue }) {
    const response = await fetch(`/favorites${id}`)
    if (!response.ok) {
      return rejectWithValue('server is not okey')
    }
    return await response.json()
  }
)

const initialState: initialStateProps = {
  loading: true,
  favorites: [],
  error: null,
}
const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.favorites.push(action.payload)
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
export default cardSlice.reducer
