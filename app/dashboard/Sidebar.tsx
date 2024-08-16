"use client"

import React from 'react'
import RoundedArrowIcon from '../components/RoundedArrowIcon'

import LogoSidebar from '../components/LogoSidebar'
import Links from '../components/Links'
import LogoutButton from '../components/LogoutButton'
import { useAppContext } from '../ContextApi'

const Sidebar = () => {

  const { openSideBarObject: { openSideBar } } = useAppContext()

  return (
    <div 
      className={`${openSideBar ? "w-[320px] p-6" : "w-[100px] p-4"} h-screen pt-12 relative transition-all duration-300`}
    >
      <RoundedArrowIcon />
      <LogoSidebar />
      <Links />
      <LogoutButton />
    </div>
  )
}

export default Sidebar