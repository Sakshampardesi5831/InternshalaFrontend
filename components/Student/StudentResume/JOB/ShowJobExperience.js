import React, { Fragment } from 'react'
import {DescriptionOutlined, EditOutlined,AddOutlined} from '@mui/icons-material'
import {Box,Button,Typography,Dialog,styled} from '@mui/material'
import {useSelector,useDispatch} from 'react-redux'
/**------------------------------------------------------------------------ */

const StudentJobExperienceWrapper=styled(Box)({
    width:"100%",
    minHeight:"80vh",
    border:'2px solid #000',
    padding:"10px 20px"
});

const StudentJobExperienceWrapper_NavPart=styled(Box)({
  width:"100%",
  height:"20vh",
  border:"2px solid #e8e8e8",
  display:"flex",
  justifyContent:"space-between",
  alignItems:'center',
  padding:"0px 15px",
  borderRadius:'10px'
});

const StudentJobExperienceWrapper_NavPart_Section1=styled(Box)({
    width:"70%",
    height:"90%",
    // border:"2px solid #000",
    display:"flex",
    justifyContent:'flex-start',
    alignItems:'center',
    gap:"10px",
    padding:"10px 15px"
});
const StudentJobExperienceWrapper_NavPart_ContentWrapper=styled(Box)({
    width:"90%",
    height:"100%",
    // border:'2px solid red',
    display:"flex",
    flexDirection:'column',
    justifyContent:'center',
    alignItems:"flex-start",
    gap:"15px",
    padding:"5px 15px"
});
const AddJobHeading=styled(Typography)({
     fontWeight:"900",
     fontSize:"18px",
     opacity:"0.8"
});
const AddSubHeading=styled(Typography)({
    fontSize:'15px',
    opacity:'0.7'
});
const AddButtonStyler=styled(Button)({
  border:"1px solid #142683",
  padding:"10px 10px",
  color:"#142683",
  fontSize:"15px",
  fontWeight:"700",
});
const ShowJobExperience = () => {

   const {Student} =useSelector((state)=>state.StudentReducer);
  return (
     <Fragment>
        <StudentJobExperienceWrapper>
           <StudentJobExperienceWrapper_NavPart>
               <StudentJobExperienceWrapper_NavPart_Section1>
                 <DescriptionOutlined style={{fontSize:"50px",opacity:"0.7"}}/>
                  <StudentJobExperienceWrapper_NavPart_ContentWrapper>
                     <AddJobHeading>ADD JOB EXPERIENCE</AddJobHeading>
                     <AddSubHeading>fill the details with description</AddSubHeading>
                  </StudentJobExperienceWrapper_NavPart_ContentWrapper>
               </StudentJobExperienceWrapper_NavPart_Section1>
                <AddButtonStyler><AddOutlined/>Add Job Exp</AddButtonStyler>
           </StudentJobExperienceWrapper_NavPart>
           <Box>

           </Box>
        </StudentJobExperienceWrapper>
     </Fragment>
  )
}

export default ShowJobExperience