"use client"

import React from 'react'
import TopBar from './Components/TopBar'
import { useAppContext } from '../ContextApi'
import SoftLayer from './Components/SoftLayer'
import StatsBar from './Components/StatsBar'

const ContentArea = () => {

  const {
    showSideBarObject: { showSideBar },
    isMobileViewObject: { isMobileView },
  } = useAppContext()

  console.log("isMobileView", isMobileView);
  console.log("showSearchBar", showSideBar);

  return (
    <div className='w-full h-screen bg-slate-50 p-4'>
      <TopBar />
      <StatsBar />
      {isMobileView && showSideBar && <SoftLayer />}
    </div>
  )
}

export default ContentArea