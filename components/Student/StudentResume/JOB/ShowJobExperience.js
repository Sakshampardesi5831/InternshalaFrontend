import React, { Fragment, useEffect, useState } from "react";
import {
  DescriptionOutlined,
  EditOutlined,
  AddOutlined,
  WorkOutline,
  ExpandMoreOutlined,
  ExpandLessOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  Dialog,
  styled,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  InputBase,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import instance from "@/axiosConfig";
import { asyncCurrentStudent } from "@/store/Actions/StudentAction";
/**------------------------------------------------------------------------ */
const StudentJobExperienceWrapper = styled(Box)({
  width: "100%",
  minHeight: "80vh",
  border: "2px solid #000",
  padding: "10px 20px",
});
const StudentJobExperienceWrapper_NavPart = styled(Box)({
  width: "100%",
  height: "20vh",
  border: "2px solid #e8e8e8",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 15px",
  borderRadius: "10px",
  marginTop: "10px",
});
const StudentJobExperienceWrapper_NavPart_Section1 = styled(Box)({
  width: "70%",
  height: "90%",
  // border:"2px solid #000",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
  padding: "10px 15px",
});
const StudentJobExperienceWrapper_NavPart_ContentWrapper = styled(Box)({
  width: "90%",
  height: "100%",
  // border:'2px solid red',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "15px",
  padding: "5px 15px",
});
const AddJobHeading = styled(Typography)({
  fontWeight: "900",
  fontSize: "18px",
  opacity: "0.8",
});
const AddSubHeading = styled(Typography)({
  fontSize: "15px",
  opacity: "0.7",
});
const AddButtonStyler = styled(Button)({
  border: "1px solid #142683",
  padding: "10px 10px",
  color: "#142683",
  fontSize: "15px",
  fontWeight: "700",
});
/*---------------------------STUDENT DYNAMIC JOB EXPERIENCE SECTION--------------------------------------------*/
const DynamicJobWrapper = styled(Box)({
  width: "100%",
  minHeight: "25vh",
  border: "2px solid #e8e8e8",
  marginTop: "10px",
  padding: "10px 15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "15px",
});
const DynamicJobWrapperSection1 = styled(Box)({
  width: "70%",
  minHeight: "20vh",
  // border:"2px solid #000",
  padding: "10px 10px",
});
const DynamicJobEditButton = styled(Button)({
  border: "2px solid #142683",
  padding: "5px 10px",
  color: "#142683",
});
const DynamicCompanyName = styled(Typography)({
  fontSize: "25px",
  fontWeight: "700",
  opacity: "0.7",
  padding: "0 15px",
});
const DynamicSubheading = styled(Typography)({
  fontSize: "15px",
  fontWeight: "400",
  opacity: "0.7",
  marginTop: "10px",
  padding: "0 15px",
});
const DynamicDateWrapper = styled(Box)({
  width: "60%",
  padding: "10px 15px",
  //   border:"2px solid #000",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: "5px",
  gap: "15px",
  opacity: "0.5",
});
const DynamicDates = styled(Typography)({
  fontSize: "15px",
  fontWeight: "700",
});
const DynamicDescription = styled(Box)({
  width: "100%",
  padding: "10px 0px",
  //   border:"2px solid #000"
});
const DynamicDescriptionStyler = styled(Accordion)({
  boxShadow: "none",
  border: "1px solid #e8e8e8",
});
const DynamicSummaryStyler = styled(Typography)({
  fontSize: "15px",
  fontWeight: "700",
  opacity: "0.7",
});
const DynamicDetailsStyler = styled(Typography)({
  fontSize: "15px",
  fontWeight: "500",
  opacity: "0.5",
});
/**---------------------------EDIT DIALOG SECTION START-------------------------------------------- */
const dialogStyler = {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "60%",
  height: "100%",
  borderRadius: "15px",
  padding: "20px 15px",
};
const JobDialogWrapper = styled(Box)({
  width: "100%",
  height: "100%",
  // border:"2px solid #000"
});
const JobDialogWrapperNavHead = styled(Box)({
  width: "100%",
  padding: "10px 15px",
  height: "10%",
  //   border:"2px solid #000",
  display: "flex",
  alignItems: "center",
});
const HeadingStyler = styled(Typography)({
  fontSize: "25px",
  fontWeight: "600",
  opacity: "0.7",
});
const JobDialogWrapper_form = styled(Box)({
  width: "100%",
  height: "75%",
  padding: "15px 5px",
  //  border:"2px solid red"
});
const JobDialogButtonWrapper = styled(Box)({
  width: "100%",
  height: "15%",
  padding: "10px 15px",
  //  border:"2px solid blue",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const EditWrapperSection2ButtonWrapper = styled(Box)({
  width: "40%",
  height: "90%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});
const DeleteButtonStyler = styled(Button)({
  padding: "10px 30px",
  color: "#fb7272",
  border: "2px solid #fb7272",
  "&:hover": {
    backgroundColor: "#fb7272",
    color: "#fff",
    fontWeight: "700",
  },
});
const EditWrapperCancelButton = styled(Button)({
  padding: "10px 20px",
  border: "2px solid #e8e8e8",
  color: "#000",
  fontWeight: "400",
  "&:hover": {
    fontWeight: "700",
  },
});
const EditWrapperSaveButton = styled(Button)({
  padding: "10px 30px",
  border: "2px solid #fff",
  color: "#fff",
  backgroundColor: "#142683",
  "&:hover": {
    backgroundColor: "#0b57d0",
  },
  fontWeight: "700",
});
/**--------------------------------------------------------------------- */
//FORM CONTENT
const JobDialogWrapper_Content = styled(Box)({
  width: "100%",
  padding: "10px 10px",
  //  border:"2px solid #000",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});
const JobDialogWrapperHeading = styled(Typography)({
  fontSize: "18px",
  fontWeight: "700",
  opacity: "0.5",
});
const JobDialogWrapperInput = styled(InputBase)({
  width: "100%",
  padding: "10px 8px",
  borderRadius: "10px",
  border: "2px solid #e8e8e8",
  fontSize: "18px",
});
const JobDialogWrapper_DateWrapper = styled(Box)({
  width: "100%",
  height: "18vh",
  padding: "10px 10px",
  // border:"2px solid #000",
  gap: "12px",
  display: "flex",
});
const JobDialogWrapper_StartEndWrapper = styled(Box)({
  width: "50%",
  height: "100%",
  // border:"2px solid #000",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "15px",
});
/**-----------------------------DIALOG END------------------------------------------ */
const ShowJobExperience = ({ setOpenJobForm }) => {
  const dispatch = useDispatch();
  const [newSelectedStartDate, setNewSelectedStartDate] = useState("");
  const [newSelectedEndDate, setNewSelectedEndDate] = useState("");
  const [updatedComapnyName, setUpdatedCompanyName] = useState("");
  const [updatedPosition, setUpdatedPosition] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedId, setUpdatedId] = useState("");
  const [editSingleJob, setEditSingleJob] = useState(false);
  const { student } = useSelector((state) => state.StudentReducer);
  const SingleJobValue = (id, comapanyname, position, description) => {
    setUpdatedId(id);
    setUpdatedCompanyName(comapanyname);
    setUpdatedPosition(position);
    setUpdatedDescription(description);
    setEditSingleJob(true);
  };
  const handlerStartDateChange = (date) => {
    setNewSelectedStartDate(date);
  };
  const handlerEndDateChange = (date) => {
    setNewSelectedEndDate(date);
  };
  const UpdateSingleJob = async () => {
    let jobEditData = {
      comapanyName: updatedComapnyName,
      position: updatedPosition,
      description: updatedDescription,
      startDate: newSelectedStartDate,
      endDate: newSelectedEndDate,
    };
    try {
      const { data } = await instance.post(
        `/resume/edit-jobs/${updatedId}`,
        jobEditData
      );
      window.alert(`${data.message}`);
      setUpdatedId("");
      setUpdatedCompanyName("");
      setUpdatedPosition("");
      setUpdatedDescription("");
      setNewSelectedStartDate("");
      setNewSelectedEndDate("");
      dispatch(asyncCurrentStudent());
      setEditSingleJob(false);
    } catch (error) {
      console.log(error);
    }
  };
  const DeleteSingleJob = async () => {
    try {
      const { data } = await instance.post(`/resume/delete-jobs/${updatedId}`);
      window.alert(`${data.message}`);
      dispatch(asyncCurrentStudent());
      setEditSingleJob(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch(asyncCurrentStudent());
  }, []);
  
  return (
    <Fragment>
      <StudentJobExperienceWrapper>
        <StudentJobExperienceWrapper_NavPart>
          <StudentJobExperienceWrapper_NavPart_Section1>
            <DescriptionOutlined style={{ fontSize: "50px", opacity: "0.7" }} />
            <StudentJobExperienceWrapper_NavPart_ContentWrapper>
              <AddJobHeading>ADD JOB EXPERIENCE</AddJobHeading>
              <AddSubHeading>fill the details with description</AddSubHeading>
            </StudentJobExperienceWrapper_NavPart_ContentWrapper>
          </StudentJobExperienceWrapper_NavPart_Section1>
          <AddButtonStyler onClick={() => setOpenJobForm(true)}>
            <AddOutlined />
            Add Job Exp
          </AddButtonStyler>
        </StudentJobExperienceWrapper_NavPart>
        {student?.resume?.jobs.map((dets) => (
          <DynamicJobWrapper key={dets.id}>
            <DynamicJobWrapperSection1>
              <DynamicCompanyName>{dets.comapanyName}</DynamicCompanyName>
              <DynamicSubheading>{dets.position}</DynamicSubheading>
              <DynamicDateWrapper>
                <DynamicDates>{dets.startDate.substring(0, 10)}</DynamicDates>-
                <DynamicDates>{dets.endDate.substring(0, 10)}</DynamicDates>
              </DynamicDateWrapper>
              <DynamicDescription>
                <DynamicDescriptionStyler>
                  <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                    <DynamicSummaryStyler>
                      Description Of Position
                    </DynamicSummaryStyler>
                  </AccordionSummary>
                  <AccordionDetails>
                    <DynamicDetailsStyler>
                      {dets.description}
                    </DynamicDetailsStyler>
                  </AccordionDetails>
                </DynamicDescriptionStyler>
              </DynamicDescription>
            </DynamicJobWrapperSection1>
            <DynamicJobEditButton
              onClick={() =>
                SingleJobValue(
                  dets.id,
                  dets.comapanyName,
                  dets.position,
                  dets.description,
                  dets.startDate.substring(0, 10),
                  dets.endDate.substring(0, 10)
                )
              }
            >
              <EditOutlined /> &nbsp; Edit
            </DynamicJobEditButton>
          </DynamicJobWrapper>
        ))}
      </StudentJobExperienceWrapper>
      {editSingleJob ? (
        <Dialog open={editSingleJob} PaperProps={{ sx: dialogStyler }}>
          <JobDialogWrapper>
            <JobDialogWrapperNavHead>
              <HeadingStyler>EDIT JOB SECTION</HeadingStyler>
            </JobDialogWrapperNavHead>
            <JobDialogWrapper_form>
              <JobDialogWrapper_Content>
                <JobDialogWrapperHeading>Company Name</JobDialogWrapperHeading>
                <JobDialogWrapperInput
                  placeholder="Update the name"
                  value={updatedComapnyName}
                  onChange={(e) => setUpdatedCompanyName(e.target.value)}
                />
              </JobDialogWrapper_Content>
              <JobDialogWrapper_Content>
                <JobDialogWrapperHeading>Position Name</JobDialogWrapperHeading>
                <JobDialogWrapperInput
                  placeholder="Type Position"
                  value={updatedPosition}
                  onChange={(e) => setUpdatedPosition(e.target.value)}
                />
              </JobDialogWrapper_Content>
              <JobDialogWrapper_Content>
                <JobDialogWrapperHeading>
                  Update the Description
                </JobDialogWrapperHeading>
                <JobDialogWrapperInput
                  placeholder="Type Description"
                  value={updatedDescription}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                />
              </JobDialogWrapper_Content>
              <JobDialogWrapper_DateWrapper>
                <JobDialogWrapper_StartEndWrapper>
                  <Typography
                    style={{
                      fontSize: "18px",
                      opacity: "0.5",
                      fontWeight: "700",
                    }}
                  >
                    Set the New Date
                  </Typography>
                  <DatePicker
                    className="customisethedate"
                    placeholderText="Select the Starting year"
                    selected={newSelectedStartDate}
                    value={newSelectedStartDate}
                    onChange={handlerStartDateChange}
                  />
                </JobDialogWrapper_StartEndWrapper>
                <JobDialogWrapper_StartEndWrapper>
                  <Typography
                    style={{
                      fontSize: "18px",
                      opacity: "0.5",
                      fontWeight: "700",
                    }}
                  >
                    Set the New Date
                  </Typography>
                  <DatePicker
                    className="customisethedate"
                    placeholderText="Select the Ending year"
                    selected={newSelectedEndDate}
                    value={newSelectedEndDate}
                    onChange={handlerEndDateChange}
                  />
                </JobDialogWrapper_StartEndWrapper>
              </JobDialogWrapper_DateWrapper>
            </JobDialogWrapper_form>
            <JobDialogButtonWrapper>
              <DeleteButtonStyler onClick={() => DeleteSingleJob()}>
                Delete Job
              </DeleteButtonStyler>
              <EditWrapperSection2ButtonWrapper>
                <EditWrapperCancelButton
                  onClick={() => setEditSingleJob(false)}
                >
                  Cancel
                </EditWrapperCancelButton>
                <EditWrapperSaveButton onClick={() => UpdateSingleJob()}>
                  Update Details
                </EditWrapperSaveButton>
              </EditWrapperSection2ButtonWrapper>
            </JobDialogButtonWrapper>
          </JobDialogWrapper>
        </Dialog>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ShowJobExperience;
