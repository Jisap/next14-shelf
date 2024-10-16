"use client"

import { useAppContext } from '../ContextApi'
import TopBar from './Components/ComponentsPage/TopBar'
import SoftLayer from './Components/SoftLayer'
import { AllComponents } from './Components/ComponentsPage/AllComponents'
import { ComponentEditor } from './Components/ComponentsPage/ComponentEditor'
import EmptyComponentPlaceHolder from './Components/ComponentsPage/EmptyComponentPlaceHolder'
import { useState } from 'react'



const ComponentPage = () => {

  const{ 
    showSearchBarObject: { showSearchBar},
    isMobileViewObject: { isMobileView },
    showComponentPageObject: { showComponentPage },
    selectedProjectObject: { selectedProject },  
    openComponentEditorObject: { openComponentEditor, setOpenComponentEditor },
  } = useAppContext()

  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div className='w-full h-screen p-3 px-4 pt-5 bg-slate-50'>
      {showSearchBar && isMobileView && showComponentPage && <SoftLayer />}
      <TopBar 
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {selectedProject?.components.length === 0 && <EmptyComponentPlaceHolder  /> }
      <AllComponents 
        searchInput={searchInput}
      /> 
      {openComponentEditor && <ComponentEditor />} 
    </div>  
  )
}

export default ComponentPage