import { KeyboardArrowDown } from '@mui/icons-material'
import React from 'react'

const SortByComponent = () => {
  return (
    <div className='mt-11 mb-[13px] flex gap-2 items-center justify-between text-[13px]'>
      <div className='flex gap-1'>
        <span className='text-slate-400'>You have</span>
        <span className='text-sky-500 font-semibold'>3</span>
        <span className='text-slate-400'>projects!</span>
      </div>

      <div className='flex gap-2 items-center'>
        <span className='text-slate-400'>Sort by</span>
        <div className='text-sky-500 flex gap-1 items-center'>
          <span>Name</span>
          <KeyboardArrowDown className="text-[13px]" />
        </div>
      </div>
    </div>
  )
}

export default SortByComponent