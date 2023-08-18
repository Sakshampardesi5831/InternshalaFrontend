import React, { Fragment } from 'react'
import {DescriptionOutlined,AddOutlined} from '@mui/icons-material'
import {Box,Typography,Button,Dialog,styled} from '@mui/material'
/**---------------------------------------------------------------- */
const NoInternshipContent=styled(Box)({
  width:"40%",
  height:"40vh",
  border:"2px solid #e8e8e8",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  gap:"20px"
});
const NoInternshipSubContent=styled(Box)({
  width:'100%',
  padding:"20px 20px",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  gap:'15px'
});
const NoInternshipHeading=styled(Typography)({
  fontSize:"22px",
  fontWeight:"700"
});
const NoInternshipSubHeading=styled(Typography)({
  fontSize:"14px",
  opacity:'0.5',
});
const NoInternshipButtonStyler=styled(Button)({
  border:"1px solid #142683",
  color:"#142683",
  padding:"10px 15px",
  fontWeight:"500",
  fontSize:"15px"
});
/**---------------------------------------------------------------- */
const NoInternship = ({setOpenInternship}) => {
  return (
    <Fragment>
      <NoInternshipContent>
        <DescriptionOutlined style={{fontSize:"55px",fontWeight:"200",opacity:"0.7"}}/>
        <NoInternshipSubContent>
             <NoInternshipHeading>Add Internship</NoInternshipHeading>
             <NoInternshipSubHeading>Improve your chances and stand out</NoInternshipSubHeading>
             <NoInternshipButtonStyler onClick={()=>setOpenInternship(true)}><AddOutlined/>Add Internship</NoInternshipButtonStyler>
        </NoInternshipSubContent>
      </NoInternshipContent>
    </Fragment>
  )
}

export default NoInternship