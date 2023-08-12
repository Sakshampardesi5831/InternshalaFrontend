import React, { Fragment } from 'react'
import {Box,Typography,Button,styled} from '@mui/material'
import {DescriptionOutlined,AddOutlined} from '@mui/icons-material'
const NoEducationContent=styled(Box)({
    width:"40%",
    height:"40vh",
    border:"2px solid #e8e8e8",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:"20px"
});
const NoEducationSubContent=styled(Box)({
  width:"100%",
  padding:"20px 20px",
//   border:"2px solid #000",
  display:"flex",
  justifyContent:'center',
  alignItems:"center",
  flexDirection:'column',
  gap:"15px"
});
const NoEducationHeading=styled(Typography)({
  fontSize:"22px",
  fontWeight:"700"
});
const NoEducationSubHeading=styled(Typography)({
   fontSize:"14px",
   opacity:'0.5',
});
const NoEducationButtonStyler=styled(Button)({
    border:"1px solid #142683",
    color:"#142683",
    padding:"10px 15px",
    fontWeight:"500",
    fontSize:"15px"
})

const NoEducation = ({setOpendialog,openDialog}) => {

  const dialogOpenHandler=()=>{
     setOpendialog(true);
  }
  return (
    <Fragment>
      <NoEducationContent>
         <DescriptionOutlined  style={{fontSize:"55px",fontWeight:"200",opacity:"0.7"}} />
         <NoEducationSubContent>
            <NoEducationHeading>Add Education</NoEducationHeading>
            <NoEducationSubHeading>Fill the Details of School and College</NoEducationSubHeading>
            <NoEducationButtonStyler onClick={()=>dialogOpenHandler()}> <AddOutlined fontSize='12px'/> Add Education</ NoEducationButtonStyler>
         </NoEducationSubContent>
      </NoEducationContent>
    </Fragment>
  )
}

export default NoEducation