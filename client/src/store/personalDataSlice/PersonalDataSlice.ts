import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'


export interface CardTyp {
    _id: string
  user: string  
  name: string
  surName: string 
  email: string
  phone: string
  street: string
  homeNumber: string

 

  
  
}
export interface initialStateProps {

  loading: boolean
  error: null | string | unknown
  personal: CardTyp[]
  

}
interface loginData {

 name: string 
 surName: string
 email: string 
 phone: string
 street: string
 homeNumber: string
}
export const changePersonalData = createAsyncThunk(
  'personaladd',
  async (loginData: loginData, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch(`/personal`, {
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

export const fetchPersonalData = createAsyncThunk(
  'getpersonal',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    // выполнение запроса и получение данных
    try {
      const response = await fetch('/personal', {
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
  personal: [],
 

}
const PersonalDataSlice = createSlice({
  name: 'personal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changePersonalData.pending, (state) => {
        state.loading = true
        state.error = null
        state.personal=[]
      })
      .addCase(changePersonalData.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.error = null
        state.personal.push(action.payload)
      })
      .addCase(changePersonalData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(fetchPersonalData.pending, (state) => {
        state.loading = true
        state.error = null
        state.personal=[]
      })
      .addCase(fetchPersonalData.fulfilled, (state, action) => {
        console.log(action.payload)
        state.loading = false
        state.error = null
     
       state.personal = action.payload
      
      })
      .addCase(fetchPersonalData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})
export default PersonalDataSlice.reducer
