import React, { Fragment, useEffect, useState } from "react";
import { Box, Typography, Button, InputBase, styled } from "@mui/material";
import {} from "@mui/icons-material";
import instance from "@/axiosConfig";
import {useDispatch,useSelector} from 'react-redux'
import { asyncCurrentStudent } from "@/store/Actions/StudentAction";
/**------------------------------------------------------------------------- */
const CollegeFormWrapper = styled(Box)({
  width: "100%",
  height: "90%",
  // border:"2px solid #000",
  padding: "20px 20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const CollegeFormSection1Wrapper = styled(Box)({
  width: "100%",
  height: "80%",
  //  border:"2px solid red",
  display: "flex",
  gap: "15px",
});

const CollegeFormSection2Wrapper = styled(Box)({
  width: "100%",
  height: "20%",
  // border:"2px solid yellow",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "15px",
  padding: "0 20px",
});
const CollegeFormSection1_Form = styled(Box)({
  width: "50%",
  height: "100%",
  // border:"2px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});
const CollegeFormSection1_Form_Content = styled(Box)({
  width: "100%",
  padding: "10px 15px",
  // border:"2px solid #000"
});

const CollegeFormInputBase = styled(InputBase)({
  width: "100%",
  padding: "10px 8px",
  borderRadius: "8px",
  fontSize: "18px",
  border: "2px solid #e8e8e8",
  "&:placeholder": {
    color: "#000",
  },
  marginTop: "10px",
});

const CollegeFormLabel = styled(Typography)({
  fontWeight: "700",
});

const CollegeForm2CancelButton = styled(Button)({
  padding: "10px 20px",
  border: "2px solid #e8e8e8",
  color: "#000",
  fontWeight: "400",
  "&:hover": {
    fontWeight: "700",
  },
});
const CollegeForm2SaveButton = styled(Button)({
  padding: "10px 30px",
  border: "2px solid #fff",
  color: "#fff",
  backgroundColor: "#142683",
  "&:hover": {
    backgroundColor: "#0b57d0",
  },
  fontWeight: "700",
});

/**-------------------------------------------------------------------------- */
const CollegeForm = ({ setOpendialog }) => {
  const dispatch=useDispatch();
  const [instituteName, setInstituteName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [passingYear, setPassingYear] = useState("");
  // const [endYear, setEndYear] = useState("");
  const [field, setField] = useState("");
  const [grade, setGrade] = useState("");

  const AddEducation = async () => {
    if (
      instituteName === "" &&
      specialization === "" &&
      passingYear === "" &&
      field === "" &&
      grade === ""
    ) {
      return;
    }
    let studentData = {
      instituteName,
      specialization,
      field,
      grade,
      passingYear
    };
    console.log(studentData);
    const { data } = await instance.post("/resume/add-edu", studentData);
    window.alert(`${data.message}`);
    setInstituteName("");
    setSpecialization("");
    setPassingYear("");
    setField("");
    setGrade("");
    dispatch(asyncCurrentStudent());
    setOpendialog(false);
  };
  useEffect(()=>{
    dispatch(asyncCurrentStudent());
  },[])
  return (
    <Fragment>
      <CollegeFormWrapper>
        <CollegeFormSection1Wrapper>
          <CollegeFormSection1_Form>
            <CollegeFormSection1_Form_Content>
              <CollegeFormLabel>University Name</CollegeFormLabel>
              <CollegeFormInputBase
                onChange={(e) => setInstituteName(e.target.value)}
                placeholder="Type College Name"
              />
            </CollegeFormSection1_Form_Content>
            <CollegeFormSection1_Form_Content>
              <CollegeFormLabel>Specialization</CollegeFormLabel>
              <CollegeFormInputBase
                onChange={(e) => setSpecialization(e.target.value)}
                placeholder="Type Specilize Degree"
              />
            </CollegeFormSection1_Form_Content>
            <CollegeFormSection1_Form_Content>
              <CollegeFormLabel>Passing Year</CollegeFormLabel>
              <CollegeFormInputBase
                onChange={(e) => setPassingYear(e.target.value)}
                placeholder="Type College Start Year"
              />
            </CollegeFormSection1_Form_Content>
          </CollegeFormSection1_Form>
          <CollegeFormSection1_Form>
            <CollegeFormSection1_Form_Content>
              <CollegeFormLabel>Field Of Study</CollegeFormLabel>
              <CollegeFormInputBase
                onChange={(e) => setField(e.target.value)}
                placeholder="Type Branch Name"
              />
            </CollegeFormSection1_Form_Content>
            <CollegeFormSection1_Form_Content>
              <CollegeFormLabel>Grade (Out of 10)</CollegeFormLabel>
              <CollegeFormInputBase
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Type CGPA"
              />
            </CollegeFormSection1_Form_Content>
            {/* <CollegeFormSection1_Form_Content>
              <CollegeFormLabel>End year</CollegeFormLabel>
              <CollegeFormInputBase
                onChange={(e) => setEndYear(e.target.value)}
                placeholder="Type College Passout Year"
              />
            </CollegeFormSection1_Form_Content> */}
          </CollegeFormSection1_Form>
        </CollegeFormSection1Wrapper>
        <CollegeFormSection2Wrapper>
          <CollegeForm2CancelButton onClick={() => setOpendialog(false)}>
            Cancel
          </CollegeForm2CancelButton>
          <CollegeForm2SaveButton onClick={AddEducation}>
            Save Details
          </CollegeForm2SaveButton>
        </CollegeFormSection2Wrapper>
      </CollegeFormWrapper>
    </Fragment>
  );
};

export default CollegeForm;
