import { type AnyAction, createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '../store'

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
interface loginData {
  id: string
  checkHeart: boolean

}
export const changeProduct = createAsyncThunk(
  'productchange',
  async (loginData: loginData, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch(`/product/${loginData.id}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${state.authorizationSlice.token}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({ loginData }),
      })
      const data = await response.json()
      if (response.status !== 200) {
        return rejectWithValue(data)
      }
      console.log(data)
      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const createFavorite = createAsyncThunk(
  'favorites',
  async function (id: string, { getState, rejectWithValue }) {
    const state = getState() as RootState

    const response = await fetch('/favorite', {
      method: 'POST',
      body: JSON.stringify(id),

      headers: {
        Authorization: `Bearer ${state.authorizationSlice.token}`,
        'Content-type': 'application/json',
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
      .addCase(changeProduct.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(changeProduct.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.error = null

        state.cards.find((item) => {
          if (item._id === action.payload) {
            return item.checkHeart = !item.checkHeart
          }
        })
      })
      .addCase(changeProduct.rejected, (state, action) => {
        state.loading = false
      // state.error = action.payload
      })
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
      // .addCase(createFavorite.pending, (state) => {
      //   state.loading = true
      // })
      // .addCase(createFavorite.fulfilled, (state, action: PayloadAction<{ id: CardType['id'] }>) => {
      //   state.cards.find(el => {
      //     if (el.id === action.payload.id) {
      //       el.checkHeart = !el.checkHeart
      //     }
      //   })
      // })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }

})

export default cardSlice.reducer
