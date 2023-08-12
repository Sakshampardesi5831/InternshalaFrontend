import React,{Fragment,useState,useEffect} from 'react'
import {Box,styled,Typography,Button,} from '@mui/material'
import {DescriptionOutlined,AddOutlined} from '@mui/icons-material'
/**------------------------------------------------------------------------ */
const NoJobWrapperContent=styled(Box)({
  width:"40%",
  height:"40vh",
  border:"2px solid #e8e8e8",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  gap:"20px"
});

const NoJobSubContent=styled(Box)({
  width:'100%',
  padding:"20px 20px",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  gap:'15px'
});
 const NoJobHeading=styled(Typography)({
  fontSize:"22px",
  fontWeight:"700"
 });
const NoJobSubHeading=styled(Typography)({
  fontSize:"14px",
  opacity:'0.5',
});

const NoJobButtonStyler=styled(Button)({
  border:"1px solid #142683",
  color:"#142683",
  padding:"10px 15px",
  fontWeight:"500",
  fontSize:"15px"
});

/**------------------------------------------------------------------------ */
const NoJob = ({setOpenJobForm}) => {
  return (
   <Fragment>
      <NoJobWrapperContent>
          <DescriptionOutlined style={{fontSize:"55px",fontWeight:"200",opacity:"0.7"}} />
          <NoJobSubContent>
             <NoJobHeading>Add Jobs</NoJobHeading>
             <NoJobSubHeading>Add Jobs Experience</NoJobSubHeading>
             <NoJobButtonStyler onClick={()=>setOpenJobForm(true)}><AddOutlined/> Add Jobs</ NoJobButtonStyler>
          </NoJobSubContent>
      </NoJobWrapperContent>
   </Fragment>      
  )
}

export default NoJob