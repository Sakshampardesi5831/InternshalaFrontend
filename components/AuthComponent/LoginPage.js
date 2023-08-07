import React, { Fragment,useEffect,useState } from 'react'
import { asyncCurrentStudent, asyncSignin } from '@/store/Actions/StudentAction';
import {Box,styled,Typography,InputBase,InputLabel,Button,TextField} from '@mui/material'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import {ArrowForward} from '@mui/icons-material'
/**-------------------------------------------------------------------- */

const LoginWrapper=styled(Box)({
    width:"100%",
    height:"calc(100vh - 80px)",
    backgroundColor:"#ddd",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
})

const FormWrapper=styled(Box)({
  width:"500px",
  height:"400px",
  border:"2px solid #000",
  padding:"20px 30px",
  borderRadius:"20px"
});
const ButtonStyle=styled(Button)({
  backgroundColor:"#33a2ce ",
  color:"#fff",
  padding:"10px 30px",
  marginTop:"20px",
  ':hover':{
   backgroundColor: "#0b57d0",
  }
});
const FormStyling=styled(Box)({
   marginTop:"20px"
});
/***-------------------------------------------------------------------- */
const LoginPage = () => {
  const router=useRouter();
  const dispatch=useDispatch();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const submitHandler=(e)=>{
    e.preventDefault();
    const student={
      email:email,
      password:password
    }
    dispatch(asyncSignin(student));
}
  return (
    <Fragment>
      <LoginWrapper>
         <FormWrapper>
           <Typography sx={{fontSize:34,textAlign:"center",fontWeight:"600",width:"100%",paddingLeft:"10px"}} >SIGN IN</Typography>
           <FormStyling>
             <InputLabel sx={{fontSize:24,fontWeight:500}} >Email Address</InputLabel>
             <InputBase onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='abc@gmail.com' name='username'sx={{borderBottom:"2px solid #373737",width:"100%",padding:"10px 10px",marginTop:"10px",color:"#000",fontSize:"20px"}} />
             <InputLabel sx={{fontSize:24,fontWeight:500,marginTop:"10px"}}>Enter Password</InputLabel>
             <InputBase onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='sak@123' type='password'  name='password' sx={{borderBottom:"2px solid #373737",width:"100%",padding:"10px 10px",marginTop:"10px",color:"#000",fontSize:"20px"}} />
             <ButtonStyle onClick={submitHandler} >Sign In &nbsp; <ArrowForward color='#fff'/> </ButtonStyle>
           </FormStyling>
         </FormWrapper>
      </LoginWrapper>
    </Fragment>
  )
}

export default LoginPage