import React, { Fragment, useState, useEffect } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import {} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import instance from "@/axiosConfig";
import StudentDashBoardNavbar from "../StudentDashBoardNavbar";
import StudentResumeSection from "./StudentResumeSection";
import { useRouter } from "next/router";
/**--------------------------------------------------------------------------- */

const StudentResumeWrapper = styled(Box)({
  width: "100%",
  height: "calc(100vh - 80px)",
  padding:"0px 15px",
  display:'flex',
  gap:"10px"
});

/**---------------------------------------------------------------------------- */

const StudentResume = () => {
  const router = useRouter();
  const { isAuthenticated, student } = useSelector(
    (state) => state.StudentReducer
  );
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated,student]);
  return (
    <Fragment>
      <StudentDashBoardNavbar student={student} />
      <StudentResumeWrapper>
        <StudentResumeSection student={student} />
      </StudentResumeWrapper>
    </Fragment>
  );
};

export default StudentResume;
