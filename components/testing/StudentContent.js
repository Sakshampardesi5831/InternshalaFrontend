import React, { Fragment, useEffect } from 'react'
import {Box,styled,Typography} from '@mui/material'
import instance from '@/axiosConfig'
const StudentContent = ({category}) => {

const GetAllContent= async ()=>{
   try {
       const {data}=await instance.post(`/user/student/${category}`);
       console.log(data);
   } catch (error) {
     console.log(error);
   }
}
 useEffect(()=>{
      GetAllContent();
 },[])

  return (
    <Fragment>
         <div>StudentContent</div>
    </Fragment>
  )
}

export default StudentContent