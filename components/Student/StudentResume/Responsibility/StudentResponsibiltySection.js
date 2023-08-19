import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  styled,
  Dialog,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  InputBase,
} from "@mui/material";
import {
  AddOutlined,
  DescriptionOutlined,
  EditOutlined,
  ExpandLessOutlined,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { asyncCurrentStudent } from "@/store/Actions/StudentAction";
import Link from "next/link";
import instance from "@/axiosConfig";
/**----------------------------------------------------------------------- */

const MainWrapper = styled(Box)({
  width: "100%",
  minHeight: "80vh",
  border: "2px solid #000",
  padding: "10px 20px",
});

const MainNavPart = styled(Box)({
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

const MainNavContent = styled(Box)({
  width: "70%",
  height: "90%",
  // border:"2px solid #000",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
  padding: "10px 15px",
});

const MainNavContentWrapper = styled(Box)({
  width: "90%",
  height: "100%",
  // border:"2px solid #000",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10px 15px",
  gap: "10px",
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

/**-------------------------------------------------------------------------- */
const DynamicWrapper = styled(Box)({
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

const DynamicSection1 = styled(Box)({
  width: "70%",
  minHeight: "20vh",
  // border:"2px solid #000",
  padding: "10px 10px",
});

const DynamicEditButton = styled(Button)({
  border: "2px solid #142683",
  padding: "5px 10px",
  color: "#142683",
});

const DynamicTitleHead = styled(Typography)({
  fontSize: "25px",
  fontWeight: "700",
  opacity: "0.7",
  padding: "0 15px",
});

const DynamicSubheading = styled(Typography)({
  fontSize: "15px",
  fontWeight: "500",
  opacity: "0.6",
  marginTop: "10px",
  padding: "0 15px",
});

const DynamicPara = styled(Typography)({
  fontSize: "15px",
  fontWeight: "500",
  opacity: "0.5",
});
/**------------------------------------------------------------------------ */
const dialogStyler = {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "60%",
  height: "95%",
  borderRadius: "15px",
  padding: "20px 15px",
};

const DialogWrapper = styled(Box)({
  width: "100%",
  height: "100%",
  // border:"2px solid #000"
});
const DialogWrapperNavHead = styled(Box)({
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

//FORM
const DialogForm = styled(Box)({
  width: "100%",
  height: "75%",
  padding: "15px 5px",
  //  border:"2px solid red"
});

const DialogButtonWrapper = styled(Box)({
  width: "100%",
  height: "15%",
  padding: "10px 15px",
  //  border:"2px solid blue",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const DialogButtonCollection = styled(Box)({
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

const DialogWrapper_Content = styled(Box)({
  width: "100%",
  padding: "10px 10px",
  //  border:"2px solid #000",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});
const DialogWrapperHeading = styled(Typography)({
  fontSize: "18px",
  fontWeight: "700",
  opacity: "0.5",
});

const DialogWrapperInput = styled(InputBase)({
  width: "100%",
  padding: "10px 8px",
  borderRadius: "10px",
  border: "2px solid #e8e8e8",
  fontSize: "18px",
});

/**------------------------------------------------------------------------ */
const StudentResponsibilitySection = ({ setResponsibilityDialog }) => {
  const dispatch = useDispatch();
  const [updatedId, setUpdatedId] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedSkills, setUpdatedSkills] = useState("");
  const [updatedCertification, setUpdatedCertification] = useState("");
  const { student } = useSelector((state) => state.StudentReducer);
  const [EditOpen, setEditOpen] = useState(false);

  const AllEditValues = (id, title, certification, skills, description) => {
    setUpdatedId(id);
    setUpdatedTitle(title);
    setUpdatedCertification(certification);
    setUpdatedSkills(skills);
    setUpdatedDescription(description);
    setEditOpen(true);
  };

  const UpdatedResponsibilityValues = async () => {
    let updateResponsibility = {
      title: updatedTitle,
      description: updatedDescription,
      certification: updatedCertification,
      skills: updatedSkills,
    };
    try {
      const { data } = await instance.post(
        `/resume/edit-responsibility/${updatedId}`,
        updateResponsibility
      );
      window.alert(`${data.message}`);
      setUpdatedTitle("");
      setUpdatedCertification("");
      setUpdatedSkills("");
      setUpdatedDescription("");
      dispatch(asyncCurrentStudent());
      setEditOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteCurrentResponsibility = async () => {
    try {
      const { data } = await instance.post(
        `/resume/delete-responsibility/${updatedId}`
      );
      window.alert(`${data.message}`);
      dispatch(asyncCurrentStudent());
      setEditOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(asyncCurrentStudent());
  }, []);
  return (
    <Fragment>
      <MainWrapper>
        <MainNavPart>
          <MainNavContent>
            <DescriptionOutlined style={{ fontSize: "50px", opacity: "0.7" }} />
            <MainNavContentWrapper>
              <AddJobHeading>Add Responsibility</AddJobHeading>
              <AddSubHeading>
                Fill the Responsibility to Stand Out
              </AddSubHeading>
            </MainNavContentWrapper>
          </MainNavContent>
          <AddButtonStyler onClick={() => setResponsibilityDialog(true)}>
            <AddOutlined /> Add Responsibility
          </AddButtonStyler>
        </MainNavPart>
        {student?.resume?.responsibility.map((dets) => (
          <DynamicWrapper key={dets.id}>
            <DynamicSection1>
              <DynamicTitleHead>{dets.title}</DynamicTitleHead>
              <DynamicSubheading>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    opacity: "0.7",
                  }}
                  href={`${dets.certification}`}
                >
                  Links of Certificate
                </Link>
              </DynamicSubheading>
              <DynamicSubheading>{dets.skills}</DynamicSubheading>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandLessOutlined />}>
                  <DynamicPara>Description</DynamicPara>
                </AccordionSummary>
                <AccordionDetails>
                  <DynamicPara>{dets.description}</DynamicPara>
                </AccordionDetails>
              </Accordion>
            </DynamicSection1>
            <DynamicEditButton
              onClick={() =>
                AllEditValues(
                  dets.id,
                  dets.title,
                  dets.certification,
                  dets.skills,
                  dets.description
                )
              }
            >
              <EditOutlined />
              Edit
            </DynamicEditButton>
          </DynamicWrapper>
        ))}
      </MainWrapper>
      <Dialog open={EditOpen} PaperProps={{ sx: dialogStyler }}>
        <DialogWrapper>
          <DialogWrapperNavHead>
            <HeadingStyler>Edit Details</HeadingStyler>
          </DialogWrapperNavHead>
          <DialogForm>
            <DialogWrapper_Content>
              <DialogWrapperHeading>Title</DialogWrapperHeading>
              <DialogWrapperInput
                placeholder="Enter the Title"
                onChange={(e) => setUpdatedTitle(e.target.value)}
                value={updatedTitle}
              />
            </DialogWrapper_Content>
            <DialogWrapper_Content>
              <DialogWrapperHeading>Certification</DialogWrapperHeading>
              <DialogWrapperInput
                placeholder="Paste the New Link"
                onChange={(e) => setUpdatedCertification(e.target.value)}
                value={updatedCertification}
              />
            </DialogWrapper_Content>
            <DialogWrapper_Content>
              <DialogWrapperHeading>Skills</DialogWrapperHeading>
              <DialogWrapperInput
                placeholder="Enter the Skills"
                onChange={(e) => setUpdatedSkills(e.target.value)}
                value={updatedSkills}
              />
            </DialogWrapper_Content>
            <DialogWrapper_Content>
              <DialogWrapperHeading>Description</DialogWrapperHeading>
              <DialogWrapperInput
                placeholder="Enter the Description"
                onChange={(e) => setUpdatedDescription(e.target.value)}
                value={updatedDescription}
              />
            </DialogWrapper_Content>
          </DialogForm>
          <DialogButtonWrapper>
            <DeleteButtonStyler onClick={() => DeleteCurrentResponsibility()}>
              Delete Responsibility
            </DeleteButtonStyler>
            <DialogButtonCollection>
              <EditWrapperCancelButton
                onClick={() => setResponsibilityDialog(false)}
              >
                Cancel
              </EditWrapperCancelButton>
              <EditWrapperSaveButton
                onClick={() => UpdatedResponsibilityValues()}
              >
                Update Details
              </EditWrapperSaveButton>
            </DialogButtonCollection>
          </DialogButtonWrapper>
        </DialogWrapper>
      </Dialog>
    </Fragment>
  );
};

export default StudentResponsibilitySection;
