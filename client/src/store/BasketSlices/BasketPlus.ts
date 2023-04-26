// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../store'
// // import { API_URL } from '../../shared/constants/path'

// interface CardType {
//   _id: string
//   user: string
//   sizes: string
//  productId: Array<{
//    color: string
//   id: string
//  categoryId: string
//  priceId: string
//  colorId: string
//  categoryIdName: string
//  name: string
//  price: number
//  colors: string
//  sizes: Array<{
//   _id: string
//   size: string 
//   inStock: number
//   count: number
// }>
//  _id: string
//  image: string}>
// }
// export interface initialStateProps {
//   count: CardType[]
//   loading: boolean
//   error: null | string | unknown

// }
// interface loginData {
//     basketId: string
//     indexProduct: number
//     categoryId: string 
//     sizeId: string
//     indexSize: number
    
// }
// export const Plus = createAsyncThunk(
//   'basketchange',
//   async (loginData: loginData, { getState, rejectWithValue }) => {  
//     console.log(loginData.basketId)
//     const state = getState() as RootState
//     // выполнение запроса и получение данных
//     try {
//       const response = await fetch(`/basket/${loginData.basketId}`, {
      
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${state.authorizationSlice.token}`,
//           'content-type': 'application/json'
//         },
//         body: JSON.stringify({ loginData }),
//       })
//       const data = await response.json()
//       if (response.status !== 200) {
//         return rejectWithValue(data.message)
//       }
//       console.log(data)
//       return data
//     } catch (e) {
//       return rejectWithValue(e)
//     }
//   }
// )


// const initialState: initialStateProps = {
//   loading: false,
//   count: [],
//   error: ''

// }
// const BasketSlice = createSlice({
//   name: 'basket',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(Plus.pending, (state) => {
//         state.loading = true
//         state.error = null
       
//       })
//       .addCase(Plus.fulfilled, (state, action) => {
// console.log(action.payload)
//         state.loading = false
//         state.error = null
//         // state.products = action.payload;
//        state.count=action.payload
//       })
//       .addCase(Plus.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })
      
     
//   }
// })
// export default BasketSlice.reducer
