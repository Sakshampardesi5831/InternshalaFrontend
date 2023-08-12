import React, { Fragment, useState,useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  styled,
  Dialog,
  InputBase,
} from "@mui/material";
import {
  DescriptionOutlined,
  AddOutlined,
  Edit,
  EditOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import instance from "@/axiosConfig";
import { useRouter } from "next/router";
/***------------------------------------------------------------------------ */

const EducationWrapperMainHeading = styled(Box)({
  width: "100%",
  height: "20vh",
  // border:"2px solid #000",
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 20px",
  alignItems: "center",
});

const EducationWrapperSection1 = styled(Box)({
  width: "40%",
  height: "90%",
  padding: "10px",
  // border:"2px solid #000",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px",
});

const EducationWrapperSection1_Icon = styled(Box)({
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  backgroundColor: "#f2f2f2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const EducationWrapperSection1_content = styled(Box)({
  width: "calc(100% - 70px)",
  height: "90%",
  //  border:"2px solid #000",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "0px 10px",
  gap: "15px",
});

const EducationWrapperSection1_Content_styler = styled(Typography)({
  fontSize: "18px",
  fontWeight: "700",
});

const EducationWrapperSection2 = styled(Box)({
  width: "20%",
  height: "90%",
  //  border:'2px solid #000',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const EducationWrapperSection2_ButtonStyler = styled(Button)({
  padding: "10px 15px",
  color: "#142683",
  border: "2px solid #142683",
});

const DynamicEducationSection = styled(Box)({
  width: "100%",
  height: "20vh",
  padding: "10px 8px",
  border: "2px solid #e8e8e8",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "20px",
});

const DynamicEducationSection_content = styled(Box)({
  width: "50%",
  height: "95%",
  // border:"2px solid #000",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "10px",
  padding: "10px 15px",
});
const DyamicEducationSection_contentStyler = styled(Typography)({
  fontSize: "20px",
  fontWeight: "700",
});

const DyamicEducationSection_CollegeInfo = styled(Typography)({
  fontSize: "15px",
  fontWeight: "400",
  opacity: "0.7",
});

const DynamicCommonStyler = styled(Typography)({
  fontSize: "16px",
  opacity: "0.7",
});

const DynamicEditButton = styled(Box)({
  width: "20%",
  height: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const DynamicEditButtonStyler = styled(Button)({
  padding: "5px 10px",
  border: " 1px solid #142683",
  color: "#42683",
  fontWeight: "700",
  fontSize: "18px",
  "&:hover": {
    backgroundColor: "#f2f2f2",
  },
});
const dialogStyler = {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "65%",
  height: "90%",
  borderRadius: "15px",
  padding: "20px 15px",
};
/**------------------------------------------------------------------------ */

const EditFormMainHeading=styled(Box)({
  width:"100%",
  height:"10%",
  padding:"10px 20px"
});

const EditFormHeadingStyler=styled(Typography)({
    fontSize:"25px",
    fontWeight:"700",
    display:'flex',
    justifyContent:"center",
    alignItems:'center'
});
const EditFormWrapper = styled(Box)({
  width: "100%",
  height: "100%",
  // border: "2px solid #000",
  display:'flex',
  flexDirection:"column",
  gap:"10px"
});

const EditWrapperSection1 = styled(Box)({
  width: "100%",
  height: "70%",
  // border: "2px solid red",
  display: "flex",
});

const EditWrapperSection1_Form = styled(Box)({
  width: "50%",
  height: "100%",
  // padding: "10px 20px",
  // border: "2px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "10px 0px",
  gap:"15px"
});
const EditWrapperSection2_Form = styled(Box)({
  width: "50%",
  height: "100%",
  padding: "10px 0px",
  // border: "2px solid red",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "flex-start",
  gap:"15px"
});

const EditWrapperSection1_Form_Content=styled(Box)({
  width: "100%",
  padding: "10px 15px",
  // border:"2px solid #000"
});
const  EditWrapperSection1_Label=styled(Typography)({
     fontWeight:'700',
     fontSize:"20px"
});
const EditWrapperSection1_Input = styled(InputBase)({
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

const EditWrapperSection2 = styled(Box)({
  width: "100%",
  height: "20%",
  // border: "2px solid yellow",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 20px",
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
/**------------------------------------------------------------------------- */
const EducationSection = ({ setOpendialog }) => {
  const { student } = useSelector((state) => state.StudentReducer);
  const [editOpenDialog, setEditOpenDialog] = useState(false);
  const [updatedata, setUpdateData] = useState("");
  const [instituteData, setInstituteData] = useState("");
  const [specializationData, setSpecializationData] = useState("");
  const [gradeData, setGradeData] = useState("");
  const [passingyearData, setPassingYearData] = useState("");
  const [fieldData, setFieldData] = useState("");
  const router=useRouter();
  const DialogOpen = () => {
    setOpendialog(true);
  };
  console.log(updatedata);
  //this logic is for returning the id in the same page in react
  const EditForm = (
    id,
    instituteName,
    specialization,
    field,
    grade,
    passingYear
  ) => {
    setEditOpenDialog(true);
    setUpdateData(id);
    setInstituteData(instituteName);
    setSpecializationData(specialization);
    setFieldData(field);
    setGradeData(grade);
    setPassingYearData(passingYear);
  };
  const EditFormDetails= async ()=>{
      var updatedData={
        instituteName:instituteData,
        specialization:specializationData,
        field:fieldData,
        grade:gradeData,
        passingYear:passingyearData
      }
      try {
        const {data}= await instance.post(`/resume/edit-edu/${updatedata}`,updatedData);
        window.alert(`${data.message}`);
        setEditOpenDialog(false);
        router.reload(window.location.pathname);
      } catch (error) {
         console.log(error);
      }
  }
  const DeleteEducation=async ()=>{
    try {
      const {data} =await instance.post(`/resume/delete-edu/${updatedata}`);
      window.alert(`${data.message}`);
      setEditOpenDialog(false);
      router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Fragment>
      <EducationWrapperMainHeading>
        <EducationWrapperSection1>
          <EducationWrapperSection1_Icon>
            <DescriptionOutlined style={{ fontSize: "50px", opacity: "0.5" }} />
          </EducationWrapperSection1_Icon>
          <EducationWrapperSection1_content>
            <EducationWrapperSection1_Content_styler>
              Add Education Details
            </EducationWrapperSection1_Content_styler>
            <Typography style={{ opacity: "0.7" }}>
              Your School Details
            </Typography>
          </EducationWrapperSection1_content>
        </EducationWrapperSection1>
        <EducationWrapperSection2>
          <EducationWrapperSection2_ButtonStyler onClick={DialogOpen}>
            <AddOutlined />
            Add Education
          </EducationWrapperSection2_ButtonStyler>
        </EducationWrapperSection2>
      </EducationWrapperMainHeading>
      {student?.resume?.education.map((dets) => (
        <DynamicEducationSection key={dets.id}>
          <DynamicEducationSection_content>
            <DyamicEducationSection_contentStyler>
              {dets.instituteName}
            </DyamicEducationSection_contentStyler>
            <DyamicEducationSection_CollegeInfo>
              {dets.specialization}, {dets?.field}| {dets.grade} CGPA
            </DyamicEducationSection_CollegeInfo>
            <DynamicCommonStyler>{dets.passingYear}</DynamicCommonStyler>
          </DynamicEducationSection_content>
          <DynamicEditButton>
            <DynamicEditButtonStyler
              onClick={() =>
                EditForm(
                  dets.id,
                  dets.instituteName,
                  dets.specialization,
                  dets?.field,
                  dets.grade,
                  dets.passingYear
                )
              }
            >
              <EditOutlined color="#142683" />
              EDIT
            </DynamicEditButtonStyler>
          </DynamicEditButton>
        </DynamicEducationSection>
      ))}
      {editOpenDialog ? (
        <Dialog open={editOpenDialog} PaperProps={{ sx: dialogStyler }}>
          <EditFormWrapper>
            <EditFormMainHeading>
                <EditFormHeadingStyler>UPDATE EDUCATION DETAILS</EditFormHeadingStyler>
            </EditFormMainHeading>
            <EditWrapperSection1>
              <EditWrapperSection1_Form>
                   <EditWrapperSection1_Form_Content>
                       <EditWrapperSection1_Label>Institute Name</EditWrapperSection1_Label>
                       <EditWrapperSection1_Input onChange={(e)=>setInstituteData(e.target.value)}  value={instituteData} />
                   </EditWrapperSection1_Form_Content>
                   <EditWrapperSection1_Form_Content>
                       <EditWrapperSection1_Label>Specialization</EditWrapperSection1_Label>
                       <EditWrapperSection1_Input onChange={(e)=>setSpecializationData(e.target.value)}  value={specializationData} />
                   </EditWrapperSection1_Form_Content>
                   {fieldData ?
                     <EditWrapperSection1_Form_Content>
                     <EditWrapperSection1_Label>Field</EditWrapperSection1_Label>
                     <EditWrapperSection1_Input onChange={(e)=>setFieldData(e.target.value)}  value={fieldData} />
                   </EditWrapperSection1_Form_Content>   
                   :""} 
              </EditWrapperSection1_Form>
              <EditWrapperSection2_Form>
              <EditWrapperSection1_Form_Content>
                  <EditWrapperSection1_Label>Grade</EditWrapperSection1_Label>
                  <EditWrapperSection1_Input onChange={(e)=>setGradeData(e.target.value)}  value={gradeData} />
               </EditWrapperSection1_Form_Content>
               <EditWrapperSection1_Form_Content>
                  <EditWrapperSection1_Label>Passing Year</EditWrapperSection1_Label>
                  <EditWrapperSection1_Input onChange={(e)=>setPassingYearData(e.target.value)}  value={passingyearData} />
               </EditWrapperSection1_Form_Content>
              </EditWrapperSection2_Form>
            </EditWrapperSection1>
            <EditWrapperSection2>
              <DeleteButtonStyler onClick={()=>DeleteEducation()}>Delete Education</DeleteButtonStyler>
              <EditWrapperSection2ButtonWrapper>
                <EditWrapperCancelButton
                  onClick={() => setEditOpenDialog(false)}
                >
                  Cancel
                </EditWrapperCancelButton>
                <EditWrapperSaveButton onClick={()=>EditFormDetails()}>Update Details</EditWrapperSaveButton>
              </EditWrapperSection2ButtonWrapper>
            </EditWrapperSection2>
          </EditFormWrapper>
        </Dialog>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default EducationSection;
