import { type AnyAction, createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CardType } from '../../shared/interfaces/CardProps'

export interface initialStateProps {
  loading: boolean
  descriptionCard: CardType[]
  viewProducts: CardType[]
  error: string | null
}

export const fetchDescriptionCard = createAsyncThunk(
  'descriptionCard',
  async (id: string) => {
    const response = await fetch(`/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await response.json()
    return {
      data,
      id
    }
  }
)

const initialState: initialStateProps = {
  loading: true,
  descriptionCard: [],
  viewProducts: [],
  error: null,
}
const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDescriptionCard.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDescriptionCard.fulfilled, (state, action) => {
        state.descriptionCard.splice(0, 1, action.payload.data)
        state.loading = false
        if (!state.viewProducts.some(item => item._id === action.payload.id)) {
          state.viewProducts.unshift(action.payload.data)
        }
        if (state.viewProducts.length > 20) {
          state.viewProducts.pop()
        }
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
