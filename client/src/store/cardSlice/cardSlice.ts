import { type AnyAction, createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CardType } from '../../shared/interfaces/CardProps'
import { RootState } from '../store';
export interface initialStateProps {
  loading: boolean
  cards: CardType[]
  likedProducts: CardType[]
  favorites: CardType[]
  error: string | null
}

export const fetchCards = createAsyncThunk<CardType[], undefined, { rejectValue: string }>(
  'cardsReducer/fetch-cards/pending',
  async function (_, { rejectWithValue }) {
    const response = await fetch('/products')
    if (!response.ok) {
      return rejectWithValue('server is not okey')
    }
    return await response.json()
  }
)


export const createFavorite = createAsyncThunk(
  'favorites',
  async function (id: string, { getState, rejectWithValue }) {
   const state = getState()as unknown as RootState;;

    const response = await fetch(`/favorite`, {
      method: "POST",
      body: JSON.stringify(id),

      headers: {
        Authorization: `Bearer ${state.authorizationSlice.token}`,
        "Content-type": "application/json",
      },
    })
    if (!response.ok) {
      return rejectWithValue('server is not okey')
    }
    return await response.json()
  }
)

const initialState: initialStateProps = {
  loading: true,
  cards: [],
  likedProducts: [],
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
        console.log(action.payload)
        state.cards = action.payload
        if (state.likedProducts.length <= 4) {
          state.likedProducts.splice(0, 4)
          for (let i = 0; i < 4; i++) {
            const getRandomNumber: any = () => {
              const number =
                        state.cards[Math.floor(Math.random() * state.cards.length)]
              // @ts-ignore
              if (state.likedProducts.includes(number)) return getRandomNumber()
              else {
                // @ts-ignore
                state.likedProducts.push(number)
                return number
              }
            }
            getRandomNumber()
          }
        }

        state.loading = false
      })
      .addCase(createFavorite.pending, (state) => {
        state.loading = true
      
        
      })
      .addCase(createFavorite.fulfilled, (state, action: PayloadAction<{ id: CardType['id'] }>)=> {
              state.cards.find(el => {
                if (el.id === action.payload.id) {
                  el.checkHeart = !el.checkHeart
                }
              })
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
