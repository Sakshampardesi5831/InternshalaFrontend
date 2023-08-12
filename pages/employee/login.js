import React, { Fragment,useState,useEffect } from 'react'
import {asyncCurrentEmployee,asyncEmployeeSignIn} from '@/store/Actions/EmployeeAction'
import {} from '@mui/material'
import {} from '@mui/icons-material'
import {useDispatch,useSelector} from 'react-redux'
import { useRouter } from 'next/router'
const login = () => {
   const dispatch=useDispatch();
   const router=useRouter();
   const { isAuthenticated,employe} =useSelector((state)=>state.EmployeReducer);

   const  onSubmitHandler=(e)=>{
    e.preventDefault();
    const employee={
      email:"sakshampardesi5831@gmail.com",
      password:"123456"
    }
    dispatch(asyncEmployeeSignIn(employee));
   }
    useEffect(()=>{
      if(!isAuthenticated){
        dispatch(asyncCurrentEmployee());
      }
      if(isAuthenticated){
        router.push("/employee/auth/home");
      }
    },[isAuthenticated])
   
     
  return (
   <Fragment>
     <div>login</div>
     <button onClick={onSubmitHandler} >LOGIN</button>
   </Fragment>
  )
}

export default login