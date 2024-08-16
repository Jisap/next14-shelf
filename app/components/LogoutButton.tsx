"use client"

import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppContext } from '../ContextApi';


const LogoutButton = () => {

  const { openSideBarObject: { openSideBar } } = useAppContext()

  return (
    <div className={`p-[7px] hover:text-sky-500 select-none cursor-pointer ${openSideBar ? "ml-3" : "ml-0"} mt-14 text-[15px] runded-lg flex items-center`}>
      <LogoutIcon />
      {openSideBar && <span className='mt-0.5'>Log Out</span>}
    </div>
  )
}

export default LogoutButton