import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


interface DescriptionProps {
  [x: string]: any
 

 
  checkHeart: boolean
  image: any
  id: string
  categoryId: string
  priceId: string
  colorId: string
  categoryIdName: string
  name: string
  price: number
  color: string
  sizes: Array<{ size: string }>
  _id: string
}

export interface initialStateProps {
  loading: boolean
  descriptionCard: DescriptionProps[]
  descriptionCardCopi: DescriptionProps[]
  viewProducts: DescriptionProps[]
  error: string | null | unknown
}
export const fetchDescriptionCard = createAsyncThunk(
  'getProductById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`/products/${id}`, {
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
      return {data, id}
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

// export interface loginData {
//   name: string
// }

export const getProductByName = createAsyncThunk(
  'getProductByName',
  async (name:string, { rejectWithValue }) => {
  
    // выполнение запроса и получение данных
    try {
      const encodedName = encodeURIComponent(name);
      // const encodedColor = encodeURIComponent(loginData.color);

      const response = await fetch(`/product/${encodedName}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
        // body: JSON.stringify({ loginData }),
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
  loading: true,
  descriptionCard: [],
  descriptionCardCopi: [],
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
      .addCase(fetchDescriptionCard.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(getProductByName.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getProductByName.fulfilled, (state, action) => {
      
        state.descriptionCardCopi.splice(0, 1, action.payload)
        state.loading = false
      })
      .addCase(getProductByName.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }

})

export default cardSlice.reducer
