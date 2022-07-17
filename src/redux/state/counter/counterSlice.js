import {createSlice} from "@reduxjs/toolkit";


export const counterSlice=createSlice({
name:'counter',
initialState:{
    value:0
},
reducers:{
    increament:(state)=>{
        state.value=state.value+1;
    },
    decreament:(state)=>{
        state.value=state.value-1;
    },
    setCustom:(state,action)=>{
            state.value=parseInt(action.payload);
    }
}


})

export const{increament,decreament,setCustom}=counterSlice.actions;
export default counterSlice.reducer;