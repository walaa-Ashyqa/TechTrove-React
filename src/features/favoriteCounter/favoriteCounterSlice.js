import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count_favorite: 0,
  products_favorite:[]
}

export const favoriteCounterSlice = createSlice({
  name: 'favoriteCounter',
  initialState,
  reducers: {
    incrementFavorite: (state) => {
      state.count_favorite += 1
    },
   
    addFavorite: (state, action) => {
     const length= state.products_favorite.push(action.payload) ;
     state.count_favorite += 1;
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementFavorite, addFavorite } = favoriteCounterSlice.actions

export default favoriteCounterSlice.reducer