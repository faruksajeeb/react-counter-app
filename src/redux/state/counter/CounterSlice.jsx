import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value:1
    },
    reducers:{
        increment:(state)=>{
            state.value = state.value+1;
        },
        decrement:(state)=>{
            state.value = state.value-1;
        },
        setValue:(state,action)=>{
            state.value = Number(action.payload);
        }
    }

})

export const {increment,decrement,setValue} = counterSlice.actions;
export default counterSlice.reducer;