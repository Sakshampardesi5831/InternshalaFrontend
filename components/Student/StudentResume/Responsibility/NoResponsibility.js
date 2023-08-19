import React, { Fragment } from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { AddOutlined, DescriptionOutlined } from "@mui/icons-material";

/*-------------------------------------------------------------------*/
const NoResponsibilityContent = styled(Box)({
  width: "40%",
  height: "40vh",
  border: "2px solid #e8e8e8",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});
const NoResponsibilitySubContent = styled(Box)({
  width: "100%",
  padding: "20px 20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
});
const NoResponsibilityHeading = styled(Typography)({
  fontSize: "22px",
  fontWeight: "700",
});
const NoResponsibilitySubHeading = styled(Typography)({
  fontSize: "14px",
  opacity: "0.5",
});
const NoResponsibilityButtonStyler = styled(Button)({
  border: "1px solid #142683",
  color: "#142683",
  padding: "10px 15px",
  fontWeight: "500",
  fontSize: "15px",
});
/**------------------------------------------------------------------ */
const NoResponsibility = ({ setResponsibilityDialog }) => {
  return (
    <Fragment>
      <NoResponsibilityContent>
        <DescriptionOutlined
          style={{ fontSize: "55px", fontWeight: "200", opacity: "0.7" }}
        />
        <NoResponsibilitySubContent>
          <NoResponsibilityHeading>
            Add Position of Responsibilities
          </NoResponsibilityHeading>
          <NoResponsibilitySubHeading>
            Add any PORs like college clubs, social service, etc.
          </NoResponsibilitySubHeading>
          <NoResponsibilityButtonStyler
            onClick={() => setResponsibilityDialog(true)}
          >
            <AddOutlined />
            Add Responsibility
          </NoResponsibilityButtonStyler>
        </NoResponsibilitySubContent>
      </NoResponsibilityContent>
    </Fragment>
  );
};

export default NoResponsibility;
