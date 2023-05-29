import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface ICardProps {
  id: string | number
  _id: string
  categoryId: string
  priceId: string
  colorId: string
  checkHeart: boolean
  sizes: Array<{ size: string, inStock: boolean }>
  image: string
  name: string
  price: number
  index: number
}

export interface initialStateProps {
  loading: boolean
  cards: ICardProps[]
  likedProducts: ICardProps[]
  favorites: ICardProps[]
  error: string | null | undefined
}

export const fetchCards = createAsyncThunk<ICardProps[], undefined, { rejectValue: string }>(
  'cardsReducer/fetch-cards/pending',
  async function (_, { rejectWithValue }) {
    const response = await fetch('/products')
    if (!response.ok) {
      return rejectWithValue('server is not okey')
    }
    console.log(response)
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
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }

})

export default cardSlice.reducer
