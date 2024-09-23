import { Delete, DragIndicatorRounded, EditRounded } from '@mui/icons-material'
import React from 'react'
import CategoryIcon from '@mui/icons-material/Category';

const SingleProjectWindow = () => {
  return (
    <div className='w-full bg-white rounded-md flex gap-3 items-center justify-between p-3'>
      <div className='flex gap-3 items-center'>
        <DragIndicatorRounded className='text-slate-400'/>
        {/* Project Icon */}
        <div>
          <div className='w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center'>
            <CategoryIcon 
              sx={{ fontSize: 17 }}
              className='text-sky-400 text-[17px]'
            />
          </div>
        </div>
        {/* Project Name */}
        <div className='flex flex-col'>
          <span className='font-bold'>Buttons</span>
          <span className='text-slate-400 text-[12px]'>10 Components</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='flex gap-2 items-center'>
        {/* Edit Button */}
        <div className='rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300'> 
          <EditRounded 
            className='text-slate-400'
            sx={{ fontSize: 15 }}
          />
        </div>
        {/* Delete Button */}
        <div>
          <div className='rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300'>
            <Delete 
              className='text-slate-400'
              sx={{ fontSize: 15 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProjectWindow