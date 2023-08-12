import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isLoading:false,
    isAuthenticated:false,
    employe:null,
    errors:null
}

export const employeeSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
      
        isLoading:(state,actions)=>{
            state.isLoading=true;
        },
        SetEmployee:(state,actions)=>{
            state.isAuthenticated=true;
            state.isLoading=false;
            state.employe=actions.payload;
            state.errors=null;
            console.log(actions);
        },
        RemoveEmployee:(state,action)=>{
            state = {
                isLoading: false,
                isAuthenticated: false,
                employe: null,
                error: null,
            };
        }
    },

})

export const {SetEmployee,RemoveEmployee} =employeeSlice.actions;
export default employeeSlice.reducer;