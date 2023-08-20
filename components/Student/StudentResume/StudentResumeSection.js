import React, { Fragment, useState } from "react";
import { Box, Typography, Button, Dialog, styled } from "@mui/material";
import {} from "@mui/icons-material";
import Image from "next/image";
import Education from "./Education/Education";
import StudentJob from "./JOB/StudentJob";
import StudentInternship from "./Internship/StudentInternship";
import StudentResponsibility from "./Responsibility/StudentResponsibilty";
import StudentCourses from "./Courses/StudentCourses";
/**---------------------------------------------------------------------------- */
const ProfileWrapper = styled(Box)({
  width: "75%",
  height: "calc(100vh - 80px)",
  border: "2px solid red",
  borderRadius: "15px",
  overflow: "hidden",
  overflowY: "auto",
  '&::-webkit-scrollbar':{
    display:"none"
  }
});
const ContentWrapper = styled(Box)({
  width: "25%",
  height: "calc(100vh - 80px)",
  border: "2px solid #000",
});

const StudentProfile = styled(Box)({
  width: "100%",
  height: "35vh",
  backgroundColor: "#f7f9fb",
  borderRadius: "15px",
  padding: "0px 20px",
  display:"flex",
  flexDirection:"column",
  justifyContent:"space-between",
  alignItems:"center"
});
const StudentProfileSection1 = styled(Box)({
  width: "70%",
  // border: "2px solid #000",
  padding: "20px 10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
});
const StudentProfileSection1Wrapper = styled(Box)({
  width: "100%",
  padding: "5px 20px",
  // border: "2px solid #000",
  display: "flex",
  gap: "15px",
  // justifyContent:"center",
  // alignItems:"center"
});
const StudentPhoto = styled(Box)({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  backgroundColor: "#f7f9fb",
  border: "2px solid #fff",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  "&>img": {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
  },
});
const StudentDetails = styled(Box)({
  width: "calc(100% - 100px)",
  padding: "10px 15px",
  // border: "2px solid red",
});

const StudentButtonWrapper = styled(Box)({
  width: "30%",
  padding:"20px 10px",
  // border: "2px solid red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding:"20px 0px",
  gap:"15px"
});

const ButtonStylerEdit = styled(Button)({
  padding: "10px 15px",
  backgroundColor: "#142683",
  color: "#fff",
  fontWeight: "700",
  '&:hover':{
    backgroundColor:"#1e0ec9"
  }
});
const ButtonStylerResume = styled(Button)({
  padding: "10px 25px",
  backgroundColor: "#142683",
  color: "#fff",
  fontWeight: "700",
  '&:hover':{
    backgroundColor:"#1e0ec9"
  }
});

const StudentProfileSection2LinkWrapper=styled(Box)({
  width:"100%",
  padding:"0px 20px",
  // border:"2px solid #000",
  // marginTop:"25px",
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center"
})
const StudentLinkStyler=styled(Box)({
  // width:"12%",
  textAlign:"left",
  cursor:"pointer",
 
  // borderBottom:"1px solid red",
  // backgroundColor:"red"
});
const StudentTypo=styled(Typography)({
  fontSize:"18px",
  // borderBottom:"1px solid #000",
});
const StudentLinkDetails=styled(Box)({
  width:"100%",
  minHeight:"calc(100vh - 40vh)",
  // backgroundColor:"#000"
});
/***---------------------------------------------------------------------------- */

