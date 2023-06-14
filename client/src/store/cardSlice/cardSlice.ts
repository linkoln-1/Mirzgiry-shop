import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface ICardProps {
  id: string | number
  _id: string
  categoryId: string
  categoryIdName: string
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
  images: ICardProps[]
  likedProducts: ICardProps[]
  favorites: ICardProps[]
  error: string | null | undefined | unknown
}
export const fetchCardsbyPage = createAsyncThunk(
  'getProductByName',
  async (page:number, { rejectWithValue }) => {
    try {
      const response = await fetch(`/productspage/${page}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
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

export const fetchCards = createAsyncThunk<ICardProps[], undefined, { rejectValue: string }>(
  'cardsReducer/fetch-cards/pending',
  async function (_, { rejectWithValue }) {
    const response = await fetch(`/products`)
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
  images:[],
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
        state.cards = []
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

    if (state.images.length <= 1) {
  // state.images.splice(0, 4);
  for (let i = 0; i < 1; i++) {
    const getRandom: any = () => {
      const hudiCards = state.cards.filter(item => item.categoryIdName === 'Худи');
const randomHudi = hudiCards[Math.floor(Math.random() * hudiCards.length)];
const shirtCards = state.cards.filter(item => item.categoryIdName === 'Футболка');
const randomShirt = shirtCards[Math.floor(Math.random() * shirtCards.length)];

const HudiRospisCards = state.cards.filter(item => item.categoryIdName === 'Худи с росписью');
const randomHudiRospis = HudiRospisCards[Math.floor(Math.random() * HudiRospisCards.length)];
  
const ShirtPospisCards = state.cards.filter(item => item.categoryIdName === 'Футболка с росписью');
const randomShirtPospis = ShirtPospisCards[Math.floor(Math.random() * ShirtPospisCards.length)];
    state.images.push(randomHudi, randomShirt, randomHudiRospis, randomShirtPospis)
   

    }
     getRandom()
  }

}
        state.loading = false
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(fetchCardsbyPage.pending, (state) => {
        state.loading = true
        state.error = null
        state.cards = []
      })
      .addCase(fetchCardsbyPage.fulfilled, (state, action) => {
        state.cards = action.payload  
        state.loading = false
      })
      .addCase(fetchCardsbyPage.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }

})

export default cardSlice.reducer
