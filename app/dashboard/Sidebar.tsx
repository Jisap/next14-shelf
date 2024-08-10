import React from 'react'
import RoundedArrowIcon from '../components/RoundedArrowIcon'
import { Logo } from '../components/Logo'
import LogoSidebar from '../components/LogoSidebar'
import Links from '../components/Links'

const Sidebar = () => {
  return (
    <div className='h-screen w-[320px] p-6 pt-12 relative'>
      <RoundedArrowIcon />
      <LogoSidebar />
      <Links />
    </div>
  )
}

export default Sidebar