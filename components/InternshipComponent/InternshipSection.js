import React, { Fragment, useEffect, useState } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import {
  Money,
  AccessTime,
  Work,
  CalendarMonth,
  LocationOnOutlined,
} from "@mui/icons-material";
import instance from "@/axiosConfig";
import Link from "next/link";
const InternShipSectionWrapper = styled(Box)({
  width: "100%",
  height: "50vh",
  border: "2px solid #eee",
});
const InternshipCompanyHeading = styled(Box)({
  width: "100%",
  padding: "10px 20px",
  // border: "2px solid #000",
});
const InternshipRequiredSkillsWrapper = styled(Box)({
  width: "100%",
  padding: "10px 20px",
  // border: "2px solid #000",
  display: "flex",
  flexDirection: "wrap",
  marginTop: "10px",
});
const InternshipRequiredSkills = styled(Typography)({
  width: "8%",
  padding: "5px 10px",
  backgroundColor: "#eeeeee",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  fontWeight: "700",
  borderRadius: "100px",
  opacity:"0.7"
});
const InternshipContent = styled(Box)({
  width: "100%",
  padding: "8px 20px",
  // border: "2px solid #000",
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const InternshipContentDetails = styled(Box)({
  width: "20%",
  padding: "2px 10px",
  borderLeft: "2px solid #e8e8e8",
  opacity:"0.7"
});
const ApplyWrapper = styled(Box)({
  width: "100%",
  padding: "10px 20px",
  // border: "2px solid #000",
  marginTop: "10px",
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center"
});
const ApplyButtonWrapper=styled(Box)({
   // width:"30%",
   padding:"10px 15px",
  // border:"2px solid #e8e8e8",
  display:"flex",
  justifyContent:"center",
  alignItems:'center',
  gap:"10px"
});
const ButtonStyler=styled(Button)({
   padding:"10px 35px",
   backgroundColor:"#142683",
   color:"#fff",
   fontWeight:"700",
   cursor:'pointer',
   '&:hover':{
     backgroundColor:"#0b57d0"
   }
})
const TypographyHeadingStyler=styled(Typography)({
  opacity: "0.5",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "5px",
});
const TypographyStyler=styled(Typography)({
  fontSize: "20px", 
  fontWeight: "700", 
  marginTop: "5px",
  opacity:"0.7"
})
const InternshipSection = () => {
  const [internships, setInternship] = useState([]);
  const GetInternship = async () => {
    try {
      const res = await instance.post("/user/student/allinternships");
      console.log(res.data.internship);
      setInternship(res.data.internship);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (internships.length === 0) {
      GetInternship();
    }
  }, []);
  return (
    <Fragment>
      {internships && internships.map((item)=>(
          <InternShipSectionWrapper key={item._id}>
          <InternshipCompanyHeading>
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "700",
                width: "100%",
                padding: "2px 10px",
                flexFlow: "wrap",
              }}
            >
              {item.profile}
            </Typography>
            <Typography
              style={{ opacity: "0.7", width: "100%", padding: "2px 10px" }}
            >
              Company Location
            </Typography>
          </InternshipCompanyHeading>
          <InternshipRequiredSkillsWrapper>
            <InternshipRequiredSkills>{item.skill}</InternshipRequiredSkills>
          </InternshipRequiredSkillsWrapper>
          <InternshipContent>
            <InternshipContentDetails style={{border:"none"}} >
              <TypographyHeadingStyler>
                <Money /> Stipend per month
              </TypographyHeadingStyler>
              <TypographyStyler>
                 &#8377; {item.stipend.amount}
              </TypographyStyler>
            </InternshipContentDetails>
            <InternshipContentDetails>
              <TypographyHeadingStyler>
                <AccessTime /> Duration
              </TypographyHeadingStyler>
              <TypographyStyler>
                 {item.duration}
              </TypographyStyler>
            </InternshipContentDetails>
            <InternshipContentDetails>
              <TypographyHeadingStyler>
                <Work />
                Mode
              </TypographyHeadingStyler>
              <TypographyStyler>
                Office
              </TypographyStyler>
            </InternshipContentDetails>
            <InternshipContentDetails>
              <TypographyHeadingStyler>
                <CalendarMonth /> Start Date
              </TypographyHeadingStyler>
              <TypographyStyler>
                {item.from}
              </TypographyStyler>
            </InternshipContentDetails>
            <InternshipContentDetails>
              <TypographyHeadingStyler>
                <LocationOnOutlined /> Office Location
              </TypographyHeadingStyler>
              <TypographyStyler>
                Pune India
              </TypographyStyler>
            </InternshipContentDetails>
          </InternshipContent>
          <ApplyWrapper>
            <Typography>Posted by:-</Typography>
            <ApplyButtonWrapper>
              <Link  href="/" id="link" style={{textDecoration:"none",padding:"10px 10px",border:"2px solid #e8e8e8",color:"#000",}}>
                 View Details
              </Link>
              <ButtonStyler>Apply</ButtonStyler>
            </ApplyButtonWrapper>
          </ApplyWrapper>
         </InternShipSectionWrapper>
      ))}
     
    </Fragment>
  );
};

export default InternshipSection;
