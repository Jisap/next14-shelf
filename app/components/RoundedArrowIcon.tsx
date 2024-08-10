import { KeyboardArrowLeft } from '@mui/icons-material'
import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const RoundedArrowIcon = () => {
  return (
    <div className='w-7 h-7 rounded-full absolute right-[-11px] top-[95px] flex items-center justify-center'>
      <div className='bg-sky-500 rounded-full w-[70%] h-[70%] flex items-center justify-center cursor-pointer'> 
        <KeyboardArrowLeftIcon 
          fontSize='small'
          className='text-white text-[12px]'
        />
      </div>
    </div>
  )
}

export default RoundedArrowIcon