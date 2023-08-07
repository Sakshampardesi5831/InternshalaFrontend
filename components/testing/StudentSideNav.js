import React, { Fragment, useEffect, useState } from 'react'
import {Box,styled,ListItem,List} from '@mui/material'
import { sideBarData } from '@/utils/sideBarData'
import { useRouter } from 'next/router'
import Link from 'next/link'
import instance from '@/axiosConfig'
const SideNavWrapper=styled(Box)({
    width:'25%',
    height:"calc(100vh - 80px)",
    border:"2px solid #eee"
})
/**-------------------------------------------------------------------- */
/**-------------------------------------------------------------------- */
const StudentSideNav = ({category}) =>{

  const [alldata,setAllData]=useState([]);
  
  const ApiCallHandler= async (item)=>{
     const {data} = await instance.post(`/user/student/${item}`);
     console.log(data);
  }
  useEffect(()=>{
    ApiCallHandler();
  },[])

  return (
   <Fragment>
   <Box>
   <SideNavWrapper>
     <List>
        {sideBarData.map((items,i)=>(
            <Link key={i} href={`/auth/${items.name}`}>
                <ListItem key={items.name} style={category===items.name.toLowerCase() ? {
                    backgroundColor:"#d3e3fd",
                    cursor:"pointer"
                }:{}} onClick={()=>ApiCallHandler(items.name)}>
                 {items.name}
                </ListItem>
            </Link>    
        ))}     
     </List>  
    </SideNavWrapper>
    
   </Box>
  
   </Fragment>
  )
}

export default StudentSideNav