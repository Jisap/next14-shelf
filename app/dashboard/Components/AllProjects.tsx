import { AddOutlined } from '@mui/icons-material'
import React from 'react'
import SingleProject from './SingleProject'

const AllProjects = () => {
  return (
    <div className='bg-white w-full p-8 rounded-lg mt-4'>
      {/* header */}
      <span className='text-lg flex gap-2 justify-between items-center'>
        <div className='flex gap-4 items-center'>
          <span className='font-bold text-lg'>All Projects</span>
          <span className='text-[14px] text-sky-600 cursor-pointer'>More</span>
        </div>
        {/* New Project button */}
        <button className='bg-sky-500 text-white text-[12px] px-3 py-[2px] rounded-md'>
          <AddOutlined fontSize="small" />
          <span className='text-[13px]'>New Project</span>
        </button>
      </span>

      {/* Showing the projects */}
      <div className='flex justify-center flex-wrap gap-4 mt-7 mb-2 max-sm:grid max-sm:grid-cols-1 max-sm:justify-items-center max-sm:mx-auto'>
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
      </div>
    </div>
  )
}

export default AllProjects