import React, { Fragment } from 'react'
import dynamic from 'next/dynamic';


const StudentResume =dynamic(()=>import('@/components/Student/StudentResume/StudentResume'),{loading:()=><p>Loading</p>})
// import StudentResume from '@/components/Student/StudentResume/StudentResume'
const EditResume = () => {
  return (
    <Fragment>
       {/* <StudentResume/> */}
       <StudentResume/>
    </Fragment>
  )
}

export default EditResume