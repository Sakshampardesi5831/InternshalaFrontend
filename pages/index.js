import React, { Fragment, useEffect } from 'react'
import { asyncCurrentStudent, setStudent } from '@/store/Actions/StudentAction'
import { useDispatch,useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavBar from '@/components/NavBar'

const index = () => {
  const dispatch=useDispatch();
  const router=useRouter();
  const { isAuthenticated } = useSelector((state) => state.StudentReducer);
  console.log(isAuthenticated);

  useEffect(()=>{
    dispatch(asyncCurrentStudent());
    if (!isAuthenticated) dispatch(asyncCurrentStudent());
    if (isAuthenticated) router.push("/auth/home");
  },[isAuthenticated])
  return (
    <Fragment>
      {/* <div>
        <h1>THIS IS HOME PAGE</h1>
        <Link href="/login" >Login</Link>
        <br />
        <br />
        <Link href="/register">Register</Link>
        <hr />
        <button  onClick={()=> dispatch(setStudent())} >Run Actions</button>
      </div> */}
      <NavBar/>
    </Fragment>
  )
}

export default index