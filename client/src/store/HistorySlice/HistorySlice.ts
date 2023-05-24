import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// import { API_URL } from '../../shared/constants/path'
import { CardTypee } from '../BasketSlices/BasketSlice'
export interface CardType {
  phone: string
  email: string
  selectedRadio1: string
  selectedRadio2: string
  surName: string
  name: string

  totalPrice: number
  _id: string
  user: string
  date: string
  count: number
 basket: Array<{
    productId:Array<{
        color: string
        _id: string
        categoryId: string
        priceId: string
        colorId: string
        categoryIdName: string
        name: string
        image: string
        price: number
        colors: string
        sizes: Array<{
          _id: string
          size: string
          inStock: number
          count: number
        }>


    }>
    sizes: string
    user: string
    _id: string

    }>
    
  
  
}
export interface initialStateProps {

  loading: boolean
  error: null | string | unknown
  history: CardType[]
  

}
interface loginData {
 totalPrice: number
 basket: CardTypee[]
 selectedRadio1: string
 selectedRadio2: string
 name: string
 surName: string
 email: string
 phone: string
 city: string
 postOffice: string
}
export const createHistory = createAsyncThunk(
  'historyadd',
  async (loginData: loginData, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch('/historyadd', {
        method: 'POST',
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
      console.log(response)
      return data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

export const fetchHistories = createAsyncThunk(
  'gethistories',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch('/histories', {
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


const initialState: initialStateProps = {
  loading: false,

  error: '',
  history: [],
 

}
const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createHistory.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createHistory.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.error = null
        state.history.unshift(action.payload)
      })
      .addCase(createHistory.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      
      .addCase(fetchHistories.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchHistories.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.error = null
     
       state.history = action.payload
        // state.products.filter((item)=>{

        //   item.productId.filter((item)=>{

        //    return state.payment+=item.price
        //   })
        // })
      })
      .addCase(fetchHistories.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
     
  }
})
export default BasketSlice.reducer
