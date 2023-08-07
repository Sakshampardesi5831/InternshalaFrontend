import React, { Fragment, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { asyncCurrentStudent, asyncSignup } from '@/store/Actions/StudentAction';
import { useRouter } from 'next/router';
const Register = () => {
  const dispatch=useDispatch();
  const router=useRouter();
  const { isAuthenticated } = useSelector((state) => state.StudentReducer);
   const SubmitHandler=(e)=>{
       e.preventDefault();  
       const student={
          firstname:"saksham",
          lastname:"pardesi",
          city:"bhopal",
          gender:"Male",
          email:"sakshampardesi5831@gmail.com",
          password:"123456"
       }
       dispatch(asyncSignup(student));
   };
   useEffect(()=>{
    if(!isAuthenticated){
      dispatch(asyncCurrentStudent());
     }
     if(isAuthenticated){
      router.push("/auth/home");
     }
   },[])
  return (
    <Fragment>
      <h1>Register</h1>
      <button onClick={SubmitHandler} className='btn btn-primary'>Register</button>
    </Fragment>
  )
}

export default Register