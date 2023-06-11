import { createSlice } from '@reduxjs/toolkit'

const initialState = {
token:'',
data:[]
}

const InstaSlice = createSlice({
  name: 'insta',
  initialState,
  reducers: {
    setToken:(state,action)=>{
        state.token=action.payload
    },
    setData:(state,action)=>{
        state.data=action.payload
    }
  }
});

export const tokenActions = InstaSlice.actions;

export default InstaSlice.reducer