const StudentResumeSection = ({ student }) => {
  const [education,setEduction]=useState(false);
  const [projects,setProjects]=useState(false);
  const [responsiblity,setResponsiblity]=useState(false);
  const [courses,setCourses]=useState(false);
  const [skills,setSkills]=useState(false);
  const [jobs,setJobs]=useState(false);
  const [internship,setInternship]=useState(false);
  const [ accomplishments,setAccomplishments]=useState(false);

  const educationHandler=()=>{
     setEduction(true);
     setProjects(false);
     setResponsiblity(false);
     setCourses(false);
     setSkills(false);
     setJobs(false);
     setInternship(false);
     setAccomplishments(false);
  }
  const projectHandler=()=>{
    setEduction(false);
    setProjects(true);
    setResponsiblity(false);
    setCourses(false);
    setSkills(false);
    setJobs(false);
    setInternship(false);
    setAccomplishments(false);
  }
  const responsiblityHandler=()=>{
    setEduction(false);
    setProjects(false);
    setResponsiblity(true);
    setCourses(false);
    setSkills(false);
    setJobs(false);
    setInternship(false);
    setAccomplishments(false);
  }
  const coursesHandler=()=>{
    setEduction(false);
    setProjects(false);
    setResponsiblity(false);
    setCourses(true);
    setSkills(false);
    setJobs(false);
    setInternship(false);
    setAccomplishments(false);
  }
  const skillsHandler=()=>{
    setEduction(false);
    setProjects(false);
    setResponsiblity(false);
    setCourses(false);
    setSkills(true);
    setJobs(false);
    setInternship(false);
    setAccomplishments(false);
  }
 const jobsHandler=()=>{
  setEduction(false);
  setProjects(false);
  setResponsiblity(false);
  setCourses(false);
  setSkills(false);
  setJobs(true);
  setInternship(false);
  setAccomplishments(false);
 }
 const internshipHandler=()=>{
  setEduction(false);
  setProjects(false);
  setResponsiblity(false);
  setCourses(false);
  setSkills(false);
  setJobs(false);
  setInternship(true);
  setAccomplishments(false);
 } 
 const accomplishmentsHandler=()=>{
  setEduction(false);
  setProjects(false);
  setResponsiblity(false);
  setCourses(false);
  setSkills(false);
  setJobs(false);
  setInternship(false);
  setAccomplishments(true);
 }

  return (
    <Fragment>
      <ProfileWrapper>
        <StudentProfile>
          <StudentProfileSection1Wrapper>
            <StudentProfileSection1>
              <StudentPhoto>
                <Image src="" width={100} height={100} alt="photo" />
              </StudentPhoto>
              <StudentDetails>
                <Typography style={{ fontSize: "25px", fontWeight: "700" }}>
                  SAKSHAM PARDESI
                </Typography>
                <Typography style={{ color: "#916b7f" }}>
                  Full Stack Developer
                </Typography>
                <Typography style={{ opacity: "0.5" }}>
                  Lnct group of Colleges .Bhopal.2022
                </Typography>
              </StudentDetails>
            </StudentProfileSection1>
            <StudentButtonWrapper>
              <ButtonStylerEdit>Edit</ButtonStylerEdit>
              <ButtonStylerResume>Your Resume</ButtonStylerResume>
            </StudentButtonWrapper>
          </StudentProfileSection1Wrapper>
          <StudentProfileSection2LinkWrapper>
             <StudentLinkStyler onClick={educationHandler}   >
               <StudentTypo style={education ? {color:"#5970e4",borderBottom:"2px solid #5970e4",fontWeight:"700"}:{color:"#000"}}  >Education</StudentTypo>
             </StudentLinkStyler>
             <StudentLinkStyler onClick={jobsHandler} >
               <StudentTypo style={jobs ? {color:"#5970e4",borderBottom:"2px solid #5970e4",fontWeight:"700"}:{color:"#000"}} >Jobs</StudentTypo>
             </StudentLinkStyler>
             <StudentLinkStyler onClick={internshipHandler} >
               <StudentTypo style={internship ? {color:"#5970e4",borderBottom:"2px solid #5970e4",fontWeight:"700"}:{color:"#000"}} >Internships</StudentTypo>
             </StudentLinkStyler>
             <StudentLinkStyler onClick={responsiblityHandler} >
               <StudentTypo style={responsiblity? {color:"#5970e4",borderBottom:"2px solid #5970e4",fontWeight:"700"}:{color:"#000"}}>Responsibility</StudentTypo>
             </StudentLinkStyler   >
             <StudentLinkStyler onClick={coursesHandler}>
               <StudentTypo style={courses ? {color:"#5970e4",borderBottom:"2px solid #5970e4",fontWeight:"700"}:{color:"#000"}}>Courses</StudentTypo>
             </StudentLinkStyler>
             <StudentLinkStyler onClick={skillsHandler}>
               <StudentTypo style={skills ? {color:"#5970e4",borderBottom:"2px solid #5970e4",fontWeight:"700"}:{color:"#000"}} >Skills</StudentTypo>
             </StudentLinkStyler>
             <StudentLinkStyler onClick={accomplishmentsHandler} >
               <StudentTypo style={accomplishments ? {color:"#5970e4",borderBottom:"2px solid #5970e4",fontWeight:"700"}:{color:"#000"}} >Accomplishments</StudentTypo>
             </StudentLinkStyler>
             <StudentLinkStyler onClick={projectHandler} >
               <StudentTypo style={projects ? {color:"#5970e4",borderBottom:"2px solid #5970e4",fontWeight:"700"}:{color:"#000"}}>Projects</StudentTypo>
             </StudentLinkStyler>
          </StudentProfileSection2LinkWrapper>
        </StudentProfile>
         <StudentLinkDetails>
           {education?<Education/>:""}
           {jobs?<StudentJob/>:""}
           {internship?<StudentInternship/>:""}
           {courses?<StudentCourses/>:""}
           {skills?"skills":""}
           {responsiblity?<StudentResponsibility/>:""}
           {accomplishments?"accomplishments":""}
           {projects ?"projects":""}
         </StudentLinkDetails>
      </ProfileWrapper>
      <ContentWrapper></ContentWrapper>
    </Fragment>
  );
};

export default StudentResumeSection;
