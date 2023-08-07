import { asyncCurrentStudent, asyncSignin } from '@/store/Actions/StudentAction';
import { useRouter } from 'next/router'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from '@/components/AuthComponent/LoginPage';
import NavBar from '@/components/NavBar';
const login = () => {
   const router=useRouter();
   const dispatch=useDispatch();
   const {isAuthenticated}=useSelector((state)=>state.StudentReducer);
  
 
   useEffect(()=>{
     if(!isAuthenticated){
      dispatch(asyncCurrentStudent());
     }
     if(isAuthenticated){
      router.push("/auth/home");
     }
   },[isAuthenticated])

  return (
   <Fragment>
       {/* <h2>LOGIN IN PAGE</h2>
       <button onClick={submitHandler}  className='btn btn-primary'>LOGIN</button> */}
      <NavBar/>
      <LoginPage/>
   </Fragment>
  )
}

export default login