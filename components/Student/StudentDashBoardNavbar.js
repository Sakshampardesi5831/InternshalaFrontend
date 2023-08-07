import React, { Fragment, useState } from 'react'
import { AppBar, Toolbar,styled,Typography, Box,Button } from '@mui/material'
import {Search,KeyboardArrowDown,KeyboardArrowUp} from '@mui/icons-material'
/**----------------------------------------------------------------------- */
const StudentDashBoardNavbarWrapper=styled(AppBar)({
     height:"80px",
     backgroundColor:"#FFF",
   borderBottom:"2px solid #F5F5F5",
     boxShadow:"none",
     padding:"10px 20px"
})
const LogoStyle=styled(Typography)({
   display:"flex",
   justifyContent:"center",
   alignItems:"center",
   fontSize:"25px",
   color:"#707070",
   gap:"10px"
});
const ButtonStyle=styled(Button)({
   border:"2px solid #e8e8e8",
   backgroundColor:"#ffff",
   color:"#707070",
   padding:"10px 40px"
});
const DialogBox=styled(Box)({
  width:"280px",
  height:"300px",
  position:"absolute",
  zIndex:"99",
  right:"2%",
//   border:"2px solid black",
  backgroundColor:"#e8e8e8",
  top:"100%",
  marginTop:"20px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  borderRadius:"20px"
});
/**------------------------------------------------------------------------ */
const StudentDashBoardNavbar = ({student}) => {
   const [show,setShow]=useState(false);
   const dialogHandler=()=>{
      setShow(true);
   }
  return (
    <Fragment>
       <StudentDashBoardNavbarWrapper position='static'>
          <Toolbar style={{display:"flex",justifyContent:"space-between",alignItems:"center",position:"relative"}} >
             <LogoStyle><Search color='action' sx={{fontSize:"30px"}} /> Job Seeker</LogoStyle>
             <ButtonStyle >{student?.firstname}{show?<KeyboardArrowDown sx={{cursor:"pointer"}} onClick={()=>setShow(false)} />:<KeyboardArrowUp sx={{cursor:"pointer"}} onClick={dialogHandler}/>} </ButtonStyle>
             {show?<DialogBox></DialogBox>:""}
          </Toolbar>
        </StudentDashBoardNavbarWrapper> 
    </Fragment>
  )
}

export default StudentDashBoardNavbar