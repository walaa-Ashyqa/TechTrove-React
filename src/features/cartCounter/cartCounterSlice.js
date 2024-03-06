import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  products:[]
}

export const cartCounterSlice = createSlice({
  name: 'cartcounter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    resetCart: (state) => {
      state.value =0;
      products=[];
    },
    incrementByAmount: (state, action) => {
     const length= state.products.push(action.payload) ;
     state.value += 1;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, incrementByAmount,resetCart } = cartCounterSlice.actions

export default cartCounterSlice.reducer