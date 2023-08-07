import React, { Fragment, useEffect, useState } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import {} from "@mui/icons-material";
import { Share } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
/**------------------------------------------------------------------------- */
const AppliedSectionWrapper = styled(Box)({
  width: "75%",
  height: "calc(100vh - 80px)",
  overflowY: "auto",
  overflow: "hidden",
});
const AppliedSectionNavbar = styled(Box)({
  width: "100%",
  padding: "10px 15px",
  // border: "2px solid black",
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const AppliedHeadingStyler = styled(Typography)({
  fontSize: "20px",
  fontWeight: "700",
  cursor: "pointer",
  color: "#000",
  padding: "5px 10px",
  borderRight: "3px solid #eeee",
  "&:hover": {
    backgroundColor: "#eeee",
    color: "#445ee2",
  },
});

const AppliedJobSection = styled(Box)({
  width: "100%",
  height: "50vh",
  border: "2px solid #eeee",
  marginTop: "10px",
});
const AppliedInternshipSection = styled(Box)({
  width: "100%",
  height: "40vh",
  border: "2px solid #eeee",
  marginTop: "10px",
});
const AppliedInternshipSectionHeadingIconWrapper = styled(Box)({
  display: "flex",
});
const AppliedInternshipCompanyHeading = styled(Box)({
  width: "100%",
  padding: "10px 20px",
  // border: "2px solid #000",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const AppliedInternshipCompanyNameStyler = styled(Typography)({
  fontSize: "25px",
  fontWeight: "700",
});

const AppliedInternshipFeedBack = styled(Box)({
  width: "100%",
  padding: "10px 20px",
  //  border:"2px solid #000",
  marginTop: "15px",
});
const AppliedButtonWrapper = styled(Box)({
  width: "100%",
  padding: "10px 20px",
  // border:"2px solid #000",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "15px",
});

const ButtonStyler = styled(Button)({
  border: "2px solid #eeee",
  padding: "10px 25px",
});

/**---------------------------------------------------------------------------- */
const StudentAppliedSection = ({ student }) => {
  const router=useRouter();
  const [isJobs, setIsJobs] = useState(false);
  const [isInternship, setIsInternship] = useState(false);
  const jobHandler = () => {
    setIsJobs(true);
    setIsInternship(false);
  };
  const internshipHandler = () => {
    setIsJobs(false);
    setIsInternship(true);
  };
  return (
    <Fragment>
      <AppliedSectionWrapper>
        <AppliedSectionNavbar>
          <AppliedHeadingStyler onClick={jobHandler} style={isJobs ?{color:"#445ee2"} :{color:"#000"}}>
            Applied Jobs({student?.jobs.length})
          </AppliedHeadingStyler>
          <AppliedHeadingStyler onClick={internshipHandler} style={isInternship ?{color:"#445ee2"} :{color:"#000"}}>
            Applied Internships({student?.internships.length})
          </AppliedHeadingStyler>
        </AppliedSectionNavbar>
        {isInternship
          ? student?.internships.map((item) => (
              <AppliedInternshipSection key={item._id}>
                <AppliedInternshipCompanyHeading>
                  <Box>
                    <AppliedInternshipCompanyNameStyler>
                       {item.profile}
                    </AppliedInternshipCompanyNameStyler>
                    <Typography style={{ fontSize: "15px", opacity: "0.7" }}>
                      Mumbai India
                    </Typography>
                  </Box>
                  <Typography>
                    <Share />
                  </Typography>
                </AppliedInternshipCompanyHeading>
                <AppliedInternshipFeedBack>
                  <Typography style={{ fontSize: "18px", fontWeight: "700" }}>
                    FeedBack:
                  </Typography>
                  <Typography style={{ opacity: "0.7", marginTop: "5px" }}>
                    they will contact with within 3 to 4 days
                  </Typography>
                </AppliedInternshipFeedBack>
                <AppliedButtonWrapper>
                  <Typography style={{ opacity: "0.7", fontWeight: "700" }}>
                    Posted at:-{item.updatedAt.substring(0,10)}
                  </Typography>
                  <ButtonStyler onClick={()=>router.push(`/auth/job/${item._id}`)}>View Details</ButtonStyler>
                </AppliedButtonWrapper>
              </AppliedInternshipSection>
            ))
          : ""}
        {isJobs
          ? student?.jobs.map((item) => (
              <AppliedInternshipSection key={item._id}>
                <AppliedInternshipCompanyHeading>
                  <Box>
                    <AppliedInternshipCompanyNameStyler>
                      Company
                    </AppliedInternshipCompanyNameStyler>
                    <Typography style={{ fontSize: "15px", opacity: "0.7" }}>
                      Company Location
                    </Typography>
                  </Box>
                  <Typography>
                    <Share />
                  </Typography>
                </AppliedInternshipCompanyHeading>
                <AppliedInternshipFeedBack>
                  <Typography style={{ fontSize: "18px", fontWeight: "700" }}>
                    FeedBack:
                  </Typography>
                  <Typography style={{ opacity: "0.7", marginTop: "5px" }}>
                    they will contact with within 3 to 4 days
                  </Typography>
                </AppliedInternshipFeedBack>
                <AppliedButtonWrapper>
                  <Typography style={{ opacity: "0.7", fontWeight: "700" }}>
                    Posted at:-
                  </Typography>
                  <ButtonStyler>View Details</ButtonStyler>
                </AppliedButtonWrapper>
              </AppliedInternshipSection>
            ))
          : ""}
      </AppliedSectionWrapper>
    </Fragment>
  );
};

export default StudentAppliedSection;
