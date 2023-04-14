import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type ReactNode } from 'react'
import axios from 'axios'
import { API_URL } from '../../shared/constants/path'

export interface User {
  login: string
  password: string
  _id: string
}

export interface initialStateProps {
  loading: boolean
  user: User | null
  error: string | null | object | unknown
  success: boolean
}

export interface ErrorResponse {
  error: string | null | object | unknown | ReactNode
}
export interface LoginData {
  login: string
  password: string
}
export const registerUser = createAsyncThunk<User, LoginData, { rejectValue: ErrorResponse }>(
  'registration/registerUser',
  async (loginData: LoginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/users`, loginData)
      return response.data
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue({ error: error.response.data.message })
      } else {
        return rejectWithValue({ error: 'Network Error' })
      }
    }
  }
)

const initialState: initialStateProps = {
  loading: false,
  user: null,
  error: null,
  success: false
}

const applicationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.user = action.payload
        state.success = true
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        if (action.payload) {
          state.error = action.payload.error
        } else {
          state.error = action.error.message
        }
        state.success = false
      })
  }
})

export default applicationSlice.reducer
