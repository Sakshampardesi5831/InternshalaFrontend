import React, { Fragment, useEffect } from 'react'
import {Box,Typography,Button,Dialog,styled} from '@mui/material'
import {DescriptionOutlined,AddOutlined} from '@mui/icons-material'
import {useDispatch,useSelector} from 'react-redux'
import { asyncCurrentStudent } from '@/store/Actions/StudentAction'
/**------------------------------------------------------------------------- */
const NoCoursesContent = styled(Box)({
  width: "40%",
  height: "40vh",
  border: "2px solid #e8e8e8",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});
const NoCoursesSubContent = styled(Box)({
  width: "100%",
  padding: "20px 20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
});

const NoCoursesHeading = styled(Typography)({
  fontSize: "22px",
  fontWeight: "700",
});
const NoCoursesSubHeading = styled(Typography)({
  fontSize: "14px",
  opacity: "0.5",
});
const NoCoursesButtonStyler = styled(Button)({
  border: "1px solid #142683",
  color: "#142683",
  padding: "10px 15px",
  fontWeight: "500",
  fontSize: "15px",
});
/**------------------------------------------------------------------------- */
const NoCourses = ({setOpenCourses}) => {
  const dispatch=useDispatch();
  const {student} =useSelector((state)=>state.StudentReducer);
   useEffect(()=>{
    dispatch(asyncCurrentStudent());
   },[])
  return (
    <Fragment>
      <NoCoursesContent>
      <DescriptionOutlined
          style={{ fontSize: "55px", fontWeight: "200", opacity: "0.7" }}
        />
        <NoCoursesSubContent >
          <NoCoursesHeading>Add Courses</NoCoursesHeading>
          <NoCoursesSubHeading>Add the Certification Courses</NoCoursesSubHeading>
          <NoCoursesButtonStyler onClick={()=>setOpenCourses(true)}><AddOutlined/> Add Courses</NoCoursesButtonStyler>
        </NoCoursesSubContent >
      </NoCoursesContent>
    </Fragment>
  )
}

export default NoCourses