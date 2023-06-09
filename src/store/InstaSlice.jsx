import { createSlice } from '@reduxjs/toolkit'

const initialState = {
// token:'IGQVJVUWJrRXpiQ0xHeUc2UHVoYURPNkM4UDQza3RLM2poRmRiakJjc3pUMDltdkxfVEtmWTQwQzVOc0VmS1V0X0RnNUZAfLTlaZA3QtZAy1WdUdYUUZAiSWhIWHFxYnBlUm5mSDJ0bzE1TmxTWGtCUWh4TgZDZD',
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