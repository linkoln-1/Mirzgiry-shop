import { type AnyAction, createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CardType } from '../../shared/interfaces/CardProps';
import { RootState } from '../store';


export interface initialStateProps {
  loading: boolean
  favorites: CardType[]
  error: string | null

}
interface loginData {
  
   item: CardType
   
  }



export const createFavorite = createAsyncThunk<CardType, loginData, { rejectValue: string }>(
  'favorites',
  async function (loginData: loginData, { getState, rejectWithValue }) {
   const state = getState()as unknown as RootState;

    const response = await fetch(`/favorite`, {
      method: "POST",
      body: JSON.stringify(loginData),

      headers: {
        Authorization: `Bearer ${state.authorizationSlice.token}`,
        "Content-type": "application/json",
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
  favorites: [],
  error: null,
  
}
const cardSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createFavorite.pending, (state) => {
        state.loading = true
      
        
      })
      .addCase(createFavorite.fulfilled, (state, action) => {
        state.favorites.push(action.payload)
        state.loading = false
      })
      .addMatcher(isError, (state) => {
       
        state.loading = false
      })
  }

})
function isError (action: AnyAction) {
  return action.type.endsWith('rejected')
}
export default cardSlice.reducer
