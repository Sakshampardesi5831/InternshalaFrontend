import React, { Fragment, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  styled,
  InputBase,
} from "@mui/material";
import { DescriptionOutlined } from "@mui/icons-material";
import NoInternship from "./NoInternship";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import instance from "@/axiosConfig";
import StudentInternshipSection from "./StudentInternshipSection";
/**------------------------------------------------------------------- */

const NoInternshipWrapper = styled(Box)({
  width: "100%",
  height: "60vh",
  border: "2px solid #000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const dialogStyler = {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "60%",
  height: "95%",
  borderRadius: "15px",
  padding: "20px 15px",
};
/*--------------------------------------------------------------------------*/
const InternshipDialogWrapper = styled(Box)({
  width: "100%",
  height: "100%",
  // border: "2px solid red",
});

const IntershipDialogHeading = styled(Box)({
  width: "100%",
  padding: "10px 15px",
  // border: "2px solid #000",
});

const Heading = styled(Typography)({
  fontSize: "25px",
  fontWeight: "700",
  opacity: "0.7",
});

const InternshipFormWrapper = styled(Box)({
  width: "100%",
  height: "80%",
  // border: "2px solid #000",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

const InternshipButtonWrapper = styled(Box)({
  width: "100%",
  padding: "10px 15px",
  // border: "1px solid red",
  display: "flex",
  justifyContent: "flex-end",
  gap: "15px",
  alignItems: "center",
});

const InternshipSaveButton = styled(Button)({
  padding: "10px 30px",
  border: "2px solid #fff",
  color: "#fff",
  backgroundColor: "#142683",
  "&:hover": {
    backgroundColor: "#0b57d0",
  },
  fontWeight: "700",
});
const InternshipCancelButton = styled(Button)({
  padding: "10px 20px",
  border: "2px solid #e8e8e8",
  color: "#000",
  fontWeight: "400",
  "&:hover": {
    fontWeight: "700",
  },
});

const InternshipFormContent = styled(Box)({
  width: "100%",
  padding: "10px 15px",
  // border: "2px solid #000",
});

const InternshipContentTypo = styled(Typography)({
  fontWeight: "700",
  fontSize: "18px",
  color: "#000",
  opacity: "0.5",
});

const InternshipContentInput = styled(InputBase)({
  width: "100%",
  padding: "10px 8px",
  borderRadius: "8px",
  fontSize: "18px",
  border: "2px solid #e8e8e8",
  "&:placeholder": {
    color: "#000",
  },
});

const PositionAndPeriodWrapper = styled(Box)({
  width: "100%",
  padding: "10px 0px",
  //  border:"2px solid green",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "10px",
});
const InternshipPosition = styled(Box)({
  width: "50%",
  padding: "5px 5px",
});
const InternshipPositionHeading = styled(Typography)({
  fontSize: "18px",
  fontWeight: "700",
  opacity: "0.7",
});
const InternShipPositionInput = styled(InputBase)({
  width: "80%",
  padding: "10px 8px",
  borderRadius: "8px",
  fontSize: "18px",
  border: "2px solid #e8e8e8",
  "&:placeholder": {
    color: "#000",
  },
});
const InternshipPeriod = styled(Box)({
  width: "50%",
  padding: "5px 10px",
});

const InternshipPeriodHeading = styled(Typography)({
  fontSize: "18px",
  fontWeight: "700",
  opacity: "0.7",
});
const InternShipPeriodInput = styled(InputBase)({
  width: "80%",
  padding: "10px 8px",
  borderRadius: "8px",
  fontSize: "18px",
  border: "2px solid #e8e8e8",
  "&:placeholder": {
    color: "#000",
  },
});

const InternshipDateWrapper = styled(Box)({
  width: "100%",
  paddingLeft: "10px",
  // border: "2px solid green",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const DateWrapper = styled(Box)({
  width: "50%",
  padding: "10px 0px",
  // border: "2px solid #000",
});
const DateWrapperTypo = styled(Typography)({
  fontSize: "18px",
  fontWeight: "700",
  opacity: "0.7",
});

/**---------------------------------------------------------------------- */
const StudentInternship = () => {
  const { student } = useSelector((state) => state.StudentReducer);
  const [openInternship, setOpenInternship] = useState(false);
  const [comapanyName, setCompanyName] = useState("");
  const [domain, setDomain] = useState("");
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState("");
  const [internStart, setInternStart] = useState(new Date());
  const [internEnd, setInternEnd] = useState(new Date());
  const internStartHandler = (date) => {
    setInternStart(date);
  };
  const internEndHandler = (date) => {
    setInternEnd(date);
  };
  const saveDetailsHandler = async () => {
    if (comapanyName === "" && domain === "" && description === "") {
      return;
    }
    const internshipData = {
      comapanyName,
      domain,
      duration,
      description,
      internStart,
      internEnd,
    };
    try {
      const { data } = await instance.post(
        "/resume/add-internship",
        internshipData
      );
      window.alert(`${data.message}`);
      setCompanyName("");
      setDomain("");
      setDuration(0);
      setDescription("");
      setOpenInternship(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      {student?.resume?.internships.length===0 ?<NoInternshipWrapper>
        <NoInternship setOpenInternship={setOpenInternship} />
      </NoInternshipWrapper>:<StudentInternshipSection setOpenInternship={setOpenInternship} />}
      <Dialog open={openInternship} PaperProps={{ sx: dialogStyler }}>
        <InternshipDialogWrapper>
          <IntershipDialogHeading>
            <Heading>Fill your Internship</Heading>
          </IntershipDialogHeading>
          <InternshipFormWrapper>
          {/*---------------------FORM SECTION------------------------------*/}
            <InternshipFormContent>
              <InternshipContentTypo>Company Name</InternshipContentTypo>
              <InternshipContentInput
                onChange={(e) => setCompanyName(e.target.value)}
                value={comapanyName}
                placeholder="Enter the Company Name"
              />
            </InternshipFormContent>
            <InternshipFormContent>
              <PositionAndPeriodWrapper>
                <InternshipPosition>
                  <InternshipPositionHeading>
                    Type the Domain you Work
                  </InternshipPositionHeading>
                  <InternShipPositionInput
                    onChange={(e) => setDomain(e.target.value)}
                    value={domain}
                    placeholder="Enter the Domain"
                  />
                </InternshipPosition>
                <InternshipPeriod>
                  <InternshipPeriodHeading>
                    Enter the Duration of Internship
                  </InternshipPeriodHeading>
                  <InternShipPeriodInput
                    type="number"
                    placeholder="Enter the Duration in Month"
                    onChange={(e) => setDuration(e.target.value)}
                    value={duration}
                  />
                </InternshipPeriod>
              </PositionAndPeriodWrapper>
            </InternshipFormContent>
            <InternshipFormContent>
              <InternshipDateWrapper>
                <DateWrapper>
                  <DateWrapperTypo>Enter the Starting Date</DateWrapperTypo>
                  <DatePicker
                    className="customisethedate"
                    placeholderText="Select the Starting Month"
                    selected={internStart}
                    value={internStart}
                    onChange={internStartHandler}
                  />
                </DateWrapper>
                <DateWrapper>
                  <DateWrapperTypo>Enter the Ending Date</DateWrapperTypo>
                  <DatePicker
                    className="customisethedate"
                    placeholderText="Select the Starting Month"
                    selected={internEnd}
                    value={internEnd}
                    onChange={internEndHandler}
                  />
                </DateWrapper>
              </InternshipDateWrapper>
            </InternshipFormContent>
            <InternshipFormContent>
              <InternshipContentTypo>
                Enter the Description of Work
              </InternshipContentTypo>
              <InternshipContentInput
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Type the Description"
              />
            </InternshipFormContent>
          {/*---------------------------------------------------------------*/}
          </InternshipFormWrapper>
          <InternshipButtonWrapper>
            <InternshipCancelButton onClick={() => setOpenInternship(false)}>
              Cancel
            </InternshipCancelButton>
            <InternshipSaveButton onClick={() => saveDetailsHandler()}>
              Save Details
            </InternshipSaveButton>
          </InternshipButtonWrapper>
        </InternshipDialogWrapper>
      </Dialog>
    </Fragment>
  );
};

export default StudentInternship;
