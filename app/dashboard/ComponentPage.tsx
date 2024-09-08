import React from 'react'
import { useAppContext } from '../ContextApi'
import TopBar from './Components/ComponentsPage/TopBar'
import SoftLayer from './Components/SoftLayer'
import { AllComponents } from './Components/ComponentsPage/AllComponents'
import EmptyProjectsPlaceHolder from './Components/ComponentsPage/EmptyProjectsPlaceHolder'



const ComponentPage = () => {

  const{ 
    showSearchBarObject: { showSearchBar},
    isMobileViewObject: { isMobileView },
    showComponentPageObject: { showComponentPage },
    selectedProjectObject: { selectedProject },
  } = useAppContext()

  return (
    <div className='w-full h-screen p-3 px-4 pt-5 bg-slate-50'>
      {showSearchBar && isMobileView && showComponentPage && <SoftLayer />}
      <TopBar />
      {selectedProject?.components.length === 0 && <EmptyProjectsPlaceHolder /> }
      <AllComponents />
    </div>
  )
}

export default ComponentPage