import React, { Fragment } from 'react'
import Link from 'next/link'
import {AppBar,Toolbar,styled,Typography,Button} from '@mui/material'
import {Search} from '@mui/icons-material'
import { useRouter } from 'next/router';
/*-----------------------------------------------------------------------------*/


const StyleWrapper=styled(AppBar)({
  backgroundColor:"#F5F5F5",
  boxShadow:"none",
  padding:"10px 30px",
  height:"80px",
  borderBottom:"2px solid #f2f6f9",
  color:"#000"
});
const LogoHeading=styled(Typography)({
    fontSize:"34px",
    fontWeight:"900",
    fontFamily:"'DM Sans', sans-serif"
});

const ButtonStyle=styled(Button)({
   backgroundColor:"#142683",
   color:"#fff",
   padding:"10px 30px",
   ':hover':{
    backgroundColor: "#0b57d0",
   }
})
/**----------------------------------------------------------------------------- */
const NavBar = () => {

   const router=useRouter();
  
   const ButtonHandler=()=>{
      router.push("/login");
   }
  return (
    <Fragment>
       {/* <div className='NavContainer'>
         <div className='NavIcon'></div>
         <div className='NavButtons'>
            <Link href="/login" className='loginButton'>Login</Link>
            <Link href="/login" className='registerButton'>Register</Link>
         </div>
       </div> */}
       <StyleWrapper position='static'>
        <Toolbar style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
           <LogoHeading><Search color='icon' fontSize='34px'/>&nbsp;Jobs Seeker</LogoHeading>
           <ButtonStyle onClick={ButtonHandler} >GET STARTED</ButtonStyle>
        </Toolbar>
       </StyleWrapper>
    </Fragment>
  )
}

export default NavBar