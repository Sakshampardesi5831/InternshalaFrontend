import React, { Fragment, useEffect, useState } from 'react'
import {Box,Dialog,Button,styled,Typography,InputBase} from '@mui/material'
import {DescriptionOutlined} from '@mui/icons-material'
import {useSelector,useDispatch} from 'react-redux'
import NoCourses from './NoCourses'
import StudentCoursesSection from './StudentCoursesSection'
import { asyncCurrentStudent } from '@/store/Actions/StudentAction'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import instance from '@/axiosConfig'
/*--------------------------------------------------------------------**/
const NoCoursesWrapper=styled(Box)({
   width:"100%",
   height:"60vh",
  //  border:"2px solid #000",
   display:"flex",
   justifyContent:"center",
   alignItems:"center"
});
const dialogStyler = {
   maxWidth: "100%",
   maxHeight: "100%",
   width: "60%",
   height: "95%",
   borderRadius: "15px",
   padding: "20px 15px",
 };
 const DialogCourses = styled(Box)({
   width: "100%",
   height: "100%",
   border:"2px solid #000"
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
   height: "80%",
   border:"2px solid #000",
   display: "flex",
   flexDirection: "column",
   justifyContent: "space-around",
   alignItems: "center",
 });
 /**------------------------------------------------------------------- */
 const DialogButtonWrapper = styled(Box)({
   width: "100%",
   height: "12%",
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
/**---------FORM COMPONENTS----------------------------------------------------------- */
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
 const DialogWrapperForm_content_DateWrapper = styled(Box)({
   width: "100%",
   // border: "2px solid #000",
   padding: "10px 10px",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
 });
 const DialogWrapperForm_content_DateWrapper_styler = styled(Box)({
   width: "50%",
   padding: "10px 10px",
   // border: "2px solid #000",
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "start",
 });
/**-------------------------------------------------------------------- */
const StudentCourses = () => {
  const dispatch=useDispatch();
  const [OpenCourses,setOpenCourses]=useState(false);
  const {student} =useSelector((state)=>state.StudentReducer);
  const [TrainingName,setTrainingName]=useState("");
  const [Organization,setOrganizationName]=useState("");
  const [startDate,setStartDate]=useState("");
  const [endDate,setEndDate]=useState("");
  const [description,setDescription]=useState("");
   const handleStateDate=(date)=>{
         setStartDate(date);
   }
   const handleEndDate=(date)=>{
      setEndDate(date);
   }
  
   const SaveCoursesDetails= async ()=>{
       let courses={
          TrainingName,
          Organization,
          description,
          startDate,
          endDate,
       }   
       try {
         const {data}=await instance.post(`/resume/add-courses`,courses);
         window.alert(`${data.message}`);
         setTrainingName("");
         setOrganizationName("");
         setDescription("");
         setStartDate("");
         setEndDate("");
         dispatch(asyncCurrentStudent());
         setOpenCourses(false);
       } catch (error) {
         console.log(error);
       }
   }
  useEffect(()=>{
     dispatch(asyncCurrentStudent());
  },[])
  return (
    <Fragment>
      {student?.resume?.courses.length===0 ?   <NoCoursesWrapper>
          <NoCourses setOpenCourses={setOpenCourses} />
       </NoCoursesWrapper> :<StudentCoursesSection setOpenCourses={setOpenCourses}  />}
       <Dialog open={OpenCourses} PaperProps={{sx:dialogStyler}}>
         <DialogCourses>
            <DialogHeading>
               <Heading>Training Courses</Heading>
            </DialogHeading>
            <DialogForm>
               <DialogFormContent>
                  <DialogLabel>Course Name</DialogLabel>
                  <DialogInput value={TrainingName} onChange={(e)=>setTrainingName(e.target.value)} placeholder='Enter the Title Courses'/>
               </DialogFormContent>
               <DialogFormContent>
                  <DialogLabel>Organization Name</DialogLabel>
                  <DialogInput onChange={(e)=>setOrganizationName(e.target.value)} value={Organization} placeholder='Enter the Organization Name'/>
               </DialogFormContent>
               {/**-------------------------------------------- */}
                 <DialogWrapperForm_content_DateWrapper>
                    <DialogWrapperForm_content_DateWrapper_styler>
                    <DialogLabel>Start Date</DialogLabel>
                    <DatePicker
                      className="customisethedate"
                      placeholderText="Select the Starting Date"
                      selected={startDate}
                      value={startDate}
                      onChange={handleStateDate}
                    />
                    </DialogWrapperForm_content_DateWrapper_styler>
                    <DialogWrapperForm_content_DateWrapper_styler>
                    <DialogLabel>End Date</DialogLabel>
                    <DatePicker
                      className="customisethedate"
                      placeholderText="Select the End Date"
                      selected={endDate}
                      value={endDate}
                      onChange={handleEndDate}
                    />
                    </DialogWrapperForm_content_DateWrapper_styler>
                 </DialogWrapperForm_content_DateWrapper>
               {/**-------------------------------------------- */}
               <DialogFormContent>
                  <DialogLabel>Description Of Courses </DialogLabel>
                  <DialogInput onChange={(e)=>setDescription(e.target.value)} value={description} placeholder='Description of Course'/>
               </DialogFormContent>
            </DialogForm>
            <DialogButtonWrapper>
               < DialogCancelButton onClick={()=>setOpenCourses(false)} >Cancel</ DialogCancelButton>
               <DialogSaveButton onClick={()=>SaveCoursesDetails()}>Save Button</DialogSaveButton>
            </DialogButtonWrapper>
         </DialogCourses>
       </Dialog>
    </Fragment>
  )
}

export default StudentCourses