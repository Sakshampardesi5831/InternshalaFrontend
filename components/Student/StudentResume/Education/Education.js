import React, { Fragment, useEffect, useState } from 'react'
import {Box,Typography,Button,Dialog,styled} from '@mui/material'
import {Description} from '@mui/icons-material'
import {useDispatch,useSelector} from 'react-redux'
import NoEducation from './NoEducation'
import SchoolForm from './SchoolForm'
import CollegeForm from './CollegeForm'
import EducationSection from './EducationSection'
import { asyncCurrentStudent } from '@/store/Actions/StudentAction'
/**-------------------------------------------------------------------------- */
const NoEducationWrapper=styled(Box)({
  width:"100%",
  height:"60vh",
  // border:"2px solid yellow",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
})

const dialogStyler={
  maxWidth:"100%",
  maxHeight:"100%",
  width:'65%',
  height:"90%",
  borderRadius:"15px",
  padding:"20px 15px"
}

const DialogHeading=styled(Box)({
  width:"100%",
  padding:"20px 20px",
  // border:"2px solid #000",
  display:"flex",
  justifyContent:"space-around",
   alignItems:"center",

})

const DialogHeadingStyler=styled(Typography)({
   fontWeight:"700",
   color:"#000",
   fontSize:"20px",
   cursor:"pointer"
});

const EducationWrapper=styled(Box)({
 width:"100%",
 minHeight:"80vh",
//  border:'2px solid #000',
 padding:"10px 20px"
});


/**--------------------------------------------------------------------------- */
const Education = () => {
  const {student} =useSelector((state)=>state.StudentReducer);
  const [openDialog,setOpendialog]=useState(false);
  const [isSchool,setIsSchool]=useState(false);
  const [isCollege,setIsCollege]=useState(false);
  const dispatch=useDispatch();
  const collegeFormHandler=()=>{
      setIsCollege(true);
      setIsSchool(false);
  }
   const schoolFormHandler=()=>{
     setIsSchool(true);
     setIsCollege(false);
   }
   useEffect(()=>{
     dispatch(asyncCurrentStudent());
   },[])
  return (
   <Fragment>
    {student.resume.education.length===0 ? <NoEducationWrapper>
        <NoEducation openDialog={openDialog} setOpendialog={setOpendialog} />
     </NoEducationWrapper>: <EducationWrapper>
       <EducationSection setOpendialog={setOpendialog} />
     </EducationWrapper>}
      {/*NO EDUCATION PART FINISH*/}
    <Dialog open={openDialog} PaperProps={{sx:dialogStyler}} >
           <DialogHeading>
              <DialogHeadingStyler onClick={collegeFormHandler} style={isCollege ?{color:"#628de8"} :{color:"#000"}}>College</DialogHeadingStyler>
              <DialogHeadingStyler onClick={schoolFormHandler} style={isSchool ?{color:"#628de8"} :{color:"#000"}} >School</DialogHeadingStyler>
           </DialogHeading>
           {isCollege ?<CollegeForm setOpendialog={setOpendialog} />:""}
           {isSchool ? <SchoolForm setOpendialog={setOpendialog} /> :""}
    </Dialog>
   </Fragment>
  )
}

export default Education