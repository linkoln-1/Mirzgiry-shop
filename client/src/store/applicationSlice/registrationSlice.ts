import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit'

export interface initialStateProps {
  loading: boolean
  user: {
    login: string
    password: string
    _id: string
  } | null
  error: string | null 


 
}

interface loginData {
  login: string
  password: string
}

export const createUser = createAsyncThunk(
  'user/registration',
  async (loginData: loginData, { rejectWithValue }) => {
    // выполнение запроса и получение данных
    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      })
      const data = await response.json()
      if (response.status !== 200) {
        return rejectWithValue(data)
      }
      return data
  
    } catch (e) {
      rejectWithValue(e)
    }
  }
)

const initialState: initialStateProps = {
  loading: false,
  user: {
    login: '',
    password: '',
    _id: ''
  },
  error: '',

 
  
}
const applicationSlice = createSlice({
  name: 'reg',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true
        state.error = ""
       
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false
   
      })
      .addMatcher(isRejectedWithValue, (state, action) => {
       
        state.loading = true
        state.error = action.payload.message

     
    
       
      })
  }
})
export default applicationSlice.reducer
