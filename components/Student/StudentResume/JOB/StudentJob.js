import React,{useEffect,useState,Fragment} from 'react'
import NoJob from './NoJob'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useDispatch,useSelector} from 'react-redux'
import { useRouter } from 'next/router'
import {Box,styled,Button,Typography,Dialog} from '@mui/material';

const NoJobWrapper=styled(Box)({
  width:"100%",
  height:"60vh",
  border:"2px solid #000",
  display:'flex',
  justifyContent:"center",
  alignItems:"center"
});
const dialogStyler={
  maxWidth:"100%",
  maxHeight:"100%",
  width:'65%',
  height:"90%",
  borderRadius:"15px",
  padding:"20px 15px"
}
/***------------------------------------------------------------------------ */
const DialogWrapperForm=styled(Box)({
   width:"100%",
   height:"100%",
   border:"2px solid #000"
});




const StudentJob = () => {
 const router=useRouter();
 const [OpenJobForm,setOpenJobForm]=useState(false);
 const {student} =useSelector((state)=>state.StudentReducer);
  return (
    <Fragment>
       {/* {student.resume.jobs.length===0? <NoJob/> :"Some job is present"} */}
       <NoJobWrapper>
          <NoJob setOpenJobForm={setOpenJobForm}/>
       </NoJobWrapper>
       <Dialog open={OpenJobForm} PaperProps={{sx:dialogStyler}}>
          <DialogWrapperForm>
              
          </DialogWrapperForm>
       </Dialog>
    </Fragment>
  )
}

export default StudentJob