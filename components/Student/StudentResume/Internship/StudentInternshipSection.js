import React, { Fragment, use, useEffect, useState } from "react";
import {
  Button,
  Box,
  Typography,
  Dialog,
  InputBase,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  DescriptionOutlined,
  AddOutlined,
  EditOutlined,
  ExpandMoreOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import instance from "@/axiosConfig";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { asyncCurrentStudent } from "@/store/Actions/StudentAction";
/***----------------------------------------------------------------------- */

const InternshipWrapper = styled(Box)({
  width: "100%",
  minHeight: "80vh",
  border: "2px solid #000",
  padding: "10px 20px",
});

const InternshipHeadNav = styled(Box)({
  width: "100%",
  height: "22vh",
  border: "2px solid #e8e8e8",
  padding: "10px 15px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "15px",
});
const InternshipIcon = styled(Box)({
  width: "70px",
  height: "70px",
  //  border:"2px solid #000",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const InternNavContentWrapper = styled(Box)({
  width: "calc(100% - 70px)",
  height: "100%",
  // border:"2px solid green",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 15px",
});
const InternshipNavContent = styled(Box)({
  width: "70%",
  height: "100%",
  // border:"2px solid red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "15px",
});

const InternshipHeading = styled(Typography)({
  fontSize: "25px",
  fontWeight: "700",
  opacity: "0.7",
});
const InternshipSubheading = styled(Typography)({
  fontSize: "15px",
  fontWeight: "500",
  opacity: "0.5",
});

const AddButtonStyler = styled(Button)({
  border: "2px solid #142683",
  fontSize: "15px",
  color: "#142683",
});
/**------------------------------------------------------------------------ */
const DynamicInternship = styled(Box)({
  width: "100%",
  minHeight: "25vh",
  border: "2px solid #e8e8e8",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 15px",
});
const DynamicInternshipSection1 = styled(Box)({
  width: "70%",
  minHeight: "20vh",
  padding: "10px 15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "15px",
});

const DynamicEditButtonstyler = styled(Button)({
  border: "2px solid #142683",
  padding: "5px 10px",
  color: "#142683",
});

const CompanyName = styled(Typography)({
  fontSize: "25px",
  fontWeight: "700",
  opacity: "0.7",
});
const PositionName = styled(Typography)({
  fontSize: "18px",
  fontWeight: "500",
  opacity: "0.6",
});

const Duration = styled(Typography)({
  fontSize: "15px",
  fontWeight: "500",
  opacity: "0.6",
});
const DatesStyler = styled(Typography)({
  fontSize: "15px",
  fontWeight: "500",
  opacity: "0.6",
});

const DynamicDescription = styled(Box)({
  width: "100%",
  padding: "10px 0px",
  // border:"2px solid #000"
});

const DynamicDescriptionStyler = styled(Accordion)({
  boxShadow: "none",
  border: "3px solid #e8e8e8",
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
/**-*-------------------EDIT DIALOG WRAPPER--------------------------------------------------- */
const dialogStyler = {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "60%",
  height: "95%",
  borderRadius: "15px",
  padding: "20px 15px",
};
const EditDialogMainWrapper=styled(Box)({
   width:"100%",
   height:"100%",
  //  border:"2px solid #000"
});

const EditDialogHeading=styled(Box)({
   width:"100%",
   padding:"10px 25px",
   opacity:"0.7",
  //  border:'2px solid #000',
   fontWeight:"700"
});
const HeadingStyler=styled(Typography)({
    fontWeight:"700",
    fontSize:"25px",
});

const EditDialogMainPart=styled(Box)({
   width:"100%",
   padding:"10px 15px",
  //  border:"2px solid red",
   height:"75%",
   display:"flex",
   flexDirection:"column",
   justifyContent:"space-between",
   alignItems:"center"
});
const EditButtonWrapper=styled(Box)({
   width:"100%",
   height:'15%',
   padding:"10px 15px",
  //  border:"2px solid green",
   display:"flex",
   justifyContent:"space-between",
   alignItems:"center"
});
const DeleteButton=styled(Button)({
  padding: "10px 30px",
  color: "#fb7272",
  border: "2px solid #fb7272",
  "&:hover": {
    backgroundColor: "#fb7272",
    color: "#fff",
    fontWeight: "700",
  },
});

const UpdateButtonWrapper=styled(Box)({
  width: "40%",
  height: "90%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
});

const CancelButton=styled(Button)({
  padding: "10px 20px",
   border: "2px solid #e8e8e8",
   color: "#000",
   fontWeight: "400",
   "&:hover": {
     fontWeight: "700",
   },
});

const SaveDetailsButton=styled(Button)({
  padding: "10px 30px",
  border: "2px solid #fff",
  color: "#fff",
  backgroundColor: "#142683",
  "&:hover": {
    backgroundColor: "#0b57d0",
  },
  fontWeight: "700",
});
//FORM SECTION

const EditContentWrapper=styled(Box)({
  width:"100%",
  padding:"10px 10px",
  // border:"2px solid #000",
  display:"flex",
  flexDirection:"column",
  gap:"12px"
});

const EditContentSubWrapper=styled(Box)({
  width:"100%",
  padding:"10px",
  // border:"2px solid #000",
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  gap:"10px"
});
const SubWrapperSections=styled(Box)({
    width:"50%",
    // padding:"10px 15px",
    // border:"2px solid red",
});
const EditContentHeading=styled(Typography)({
  fontSize:"18px",
  fontWeight:"700",
  opacity:"0.5"
});

const EditContentInput=styled(InputBase)({
  width:"100%",
  padding:"10px 8px",
  borderRadius:"10px",
  border:"2px solid #e8e8e8",
  fontSize:"18px",
});



/*-------------------------------------------------------------------------**/
const StudentInternshipSection = ({setOpenInternship}) => {
  const dispatch=useDispatch();
  const { student } = useSelector((state) => state.StudentReducer);
  const [updatedId, setUpdatedId] = useState("");
  const [updatedComapnyName, setUpdatedCompanyName] = useState("");
  const [updatedDomain, setUpdatedDomain] = useState("");
  const [updatedDuration, setUpdatedDuration] = useState(0);
  const [updatedStartDate, setUpdatedStartDate] = useState("");
  const [updatedEndDate, setUpdatedEndDate] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [EditOpenDialog,setEditOpenDialog]=useState(false);
  
  const SingleInternshipValue = (
    id,
    comapanyName,
    domain,
    duration,
    description
  ) => {
    setUpdatedId(id);
    setUpdatedCompanyName(comapanyName);
    setUpdatedDomain(domain);
    setUpdatedDuration(duration);
    setUpdatedDescription(description);
    setEditOpenDialog(true);
    // setUpdatedEndDate(convertEndDate);
    //setUpdatedStartDate(convertStartDate);
    // const convertStartDate = Date.parse(startDate);
    // const convertEndDate = Date.parse(endDate);
  };
  const handleStartDate=(date)=>{
     setUpdatedStartDate(date);
  }
  const handleEndDate=(date)=>{
    setUpdatedEndDate(date);
  }
  const UpdateSingleInternship= async ()=>{
       let updatedData={
         comapanyName:updatedComapnyName,
         domain:updatedDomain,
         duration:updatedDuration,
         internStart:updatedStartDate,
         internEnd:updatedEndDate,
         description:updatedDescription,
       }
       try {
           const {data}=await instance.post(`/resume/edit-intern/${updatedId}`,updatedData);
           window.alert(`${data.message}`);
           setUpdatedId("");
           setUpdatedCompanyName("");
           setUpdatedDomain("");
           setUpdatedDuration(0);
           setUpdatedDescription("");
           setUpdatedStartDate("");
           setUpdatedEndDate("");
           dispatch(asyncCurrentStudent());
           setEditOpenDialog(false);
       } catch (error) {
         console.log(error);
       }
  }
  const DeleteHandler=async ()=>{
        try {
          const {data} =await instance.post(`/resume/delete-intern/${updatedId}`);
          window.alert(`${data.message}`);
          dispatch(asyncCurrentStudent());
          setEditOpenDialog(false);
        } catch (error) {
          console.log(error);
        }
  }
  useEffect(()=>{
    dispatch(asyncCurrentStudent());
  },[])
  return (
    <Fragment>
      <InternshipWrapper>
        <InternshipHeadNav>
          <InternshipIcon>
            <DescriptionOutlined style={{ fontSize: "50px", opacity: "0.5" }} />
          </InternshipIcon>
          <InternNavContentWrapper>
            <InternshipNavContent>
              <InternshipHeading>Add Internship</InternshipHeading>
              <InternshipSubheading>Improve Your Profile </InternshipSubheading>
            </InternshipNavContent>
            <AddButtonStyler onClick={()=>setOpenInternship(true)}>
              <AddOutlined />
              Add Internship
            </AddButtonStyler>
          </InternNavContentWrapper>
        </InternshipHeadNav>
        {student?.resume?.internships.map((dets) => (
          <DynamicInternship key={dets.id}>
            <DynamicInternshipSection1>
              <CompanyName>{dets.comapanyName}</CompanyName>
              <PositionName>{dets.domain}</PositionName>
              <Duration>{dets.duration}&nbsp;Month</Duration>
              <DatesStyler>
                {dets.internStart.substring(0, 10)} -
                {dets.internEnd.substring(0, 10)}
              </DatesStyler>
              <DynamicDescription>
                <DynamicDescriptionStyler>
                  <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                    <DynamicSummaryStyler>Description</DynamicSummaryStyler>
                  </AccordionSummary>
                  <AccordionDetails>
                    <DynamicDetailsStyler>
                      {dets.description}
                    </DynamicDetailsStyler>
                  </AccordionDetails>
                </DynamicDescriptionStyler>
              </DynamicDescription>
            </DynamicInternshipSection1>
            <DynamicEditButtonstyler
              onClick={() =>
                SingleInternshipValue(
                  dets.id,
                  dets.comapanyName,
                  dets.domain,
                  dets.duration,
                  dets.description
                )
              }
            >
              <EditOutlined />
              Edit
            </DynamicEditButtonstyler>
          </DynamicInternship>
        ))}
      </InternshipWrapper>
      <Dialog open={EditOpenDialog} PaperProps={{sx:dialogStyler}}>
         <EditDialogMainWrapper>
            <EditDialogHeading>
              <HeadingStyler>UPDATE THE DETAILS</ HeadingStyler>
            </EditDialogHeading>
            <EditDialogMainPart>
               <EditContentWrapper>
                  <EditContentHeading>Company Name</EditContentHeading>
                  <EditContentInput onChange={(e)=>setUpdatedCompanyName(e.target.value)} value={updatedComapnyName}  placeholder="Update the Name" />
               </EditContentWrapper>
               <EditContentSubWrapper>
                <SubWrapperSections>
                    <EditContentHeading>Position Name</EditContentHeading>
                    <EditContentInput onChange={(e)=>setUpdatedDomain(e.target.value)} value={updatedDomain}  placeholder="Update the Domain"/>
                </SubWrapperSections>
                <SubWrapperSections>
                     <EditContentHeading>Duration</EditContentHeading>
                     <EditContentInput onChange={(e)=>setUpdatedDuration(e.target.value)} value={updatedDuration}  placeholder="Type The Duration"/>
                </SubWrapperSections>
               </EditContentSubWrapper>
               <EditContentSubWrapper>
                <SubWrapperSections>
                    <EditContentHeading>Start Date</EditContentHeading>
                    <DatePicker
                            className="customisethedate"
                            placeholderText="Enter the Internship Start Date"
                            selected={updatedStartDate}
                            value={updatedStartDate}
                            onChange={handleStartDate}
                      />
                </SubWrapperSections>
                <SubWrapperSections>
                     <EditContentHeading>End Date</EditContentHeading>
                     <DatePicker
                            className="customisethedate"
                            placeholderText="Enter the Internship End Date"
                            selected={updatedEndDate}
                            value={updatedEndDate}
                            onChange={handleEndDate}
                      />
                </SubWrapperSections>
               </EditContentSubWrapper>
               <EditContentWrapper>
                  <EditContentHeading>Enter the Description Name</EditContentHeading>
                  <EditContentInput onChange={(e)=>setUpdatedDescription(e.target.value)} value={updatedDescription}  placeholder="Update the Description"/>
               </EditContentWrapper>
            </EditDialogMainPart>
            <EditButtonWrapper>
               <DeleteButton onClick={()=>DeleteHandler()}>Delete Internship</DeleteButton>
               <UpdateButtonWrapper>
                <CancelButton onClick={()=>setEditOpenDialog(false)}>Cancel</CancelButton>
                <SaveDetailsButton onClick={()=>UpdateSingleInternship()}>Update Internship</SaveDetailsButton>
               </UpdateButtonWrapper>
            </EditButtonWrapper>
         </EditDialogMainWrapper>
      </Dialog>
    </Fragment>
  );
};

export default StudentInternshipSection;
