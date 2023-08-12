import instance from "@/axiosConfig";
import { SetEmployee } from "../Reducers/EmployeReducer";


export const setEmployee=()=> async (dispatch,getState)=>{
   try {
      const res=await instance.get("/");
      console.log(res);
   } catch (error) {
      console.log(error)
   }
}

export const asyncCurrentEmployee=()=>async (dispatch,getState)=>{
    
     try {
        const  res=await instance.get("/employee/employee");
        dispatch(SetEmployee(res.data.employee));
     } catch (error) {
         console.log(error);
     }
}

export const asyncEmployeeSignUp=(employee)=>async (dispatch,getState)=>{
     try {
          const res=await instance.post("/employee/signup",employee);
          asyncCurrentEmployee();
          dispatch(asyncCurrentEmployee());
          console.log(res);
     } catch (error) {
       console.log(error);
     }
}


export const asyncEmployeeSignIn=(employee)=>async (dispatch,getState)=>{
  try {
   const res=await instance.post("/employee/signin",employee);
   console.log(res);
   dispatch(asyncCurrentEmployee());
  } catch (error) {
   console.log(error);
  }
}

export const  asyncEmployeeSignOut=(employee)=>async (dispatch,getState)=>{
   try {
      const res=await instance.get("/employee/signout",employee);
      console.log(res);
   } catch (error) {
      console.log(error);
   }
}