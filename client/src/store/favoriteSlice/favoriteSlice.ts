import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// import { API_URL } from '../../shared/constants/path'

interface CardType {
  _id: string
  user: string

  productId: Array<{
    checkHeart: boolean
    color: string
    _id: string
    categoryId: string
    priceId: string
    colorId: string
    categoryIdName: string
    name: string
    price: number
    colors: string
    sizes: Array<{
      _id: string
      size: string
      inStock: number
      count: number
    }>

    image: string }>
}
export interface initialStateProps {
  favorites: CardType[]
  loading: boolean
  error: null | string | unknown
 

}

export const createFavorite = createAsyncThunk(
  'favoriteadd',
  async (productId: string, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch('/favoriteadd', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${state.authorizationSlice.token}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({ productId }),
      })
      const data = await response.json()
      if (response.status !== 200) {
        return rejectWithValue(data.message)
      }     
      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const fetchFavorite = createAsyncThunk(
  'favoriteget',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch('/favorites', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${state.authorizationSlice.token}`,
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

export const deleteToFavorite = createAsyncThunk(
  'favoritedelete',

  async (id: string, { getState, rejectWithValue }) => {

    const state = getState() as RootState
    // console.log(state.authorizationSlice.token)
    // выполнение запроса и получение данных
    try {
      const response = await fetch(`/favoritedelete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${state.authorizationSlice.token}`,
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


const initialState: initialStateProps = {
  loading: false,
  favorites: [],
  error: '',


}
const FavoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createFavorite.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createFavorite.fulfilled, (state, action) => {
       
        state.loading = false
        state.error = null
        
        state.favorites.push(action.payload)
      // state.favorites.filter((item)=>{
      //   item.productId.filter((item)=>{
      //     if(!item._id===action.payload.productId){
            //  state.favorites.push(action.payload.productId.filter((item: { checkHeart: boolean })=>item.checkHeart=!item.checkHeart)) 
      //     }
      //   })
      // })
        
      })
      .addCase(createFavorite.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(deleteToFavorite.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteToFavorite.fulfilled, (state, action) => {
        
     
        state.loading = false
        state.error = null
        
        state.favorites = state.favorites.filter((item) => {
      console.log(item._id)
      console.log(action.payload)
          if (item._id === action.payload) {
            console.log(true)
            return false
          } else {
            console.log(false)
            return true
          }
        })
     
      })
      .addCase(deleteToFavorite.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(fetchFavorite.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        // action.payload.filter((product: { productId: any[] })=>{
        //   product.productId.filter((item)=>{
        //     item.checkHeart=!item.checkHeart
        //   })
        // })
        state.loading = false
        state.error = null
        state.favorites =  action.payload

      })
      .addCase(fetchFavorite.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      
      })
     
  }
})
export default FavoriteSlice.reducer
