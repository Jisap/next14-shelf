"use client"

import React from 'react'
import TopBar from './Components/TopBar'
import { useAppContext } from '../ContextApi'
import SoftLayer from './Components/SoftLayer'
import StatsBar from './Components/StatsBar'
import AllProjects from './Components/AllProjects'
import FavoriteComponents from './Components/FavoriteComponents'
import { ComponentEditor } from './Components/ComponentsPage/ComponentEditor'

const ContentArea = () => {

  const {
    showSideBarObject: { showSideBar },
    isMobileViewObject: { isMobileView },
    openProjectWindowObject: { openProjectWindow },
  } = useAppContext()

  // console.log("isMobileView", isMobileView);
  // console.log("showSearchBar", showSideBar);

  return (
    <div className='w-full h-screen bg-slate-50 p-4'>
      <TopBar />
      <StatsBar />
      <AllProjects />
      <FavoriteComponents />
      {isMobileView && showSideBar && <SoftLayer />}
    </div>
  )
}

export default ContentArea