"use client"

import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useAppContext } from '../ContextApi';


const RoundedArrowIcon = () => {

  const { openSideBarObject : { openSideBar, setOpenSideBar }} = useAppContext()

  const handleClick = () => setOpenSideBar(!openSideBar)

  return (
    <div 
      onClick={handleClick}
      className='w-7 h-7 rounded-full absolute right-[-11px] top-[95px] flex items-center justify-center'
    >
      <div className='bg-sky-500 rounded-full w-[70%] h-[70%] flex items-center justify-center cursor-pointer'> 
        {
          openSideBar ? (
            <KeyboardArrowLeftIcon 
              fontSize='small'
              className='text-white text-[12px]'
            />
          ) : (
              <KeyboardArrowRightIcon
                fontSize='small'
                className='text-white text-[12px]'
              />
          )
        }
      </div>
    </div>
  )
}

export default RoundedArrowIcon