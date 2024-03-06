import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   name:"",
   email:"",
   password:"",
  userflag:false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    getuser: (state, action) => {
        if(state.email === action.payload)
        userflag=true;

       },
    setname: (state, action) => {
     state.name = action.payload;
    },
    setemail: (state, action) => {
        state.email = action.payload;
       },
       setpassword: (state, action) => {
        state.password = action.payload;
       },
  },
})

// Action creators are generated for each case reducer function
export const { getuser, setpassword,setemail, setname} = userSlice.actions

export default userSlice.reducer