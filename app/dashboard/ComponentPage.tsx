
import { useAppContext } from '../ContextApi'
import TopBar from './Components/ComponentsPage/TopBar'
import SoftLayer from './Components/SoftLayer'
import { AllComponents } from './Components/ComponentsPage/AllComponents'
import EmptyProjectsPlaceHolder from './Components/ComponentsPage/EmptyProjectsPlaceHolder'
import { ComponentEditor } from './Components/ComponentsPage/ComponentEditor'



const ComponentPage = () => {

  const{ 
    showSearchBarObject: { showSearchBar},
    isMobileViewObject: { isMobileView },
    showComponentPageObject: { showComponentPage },
    selectedProjectObject: { selectedProject },  
    openComponentEditorObject: { openComponentEditor },
  } = useAppContext()

  return (
    <div className='w-full h-screen p-3 px-4 pt-5 bg-slate-50'>
      {showSearchBar && isMobileView && showComponentPage && <SoftLayer />}
      <TopBar />
      {selectedProject?.components.length === 0 && <EmptyProjectsPlaceHolder /> }
      <AllComponents />     
      <ComponentEditor />
    </div>  
  )
}

export default ComponentPage