import {createSlice} from '@reduxjs/toolkit'

const initialState={
    isLoading:false,
    isAuthenticated:false,
    student:null,
    errors:null
}


export const studentSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
      
        isLoading:(state,actions)=>{
            state.isLoading=true;
        },
        SetUser:(state,actions)=>{
            state.isAuthenticated=true;
            state.isLoading=false;
            state.student=actions.payload;
            state.errors=null;
            console.log(actions);
        },
        RemoveUser:(state,action)=>{
            state = {
                isLoading: false,
                isAuthenticated: false,
                student: null,
                error: null,
            };
        }
    },

})

export const {SetUser,RemoveUser}=studentSlice.actions;
export default  studentSlice.reducer;
