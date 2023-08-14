import React, { useEffect, useState, Fragment } from "react";
import NoJob from "./NoJob";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import instance from "@/axiosConfig";
import {
  Box,
  styled,
  Button,
  Typography,
  Dialog,
  InputBase,
} from "@mui/material";
import ShowJobExperience from "./ShowJobExperience";
/**---------------------------------------------------------------------------- */
const NoJobWrapper = styled(Box)({
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
  height: "100%",
  borderRadius: "15px",
  padding: "20px 15px",
};
/***------------------------------------------------------------------------ */
const DialogWrapperForm = styled(Box)({
  width: "100%",
  height: "100%",
  // border: "2px solid #000",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
});

const DialogWrapperHeading = styled(Box)({
  width: "100%",
  height: "10%",
  padding: "10px 20px",
  // border: "2px solid #000",
  textAlign:"left",
  display:"flex",
  alignItems:"center"
});
const DialogWrapperHeadingStyler=styled(Typography)({
    fontWeight:"700",
    fontSize:"25px",
    opacity:"0.5"

});
const DialogWrapperSection1 = styled(Box)({
  width: "100%",
  height: "70%",
  // border: "2px solid #000",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  gap:"10px"
});
const DialogWrapperForm_content = styled(Box)({
  width: "100%",
  // border: "2px solid #000",
  padding: "10px 15px",
});
const DialogWrapperForm_content_Typo = styled(Typography)({
  fontWeight: "700",
  fontSize: "18px",
  color: "#000",
  opacity: "0.5",
});
const DialogWrapperForm_content_Input = styled(InputBase)({
  width: "100%",
  padding: "10px 8px",
  borderRadius: "8px",
  fontSize: "18px",
  border: "2px solid #e8e8e8",
  "&:placeholder": {
    color: "#000",
  },
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
const DialogWrapperSection2 = styled(Box)({
  width: "100%",
  padding: "10px 20px",
  // border: "2px solid green",
  display: "flex",
  alignItems: "center",
});

const DialogWrapperSection2_ButttonWrapper = styled(Box)({
  width: "100%",
  padding: "10px 20px",
  // border: "2px solid yellow",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap:"15px",
});

const DialogWrapperCancelButton = styled(Button)({
  padding: "10px 20px",
  border: "2px solid #e8e8e8",
  color: "#000",
  fontWeight: "400",
  "&:hover": {
    fontWeight: "700",
  },
});

const DialogWrapperSaveButton = styled(Button)({
  padding: "10px 30px",
  border: "2px solid #fff",
  color: "#fff",
  backgroundColor: "#142683",
  "&:hover": {
    backgroundColor: "#0b57d0",
  },
  fontWeight: "700",
});

const DialogWrapperSection1_DescriptionWrapper = styled(Box)({
  width: "100%",
  padding: "5px 10px",
  // border: "2px solid #000",
});



const StudentJob = () => {
  const router = useRouter();
  const [OpenJobForm, setOpenJobForm] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [comapanyName,setCompanyName]=useState("");
  const [position,setPosition]=useState("");
  const [description,setDescription]=useState("");
  const { student } = useSelector((state) => state.StudentReducer);
  const handlerDateChange = (date) => {
    setStartDate(date);
  };
  const handlerEndDateChange = (date) => {
    setEndDate(date);
  };
  const saveJobDetailsHandler= async ()=>{
     const createStudentJob={
       comapanyName,
       position,
       description,
       startDate,
       endDate,
     }
    try {
      const {data} =await instance.post('/resume/add-jobs',createStudentJob);
      window.alert(`${data.message}`);
      setCompanyName("");
      setPosition("");
      setDescription("");
      setStartDate(null);
      setEndDate(null);
      setOpenJobForm(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Fragment>
      {student.resume.jobs.length===0?
         <NoJobWrapper>
          <NoJob setOpenJobForm={setOpenJobForm} />
         </NoJobWrapper>
      : <ShowJobExperience  setOpenJobForm={setOpenJobForm}/>
      }
      <Dialog open={OpenJobForm} PaperProps={{ sx: dialogStyler }}>
        <DialogWrapperForm>
          <DialogWrapperHeading>
             < DialogWrapperHeadingStyler>JOB EXPERIENCE</ DialogWrapperHeadingStyler>
          </DialogWrapperHeading>
          <DialogWrapperSection1>
            <DialogWrapperForm_content>
              <DialogWrapperForm_content_Typo>
                Comapany Name
              </DialogWrapperForm_content_Typo>
              <DialogWrapperForm_content_Input onChange={(e)=>setCompanyName(e.target.value)} value={comapanyName}  placeholder="Type Comapany Name" />
            </DialogWrapperForm_content>
            <DialogWrapperForm_content>
              <DialogWrapperForm_content_Typo>
                Position
              </DialogWrapperForm_content_Typo>
              <DialogWrapperForm_content_Input onChange={(e)=>setPosition(e.target.value)} value={position} placeholder="Type Previous Company Position" />
            </DialogWrapperForm_content>
            <DialogWrapperForm_content_DateWrapper>
              {/*--------------------Starting Year---------------------------*/}
              <DialogWrapperForm_content_DateWrapper_styler>
                <DialogWrapperForm_content_Typo>
                  Start Year
                </DialogWrapperForm_content_Typo>
                <DatePicker
                  selected={startDate}
                  onChange={handlerDateChange}
                  value={startDate}
                  className="customisethedate"
                  placeholderText="Select the Starting year"
                />
              </DialogWrapperForm_content_DateWrapper_styler>
              {/*--------------------End Year--------------------------------*/}
              <DialogWrapperForm_content_DateWrapper_styler>
                <DialogWrapperForm_content_Typo>
                  End Year
                </DialogWrapperForm_content_Typo>
                <DatePicker
                  selected={endDate}
                  onChange={handlerEndDateChange}
                  value={endDate}
                  className="customisethedate"
                  placeholderText="Select the Ending year"
                />
              </DialogWrapperForm_content_DateWrapper_styler>
            </DialogWrapperForm_content_DateWrapper>
            <DialogWrapperSection1_DescriptionWrapper>
              <DialogWrapperForm_content_Typo>
                  Description of The Role
              </DialogWrapperForm_content_Typo>
              <DialogWrapperForm_content_Input onChange={(e)=>setDescription(e.target.value)} value={description} placeholder="Description of Previous Position in the Company" />
            </DialogWrapperSection1_DescriptionWrapper>
          </DialogWrapperSection1>
          <DialogWrapperSection2>
            <DialogWrapperSection2_ButttonWrapper>
              <DialogWrapperCancelButton onClick={()=>setOpenJobForm(false)}>Cancel</DialogWrapperCancelButton>
              <DialogWrapperSaveButton onClick={()=>saveJobDetailsHandler()}>Save Details</DialogWrapperSaveButton>
            </DialogWrapperSection2_ButttonWrapper>
          </DialogWrapperSection2>
        </DialogWrapperForm>
      </Dialog>
    </Fragment>
  );
};

export default StudentJob;
