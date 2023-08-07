import React, { Fragment } from 'react'
import {Box,Typography,Button,List,ListItem,styled} from '@mui/material'
import { sideBarData } from '@/utils/sideBarData'
import Link from 'next/link';
import { useRouter } from 'next/router';
/**-------------------------------------------------------------------------- */

const SideNavWrapper=styled(Box)({
   width:"25%",
   height:"calc(100vh - 80px)",
   border:"2px solid #eee"
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
  fontSize:"15px",
  '&:hover':{
    backgroundColor: "#5081f4",
  }
});
/**--------------------------------------------------------------------------- */
const SideNav = () => {
   const router=useRouter();
  const editResumeHandler=()=>{
     router.push("/auth/editresume");
  }
  return (
    <Fragment>
        <SideNavWrapper>
        <SideNavButtonDiv>
          <ButtonStyle onClick={editResumeHandler} >Edit Resume</ButtonStyle>
          </SideNavButtonDiv>
          <NavLinksWrapper>
             <List>
                {sideBarData.map((item)=>(
                  <Link key={item.name} style={{textDecoration:"none",color:"#000",opacity:"0.7"}}  href={`/auth/${item.name}`}>
                     <NavLinkList key={item.name}>
                     <item.icon/>
                     <NavLinkHead>{item.name}</ NavLinkHead>
                     </NavLinkList>
                  </Link>
                ))}
             </List>
          </NavLinksWrapper>
        </SideNavWrapper>
    </Fragment>
  )
}

export default SideNav