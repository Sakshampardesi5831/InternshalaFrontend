import React, { Fragment, useEffect, useState } from 'react'
import {Box,Typography,Button,List,ListItem} from '@mui/material'

import styled from 'styled-components'
import JobSection from '../JobComponents/JobSection'
import Link from 'next/link'
import instance from '@/axiosConfig'
import { sideBarData } from '@/utils/sideBarData'
import { useRouter } from 'next/router'
import SideNav from '../SideNav'
/**------------------------------------------------------------------------- */
const StudentDashboardWrapper=styled(Box)({
  width:"100%",
  height:"calc(100vh - 80px)",
  display:"flex",
  gap:"8px"
  // overflow:"hidden"
});

const StudentSideNav=styled(Box)({
    width:"25%",
    height:"calc(100vh - 80px)",
    borderRight:"2px solid #E8E8E8",
    position:"sticky",
    top:"0%",
    left:"0%",

});

const SideNavButtonDiv=styled(Box)({
  width:"100%",
  padding:"10px 25px",
  backgroundColor:"#fff",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"flex-start",
  paddingTop:"20px"
});
const ButtonStyle=styled(Button)({
  backgroundColor: '#1e0ec9',
  backgroundImage:"linear-gradient(135deg, #1e0ec9 0%, #5081f4 100%)",
  color:"#fff",
  padding:"8px 40px",
  fontSize:"15px"
});

const JobsWrapper=styled(Box)({
  width:"75%",
  height:"calc(100vh - 80px)",
  overflow:"hidden",
  overflowY:"auto",
});

const NavLinksWrapper=styled(Box)({
  width:"100%",
  padding:"10px 10px",
  // border:"2px solid #000",
  marginTop:"35px",
});
const NavLinkList=styled(ListItem)({
  width:"100%",
  padding:"10px 20px",
  '&:hover':{
    backgroundColor:"#d3e3fd"
  },
  display:"flex",
  gap:"20px",
  opacity:"0.7"
})
const NavLinkHead=styled(Typography)({
   fontWeight:"700",
   textTransform:"uppercase",
   opacity:"0.7"
})
/**-------------------------------------------------------------------------- */
const StudentDashboard = () => {
 const router=useRouter();
  return (
    <Fragment>
       <StudentDashboardWrapper>
         {/* <StudentSideNav>
          <SideNavButtonDiv>
          <ButtonStyle>Edit Resume</ButtonStyle>
          </SideNavButtonDiv>
          <NavLinksWrapper>
             <List>
                {sideBarData.map((item)=>(
                  <Link style={{textDecoration:"none",color:"#000",opacity:"0.7"}}  href={`/auth/${item.name}`}>
                     <NavLinkList key={item.name}>
                     <item.icon/>
                     <NavLinkHead>{item.name}</ NavLinkHead>
                     </NavLinkList>
                  </Link>
                ))}
             </List>
          </NavLinksWrapper>
         </StudentSideNav> */}
          <SideNav/>
         <JobsWrapper>
           <JobSection/>
         </JobsWrapper>
       </StudentDashboardWrapper>
    </Fragment>
  )
}

export default StudentDashboard