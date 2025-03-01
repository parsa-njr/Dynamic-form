import React from 'react'
import FormLayout from './FormLayout'
import LeftSideBar from './LeftSideBar'
import RightSidebar from './RightSidebar'

const LandingPage = () => {
  return (
   <>
   <div className="flex flex-col md:flex-row justify-around max-w-[80%] mx-auto gap-4 py-4">
  <RightSidebar />
  <FormLayout />
  <LeftSideBar />
</div>

   </>
  )
}

export default LandingPage