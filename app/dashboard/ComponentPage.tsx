import React from 'react'
import { useAppContext } from '../ContextApi'
import TopBar from './Components/ComponentsPage/TopBar'
import SoftLayer from './Components/SoftLayer'
import { AllComponents } from './Components/ComponentsPage/AllComponents'


const ComponentPage = () => {

  const{ 
    showSearchBarObject: { showSearchBar},
    isMobileViewObject: { isMobileView },
    showComponentPageObject: { showComponentPage },
  } = useAppContext()

  return (
    <div className='w-full h-screen p-3 px-4 pt-5 bg-slate-50'>
      {showSearchBar && isMobileView && showComponentPage && <SoftLayer />}
      <TopBar />
      <AllComponents />
    </div>
  )
}

export default ComponentPage