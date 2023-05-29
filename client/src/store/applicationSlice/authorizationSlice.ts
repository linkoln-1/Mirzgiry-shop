import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit'

export interface initialStateProps {
  loading: boolean
  user: {
    login: string
    password: string
    _id: string
  } | null
  error: string | null | unknown
  token: string | null
}

interface loginData {
  login: string
  password: string
}

export const auth = createAsyncThunk(
  'user/avtorization',
  async (loginData: loginData, { rejectWithValue }) => {
    // выполнение запроса и получение данных
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      })
      const data = await response.json()
      if (response.status !== 200) {
        return rejectWithValue(data)
      }
      console.log(data.accesToken)
      localStorage.setItem('token', data.accesToken)
      return data
    } catch (e) {
      rejectWithValue(e)
    }
  }
)

export const logOut = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    // выполнение запроса и получение данных
    try {
      const response = await fetch('/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       
      })
      const data = await response.json()
      if (response.status !== 200) {
        return rejectWithValue(data)
      }
      console.log(data.accesToken)
      localStorage.removeItem('token')
      return data
    } catch (e) {
      rejectWithValue(e)
    }
  }
)
export const checkAuth = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue }) => {
    // выполнение запроса и получение данных
    try {
      const response = await fetch(`${process.env.API_URL}/refresh`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
       
      })
      const data = await response.json()
      if (response.status !== 200) {
        return rejectWithValue(data)
      }
      console.log(data.accesToken)
      localStorage.setItem('token', data.accesToken)
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
  token: localStorage.getItem('token')

}
const applicationSlice = createSlice({
  name: 'reg',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
      })
      .addCase(auth.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload.token
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.message
      })
  }
})
export default applicationSlice.reducer
