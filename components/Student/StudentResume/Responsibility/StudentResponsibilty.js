import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  styled,
  InputBase,
  List,
  ListItem,
} from "@mui/material";
import {} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import NoResponsibility from "./NoResponsibility";
import StudentResponsibilitySection from "./StudentResponsibiltySection";
import instance from "@/axiosConfig";
import { asyncCurrentStudent } from "@/store/Actions/StudentAction";
/***------------------------------------------------------------------------ */
const NoResponsibilityWrapper = styled(Box)({
  width: "100%",
  height: "60vh",
  // border: "2px solid #000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
/**------------------------------------------------------------------------- */
const dialogStyler = {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "60%",
  height: "95%",
  borderRadius: "15px",
  padding: "20px 15px",
};

const DialogResponsibility = styled(Box)({
  width: "100%",
  height: "100%",
  // border:"2px solid #000"
});

const DialogHeading = styled(Box)({
  width: "100%",
  padding: "10px 15px",
  // border:"2px solid #000"
});

const Heading = styled(Typography)({
  fontSize: "20px",
  fontWeight: "700",
  opacity: "0.7",
  textTransform: "capitalize",
});

const DialogForm = styled(Box)({
  width: "100%",
  height: "75%",
  // border:"2px solid #000",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});
/**------------------------------------------------------------------------ */
const DialogFormContent = styled(Box)({
  width: "100%",
  padding: "10px 15px",
  //  border: "2px solid #000",
});

const DialogLabel = styled(Typography)({
  fontWeight: "700",
  fontSize: "18px",
  color: "#000",
  opacity: "0.5",
});

const DialogInput = styled(InputBase)({
  width: "100%",
  padding: "10px 8px",
  borderRadius: "8px",
  fontSize: "18px",
  border: "2px solid #e8e8e8",
  "&:placeholder": {
    color: "#000",
  },
  marginTop: "5px",
});
/***------------------------------------------------------------------------ */

const DialogButtonWrapper = styled(Box)({
  width: "100%",
  height: "15%",
  padding: "10px 15px",
  // border: "1px solid red",
  display: "flex",
  justifyContent: "flex-end",
  gap: "15px",
  alignItems: "center",
});

const DialogSaveButton = styled(Button)({
  padding: "10px 30px",
  border: "2px solid #fff",
  color: "#fff",
  backgroundColor: "#142683",
  "&:hover": {
    backgroundColor: "#0b57d0",
  },
  fontWeight: "700",
});

const DialogCancelButton = styled(Button)({
  padding: "10px 20px",
  border: "2px solid #e8e8e8",
  color: "#000",
  fontWeight: "400",
  "&:hover": {
    fontWeight: "700",
  },
});

/**------------------------------------------------------------------------- */
const StudentResponsibility = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.StudentReducer);
  const [responsibilityDialog, setResponsibilityDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [certification, setCertification] = useState("");
  const [skills, setSkills] = useState("");

  const AddResponsibilityDetails = async () => {
    let saveResponsibilityData = {
      title,
      description,
      certification,
      skills,
    };
    try {
      const { data } = await instance.post(
        "/resume/add-responsibility",
        saveResponsibilityData
      );
      window.alert(`${data.message}`);
      setTitle("");
      setDescription("");
      setCertification("");
      setSkills("");
      dispatch(asyncCurrentStudent());
      setResponsibilityDialog(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch(asyncCurrentStudent());
  }, []);
  return (
    <Fragment>
      {student?.resume?.responsibility.length === 0 ? (
        <NoResponsibilityWrapper>
          <NoResponsibility setResponsibilityDialog={setResponsibilityDialog} />
        </NoResponsibilityWrapper>
      ) : (
        <StudentResponsibilitySection
          setResponsibilityDialog={setResponsibilityDialog}
        />
      )}
      <Dialog open={responsibilityDialog} PaperProps={{ sx: dialogStyler }}>
        <DialogResponsibility>
          <DialogHeading>
            <Heading>Add Position Of Responsibility</Heading>
          </DialogHeading>
          <DialogForm>
            <DialogFormContent>
              <DialogLabel>Title</DialogLabel>
              <DialogInput
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="For eg VP Of RK hostel"
              />
            </DialogFormContent>
            <DialogFormContent>
              <DialogLabel>Describe your POR</DialogLabel>
              <DialogInput
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="What you did accomplish with this  POR"
              />
            </DialogFormContent>
            <DialogFormContent>
              <DialogLabel>Certification Courses</DialogLabel>
              <DialogInput
                onChange={(e) => setCertification(e.target.value)}
                value={certification}
                placeholder="Certification Link"
              />
            </DialogFormContent>
            <DialogFormContent>
              <DialogLabel>Skills Learned</DialogLabel>
              <DialogInput
                onChange={(e) => setSkills(e.target.value)}
                value={skills}
                placeholder="Skills Learned"
              />
            </DialogFormContent>
          </DialogForm>
          <DialogButtonWrapper>
            <DialogCancelButton onClick={() => setResponsibilityDialog(false)}>
              Cancel
            </DialogCancelButton>
            <DialogSaveButton onClick={() => AddResponsibilityDetails()}>
              Add Responsibility
            </DialogSaveButton>
          </DialogButtonWrapper>
        </DialogResponsibility>
      </Dialog>
    </Fragment>
  );
};

export default StudentResponsibility;
