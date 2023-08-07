import instance from "@/axiosConfig";
// the instance variable is importing the axios
import { SetUser } from "../Reducers/StudentReducer";
export const setStudent=()=> async (dispatch,getState)=>{
    try {
        const res=await instance.get("/");
        console.log(res);
    } catch (error) {
        console.log(error);
    }

}
export const asyncCurrentStudent=()=> async (dispatch,getState)=>{
    try {
        const res=await instance.get("/user/student");
        dispatch(SetUser(res.data.student));
    } catch (error) {
        console.log(error);
    }
}

export const asyncSignup=(student)=> async (dispatch,getState)=>{
    try {  
        const res=await instance.post("/user/student/signup",student);
        asyncCurrentStudent();
        dispatch(asyncCurrentStudent());
        console.log(res);
    } catch (error) {
       console.log(error); 
    }
}
export const asyncSignin=(student)=> async (dispatch,getState)=>{
    try {  
        const res=await instance.post("/user/student/signin",student);
        console.log(res);
        dispatch(asyncCurrentStudent());
    } catch (error) {
        
    }
}
export const asyncSignout=(student)=> async (dispatch,getState)=>{
    try {  
        const res=await instance.get("/user/student/signout",student);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}