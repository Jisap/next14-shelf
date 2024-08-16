import React from 'react'
import DashboardText from './DashboardText'
import SearchBar from './SearchBar'
import ProfileAccount from './ProfileAccount'
import DarkMode from './DarkMode'

const TopBar = () => {
  return (
    <div className='bg-white w-full p-[11px] rounded-lg px-6 flex justify-between items-center'>
      <DashboardText />
      <SearchBar />
      <div className='flex gap-4 items-center'>
        <DarkMode />
        <ProfileAccount />
      </div>
    </div>
  )
}

export default TopBar