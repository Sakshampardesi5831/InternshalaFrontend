import React, { Fragment,useState,useEffect } from 'react'
import {Box,Typography,Button,InputBase,styled} from '@mui/material'
import {} from '@mui/icons-material'
import instance from '@/axiosConfig';
/**------------------------------------------------------------------------------ */

const SchoolFormWrapper=styled(Box)({
    width:'100%',
    height:'90%',
    // border:"2px solid #000",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    gap:"10px"
});


const SchoolContentWrapper=styled(Box)({
     width:"90%",
     height:"80%",
    //  border:"2px solid red",
     display:"flex",
     gap:'15px'
});


const SchoolContentSection1Wrapper=styled(Box)({
   width:"50%",
   height:"100%",
  //  border:"2px solid #000",
   padding:"10px 15px",
   display:"flex",
   flexDirection:"column",
   justifyContent:"space-evenly"
});
const SchoolContentSection1=styled(Box)({
  width:"100%",
  padding:"10px 8px",
  // border:"2px solid #000"
});
const SchoolContentSection1_Heading=styled(Typography)({
  fontSize:"18px",
  color:"#000",
  opacity:'0.7',
  fontWeight:"700"
});
const SchoolContentSection1_InputBase=styled(InputBase)({
  width: "100%",
  padding: "10px 8px",
  borderRadius: "8px",
  fontSize: "18px",
  border: "2px solid #e8e8e8",
  "&:placeholder": {
    color: "#000",
  },
  marginTop: "10px",
});

const SchoolContentSection2Wrapper=styled(Box)({
 width:"90%",
 height:"20%",
//  border:"2px solid yellow",
 display:"flex",
 justifyContent:"flex-end",
 alignItems:"center",
 padding:"0 20px",
 gap:"15px"
});
const SchoolContentSection2Cancel=styled(Button)({
  padding: "10px 20px",
  border: "2px solid #e8e8e8",
  color: "#000",
  fontWeight: "400",
  "&:hover": {
    fontWeight: "700",
  },
});

const SchoolContentSection2SaveButton=styled(Button)({
  padding: "10px 30px",
  border: "2px solid #fff",
  color: "#fff",
  backgroundColor: "#142683",
  "&:hover": {
    backgroundColor: "#0b57d0",
  },
  fontWeight: "700",
});
/**------------------------------------------------------------------------------- */
const SchoolForm = ({setOpendialog}) => {
  const [instituteName, setInstituteName]=useState("");
  const [specialization,setSpecialization]=useState("");
  const [passingYear,setPassingYear]=useState("");
  const [grade,setGrade]=useState("");

  const AddEducation= async ()=>{
      if(instituteName === '' && specialization==="" && passingYear === '' && grade ===""){
          return;
      }
      var schoolData={
        instituteName,
        specialization,
        passingYear,
        grade,
      }
      try {
        const {data} =await instance.post("/resume/add-edu",schoolData);
        window.alert(`${data.message}`);
        setInstituteName("");
        setSpecialization("");
        setPassingYear("");
        setGrade("");
        setOpendialog(false);
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <Fragment>
     <SchoolFormWrapper>
         <SchoolContentWrapper>
            <SchoolContentSection1Wrapper>
              <SchoolContentSection1> 
              <SchoolContentSection1_Heading>School Name</SchoolContentSection1_Heading>
               <SchoolContentSection1_InputBase onChange={(e)=>setInstituteName(e.target.value)} value={instituteName} placeholder='Type School Name'/>
              </SchoolContentSection1>
              <SchoolContentSection1> 
              <SchoolContentSection1_Heading>Select Passing Year</SchoolContentSection1_Heading>
               <SchoolContentSection1_InputBase onChange={(e)=>setPassingYear(e.target.value)} value={passingYear} placeholder='Type Passing Year'/>
              </SchoolContentSection1>
            </SchoolContentSection1Wrapper>
            <SchoolContentSection1Wrapper>
              <SchoolContentSection1> 
              <SchoolContentSection1_Heading>Class</SchoolContentSection1_Heading>
               <SchoolContentSection1_InputBase onChange={(e)=>setSpecialization(e.target.value)} value={specialization} placeholder='Type Class'/>
              </SchoolContentSection1>
              <SchoolContentSection1> 
              <SchoolContentSection1_Heading>Final GPA (Out of 10)</SchoolContentSection1_Heading>
               <SchoolContentSection1_InputBase onChange={(e)=>setGrade(e.target.value)} value={grade} placeholder='Type Grade'/>
              </SchoolContentSection1>
            </SchoolContentSection1Wrapper>
         </SchoolContentWrapper>
         <SchoolContentSection2Wrapper>
           <SchoolContentSection2Cancel onClick={()=>setOpendialog(false)}>Cancel</SchoolContentSection2Cancel>
           <SchoolContentSection2SaveButton onClick={AddEducation} >Save Details</SchoolContentSection2SaveButton>
         </SchoolContentSection2Wrapper>
     </SchoolFormWrapper>
    </Fragment>
  )
}

export default SchoolForm