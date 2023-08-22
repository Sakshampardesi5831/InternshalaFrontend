import React, { Fragment, useEffect, useState } from "react";
import { Box, Typography, Button, InputBase, Dialog,styled,Accordion,AccordionDetails,AccordionSummary } from "@mui/material";
import {
  DescriptionOutlined,
  AddOutlined,
  EditOutlined,
  ExpandLessOutlined
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { asyncCurrentStudent } from "@/store/Actions/StudentAction";
import instance from "@/axiosConfig";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
/**----------------------------------------------------------------------- */

const CoursesSectionWrapper=styled(Box)({
   width:"100%",
   minHeight:"80vh",
  //  border: "2px solid #000",
   padding: "10px 20px",
});
const CoursesSectionNavPart=styled(Box)({
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

const CoursesSectionDetails=styled(Box)({
  width: "70%",
  height: "90%",
  // border:"2px solid #000",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
  padding: "10px 15px",
});
 
const CoursesContentWrapper=styled(Box)({
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
const AddCoursesHeading = styled(Typography)({
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
/**----------------------------------------------------------------------- */
const DynamicCoursesWrapper=styled(Box)({
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
const DynamicCoursesDetails=styled(Box)({
  width: "70%",
  minHeight: "20vh",
  // border:"2px solid #000",
  padding: "10px 10px",
});

const DynamicEditButton=styled(Button)({
  border: "2px solid #142683",
  padding: "5px 10px",
  color: "#142683",
});

const DynamicHeading=styled(Typography)({
  fontSize: "25px",
  fontWeight: "700",
  opacity: "0.7",
  padding: "0 15px",
});
const DynamicSubHeading=styled(Typography)({
  fontSize: "15px",
  fontWeight: "400",
  opacity: "0.7",
  marginTop: "10px",
  padding: "0 15px",
});
const DynamicDateWrapper=styled(Box)({
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
/**----------------------------------------------------------------------- */
const dialogStyler = {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "60%",
  height: "100%",
  borderRadius: "15px",
  padding: "20px 15px",
};
const CoursesDialogWrapper = styled(Box)({
  width: "100%",
  height: "100%",
  // border:"2px solid #000"
});
const CoursesDialogWrapperNavHead = styled(Box)({
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
const CoursesDialogWrapper_form = styled(Box)({
  width: "100%",
  height: "75%",
  padding: "15px 5px",
  //  border:"2px solid red"
});
const CoursesDialogButtonWrapper = styled(Box)({
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
/**-------FORM STYLING---------------------------------------------------------------- */
const CoursesDialogWrapper_Content = styled(Box)({
  width: "100%",
  padding: "10px 10px",
  //  border:"2px solid #000",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});
const CoursesDialogWrapperHeading = styled(Typography)({
  fontSize: "18px",
  fontWeight: "700",
  opacity: "0.5",
});
const CoursesDialogWrapperInput = styled(InputBase)({
  width: "100%",
  padding: "10px 8px",
  borderRadius: "10px",
  border: "2px solid #e8e8e8",
  fontSize: "18px",
});
const CoursesDialogWrapper_DateWrapper = styled(Box)({
  width: "100%",
  height: "18vh",
  padding: "10px 10px",
  // border:"2px solid #000",
  gap: "12px",
  display: "flex",
});
const CoursesDialogWrapper_StartEndWrapper = styled(Box)({
  width: "50%",
  height: "100%",
  // border:"2px solid #000",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "15px",
});
/**----------------------------------------------------------------------- */
const StudentCoursesSection = ({ setOpenCourses }) => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.StudentReducer);
  const [updatedId,setUpdatedId]=useState("");
  const [TrainingName, setTrainingName] = useState("");
  const [Organization, setOrganizationName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [editCoursesOpen,setEditCoursesOpen]=useState(false);
  const handleStateDate = (date) => {
    setStartDate(date);
  };
  const handleEndDate = (date) => {
    setEndDate(date);
  };
  const GetSingleCoursesValue=(id,trainingname,organization,description)=>{
       setUpdatedId(id);
       setTrainingName(trainingname);
       setOrganizationName(organization);
       setDescription(description);
       setEditCoursesOpen(true);
   }
   const UpdateCoursesDetails= async ()=>{
      let updatedData={
          TrainingName:TrainingName,
          Organization:Organization,
          description:description,
          startDate:startDate,
          endDate:endDate
      }
      try {
       const {data} =await instance.post(`/resume/edit-courses/${updatedId}`,updatedData);
       window.alert(`${data.message}`);
       setTrainingName("");
       setOrganizationName("");
       setDescription("");
       setStartDate("");
       setEndDate("");
       dispatch(asyncCurrentStudent());
       setEditCoursesOpen(false);
      } catch (error) {
         console.log(error);
      }
   }
   const DeleteCourses=async ()=>{
      try {
        const {data}=await instance.post(`/resume/delete-courses/${updatedId}`);
        window.alert(`${data.message}`);
        dispatch(asyncCurrentStudent());
        setEditCoursesOpen(false);
      } catch (error) {
        console.log(error);
      }
   }
  useEffect(() => {
    dispatch(asyncCurrentStudent());
  }, []);
  return (
    <Fragment>
       <CoursesSectionWrapper>
          <CoursesSectionNavPart>
             <CoursesSectionDetails>
                <DescriptionOutlined style={{ fontSize: "50px", opacity: "0.7" }} />
                 <CoursesContentWrapper>
                    <AddCoursesHeading >Add Courses</AddCoursesHeading >
                    <AddSubHeading >Fill the Form of Certification</AddSubHeading >
                 </CoursesContentWrapper>
             </CoursesSectionDetails>
             <AddButtonStyler><AddOutlined/>Add Courses</AddButtonStyler>
          </CoursesSectionNavPart>
          {student?.resume?.courses.map((dets)=>(
              <DynamicCoursesWrapper key={dets.id}>
              <DynamicCoursesDetails>
                 <DynamicHeading>{dets.TrainingName}</DynamicHeading>
                 <DynamicSubHeading>{dets.Organization}</DynamicSubHeading>
                 <DynamicDateWrapper>
                    <DynamicDates>{dets.startDate.substring(0,10)}</DynamicDates>-<DynamicDates>{dets.endDate.substring(0,10)}</DynamicDates>
                 </DynamicDateWrapper>
                 <DynamicDescription>
                    <DynamicDescriptionStyler>
                       <AccordionSummary expandIcon={<ExpandLessOutlined/>} >
                            <DynamicSummaryStyler>Description</DynamicSummaryStyler>
                       </AccordionSummary>
                       <AccordionDetails>
                            <DynamicDetailsStyler>{dets.description}</DynamicDetailsStyler>
                       </AccordionDetails>
                    </DynamicDescriptionStyler>
                 </DynamicDescription>
               </DynamicCoursesDetails>
              <DynamicEditButton onClick={()=>GetSingleCoursesValue(dets.id,dets.TrainingName,dets.Organization,dets.description)}><EditOutlined/>Edit</DynamicEditButton>
             </DynamicCoursesWrapper>
          ))}
       </CoursesSectionWrapper>
       {editCoursesOpen ?
           <Dialog  open={editCoursesOpen} PaperProps={{sx:dialogStyler}} >
           <CoursesDialogWrapper>
              <CoursesDialogWrapperNavHead>
                 <HeadingStyler>Update the Course Details</HeadingStyler>
              </CoursesDialogWrapperNavHead>
              {/**-------------------------------------------------- */}
              <CoursesDialogWrapper_form >
                 <CoursesDialogWrapper_Content>
                    <CoursesDialogWrapperHeading>Training Name</CoursesDialogWrapperHeading>
                    <CoursesDialogWrapperInput value={TrainingName} onChange={(e)=>setTrainingName(e.target.value)}  placeholder="Enter the Course Name"/>
                 </CoursesDialogWrapper_Content>
                 <CoursesDialogWrapper_Content>
                    <CoursesDialogWrapperHeading>Organization Name</CoursesDialogWrapperHeading>
                    <CoursesDialogWrapperInput value={Organization} onChange={(e)=>setOrganizationName(e.target.value)}  placeholder="Enter the Organization Name"/>
                 </CoursesDialogWrapper_Content>
                 <CoursesDialogWrapper_Content>
                    <CoursesDialogWrapperHeading>Description Name</CoursesDialogWrapperHeading>
                    <CoursesDialogWrapperInput value={description} onChange={(e)=>setDescription(e.target.value)}  placeholder="Enter the Description Name"/>
                 </CoursesDialogWrapper_Content>
                 <CoursesDialogWrapper_DateWrapper>
                    <CoursesDialogWrapper_StartEndWrapper>
                        <CoursesDialogWrapperHeading>Start Date</CoursesDialogWrapperHeading>
                        <DatePicker
                          className="customisethedate"
                          placeholderText="Select the Starting Date"
                          selected={startDate}
                           value={startDate}
                          onChange={handleStateDate}
                        />
                    </CoursesDialogWrapper_StartEndWrapper>
                    <CoursesDialogWrapper_StartEndWrapper>
                        <CoursesDialogWrapperHeading>End Date</CoursesDialogWrapperHeading>
                        <DatePicker
                          className="customisethedate"
                          placeholderText="Select the Ending Date"
                          selected={endDate}
                           value={endDate}
                          onChange={handleEndDate}
                        />
                    </CoursesDialogWrapper_StartEndWrapper>
                 </CoursesDialogWrapper_DateWrapper>
              </CoursesDialogWrapper_form >
              {/**--------------------------------------------------- */}
              <CoursesDialogButtonWrapper>
                   <DeleteButtonStyler onClick={()=>DeleteCourses()} >Delete Course</ DeleteButtonStyler>
                   <EditWrapperSection2ButtonWrapper>
                       <EditWrapperCancelButton onClick={()=>setEditCoursesOpen(false)}>Cancel</EditWrapperCancelButton >
                       <EditWrapperSaveButton onClick={()=>UpdateCoursesDetails()}>Update Details</EditWrapperSaveButton>
                   </EditWrapperSection2ButtonWrapper>
              </CoursesDialogButtonWrapper>
           </CoursesDialogWrapper>
          </Dialog>
       :""}
      
    </Fragment>
  
  )};

export default StudentCoursesSection;
