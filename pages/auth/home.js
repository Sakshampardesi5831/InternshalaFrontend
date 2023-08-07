import { useRouter } from 'next/router';
import React, { Fragment, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Link from 'next/link';
import { asyncSignout } from '@/store/Actions/StudentAction';
import StudentDashBoardNavbar from '@/components/Student/StudentDashBoardNavbar';
import StudentDashboard from '@/components/Student/StudentDashboard';
const Home = () => {

const dispatch=useDispatch();
const router=useRouter();

const {isAuthenticated,student}=useSelector((state)=>state.StudentReducer);

  useEffect(()=>{
    if(!isAuthenticated){
      router.push("/login");
    }
  },[isAuthenticated]);

  return (
    <Fragment>
      {/* <h1>LOGIN FIRST PAGE</h1>
      <li>My Application</li>
      <li>Edit Resume</li>
      <li>Manage Account</li>
      <li style={{cursor:"pointer"}}  onClick={()=>dispatch(asyncSignout())}  >LogOut</li>
      <p>WILL SHOW JOBS</p> */}
      <StudentDashBoardNavbar student={student}/>
      <StudentDashboard/>
    </Fragment>
  )
}

export default Home