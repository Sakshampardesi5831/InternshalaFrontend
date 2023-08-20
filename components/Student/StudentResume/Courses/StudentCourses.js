import React, { Fragment, useEffect, useState } from 'react'
import {Box,Dialog,Button,styled,Typography} from '@mui/material'
import {DescriptionOutlined} from '@mui/icons-material'
import {useSelector,useDispatch} from 'react-redux'
import NoCourses from './NoCourses'
import StudentCoursesSection from './StudentCoursesSection'
import { asyncCurrentStudent } from '@/store/Actions/StudentAction'
/*--------------------------------------------------------------------**/
const NoCoursesWrapper=styled(Box)({
   width:"100%",
   height:"60vh",
  //  border:"2px solid #000",
   display:"flex",
   justifyContent:"center",
   alignItems:"center"
});

/**-------------------------------------------------------------------- */
const StudentCourses = () => {
  const dispatch=useDispatch();
  const [OpenCourses,setOpenCourses]=useState(false);
  const {student} =useSelector((state)=>state.StudentReducer);
  useEffect(()=>{
     dispatch(asyncCurrentStudent());
  },[])
  return (
    <Fragment>
       <NoCoursesWrapper>
          <NoCourses setOpenCourses={setOpenCourses} />
       </NoCoursesWrapper>
    </Fragment>
  )
}

export default StudentCourses