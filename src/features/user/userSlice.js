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
    signout:(state)=> {
      state.name="";
      state. email="";
      state.password="";
      state.userflag=false;
     },
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
export const { getuser, setpassword,setemail, setname,signout} = userSlice.actions

export default userSlice.reducer