import React, { Fragment,useState,useEffect } from 'react'
import {Box,Typography,Button,styled} from '@mui/material'
import {} from '@mui/icons-material'
import SideNav from '@/components/SideNav'
import StudentDashBoardNavbar from '@/components/Student/StudentDashBoardNavbar'
import { useDispatch,useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import StudentAppliedSection from '@/components/Student/StudentApply/StudentAppliedSection'
/**------------------------------------------------------------------------------ */
const StudentApplyWrapper=styled(Box)({
    width:"100%",
    height:"calc(100vh - 80px)",
    display:'flex',
    gap:"10px"
});






/**------------------------------------------------------------------------------- */
const MyApplication = () => {
  const router=useRouter();
  const {isAuthenticated,student} = useSelector((state)=>state.StudentReducer);
  
  useEffect(()=>{
     if(!isAuthenticated){
        router.push("/login");
     }
  },[isAuthenticated])
  return (
    <Fragment>
     <StudentDashBoardNavbar student={student}/>
      <StudentApplyWrapper>
        <SideNav/>
        <StudentAppliedSection student={student}/>
      </StudentApplyWrapper>
    </Fragment>
  )
}

export default MyApplication