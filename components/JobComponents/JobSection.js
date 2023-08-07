import React, { Fragment, useEffect, useState } from "react";
import { Box, Typography, styled, Button } from "@mui/material";
import { Share, Money, Business } from "@mui/icons-material";
import Link from "next/link";
import instance from "@/axiosConfig";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
/**-------------------------------------------------------------------------- */

const JobsSection = styled(Box)({
  width: "100%",
  height: "50vh",
  border: "2px solid #e8e8e8",
  padding: "10px 20px",
});
const JobsTitle = styled(Box)({
  width: "100%",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const CompanyShare = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
const ComapanyTitle = styled(Typography)({
  fontSize: "25px",
  fontWeight: "700",
  color: "#000",
  opacity: "0.8",
});
const CompanyLocation = styled(Typography)({
  opacity: "0.5",
  fontSize: "15px",
});
const SkillsWrapper = styled(Box)({
  width: "100%",
  padding: "10px 20px",
  marginTop: "20px",
  //   border:"2px solid #000",
  display: "flex",
  flexFlow: "wrap",
  gap: "20px",
});
const Skills = styled(Box)({
  padding: "8px 30px",
  backgroundColor: "#eee",
  borderRadius: "100px",
});
const JobsDetails = styled(Box)({
  width: "100%",
  padding: "8px 20px",
  //  border:"2px solid #000",
  marginTop: "20px",
  display: "flex",
});
const JobsDetailsSection = styled(Box)({
  width: "25%",
  padding: "0px 10px",
  borderRight: "2px solid #e8e8e8",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "10px",
});
const JobsDetailsSection_SmallTitle = styled(Typography)({
  fontSize: "15px",
  opacity: "0.5",
  color: "#000",
  // paddingBottom:"10px",
  textTransform: "uppercase",
});
const JobsDetailsSection_details = styled(Typography)({
  fontSize: "20px",
  fontWeight: "700",
  color: "#5e6a79",
  opacity: "0.9",
  //  paddingTop:"5px"
});
const ApplyWrapper = styled(Box)({
  width: "100%",
  padding: "10px 20px",
  // border: "2px solid #000",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
 
});
const ButtonWrapper=styled(Box)({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  gap: "20px",
  marginTop:"20px"
})
const LinkWrapper = styled(Box)({
  padding: "10px 15px",
  backgroundColor: "#ffff",
  borderRadius: "10px",
  color: "#000",
  border: "1px solid #eeee",
  "&:hover": {
    backgroundColor: "#dee7ec",
  },
});
const ApplyButton = styled(Button)({
  padding: "10px 35px",
  backgroundColor: "#142683",
  color: "#fff",
  '&:hover':{
    backgroundColor:"#5081f4"
  }
});
/**------------------------------------------------------------------------- */
const JobSection = () => {
 const [jobs,setJobs]=useState([]);
//  const [internships,setInternship]=useState([])
 const router=useRouter();
 const dispatch=useDispatch();
 const {isAuthenticated, student}=useSelector(
   (state)=>state.StudentReducer
 );
  const GetJobs= async ()=>{
       try {
        const res =await instance.post("/user/student/alljobs");
        console.log(res.data.jobs);
        setJobs(res.data.jobs);
       } catch (error) {
         console.log(error);
       }
  }
  useEffect(()=>{
    if(!isAuthenticated){
      router.push("/login");
    }
    if(jobs.length===0){
      GetJobs();
    }
  },[isAuthenticated]);
  return (
    <Fragment>
        {jobs && jobs.map((item)=>(
           <JobsSection key={item._id}>
           <JobsTitle>
             <CompanyShare>
               <ComapanyTitle>{item.title}</ComapanyTitle>
               <CompanyLocation>Lokda | BangLore India</CompanyLocation>
             </CompanyShare>
             <Share />
           </JobsTitle>
           <SkillsWrapper>
             <Skills>
               <Typography sx={{ fontWeight: "700" }}>{item.skill}</Typography>
             </Skills>
           </SkillsWrapper>
           <JobsDetails>
             <JobsDetailsSection>
               <JobsDetailsSection_SmallTitle>
                 <Money /> &nbsp; job offer
               </JobsDetailsSection_SmallTitle>
               <JobsDetailsSection_details>
                 &#8377;{item.salary}
               </JobsDetailsSection_details>
             </JobsDetailsSection>
             <JobsDetailsSection>
               <JobsDetailsSection_SmallTitle>
                 <Business /> &nbsp;Work Type
               </JobsDetailsSection_SmallTitle>
               <JobsDetailsSection_details>{item.jobtype}</JobsDetailsSection_details>
             </JobsDetailsSection>
             <JobsDetailsSection>
               <JobsDetailsSection_SmallTitle>
                 Experience
               </JobsDetailsSection_SmallTitle>
               <JobsDetailsSection_details>Fresher</JobsDetailsSection_details>
             </JobsDetailsSection>
             <JobsDetailsSection>
               <JobsDetailsSection_SmallTitle>
                 Preference
               </JobsDetailsSection_SmallTitle>
               <JobsDetailsSection_details>
                  {item.preference}
               </JobsDetailsSection_details>
             </JobsDetailsSection>
           </JobsDetails>
           <ApplyWrapper>
             <Typography sx={{opacity:"0.5",fontWeight:"500"}} >Posted at:-</Typography>
             <ButtonWrapper>
               <LinkWrapper>
                 <Link className="link" href="/">
                   View Details
                 </Link>
               </LinkWrapper>
               <ApplyButton>Apply</ApplyButton>
             </ButtonWrapper>
           </ApplyWrapper>
         </JobsSection>
       ))}  
    </Fragment>
  );
};

export default JobSection;
