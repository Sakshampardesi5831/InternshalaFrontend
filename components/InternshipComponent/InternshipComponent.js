import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentDashBoardNavbar from "@/components/Student/StudentDashBoardNavbar";
import StudentDashboard from "@/components/Student/StudentDashboard";
import SideNav from "../SideNav";
import { useRouter } from "next/router";
import InternshipSection from "./InternshipSection";
import { Box, styled } from "@mui/material";
const InternshipMain = styled(Box)({
  width: "100%",
  height: "calc(100vh - 80px)",
  display: "flex",
  gap:"10px"
});
const InternshipWrapper = styled(Box)({
  width: "75%",
  height: "calc(100vh - 80px)",
  overflow: "hidden",
  overflowY: "auto",
});
const InternshipComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, student } = useSelector(
    (state) => state.StudentReducer
  );
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);
  return (
    <Fragment>
      <StudentDashBoardNavbar student={student} />
      <InternshipMain>
        <SideNav />
        <InternshipWrapper>
          <InternshipSection/>
        </InternshipWrapper>
      </InternshipMain>
    </Fragment>
  );
};

export default InternshipComponent;
