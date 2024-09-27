"use client"

import React from 'react'
import Sidebar from './Sidebar'
import ContentArea from './ContentArea'
import { useAppContext } from '../ContextApi'
import AddProjectWindow from './Components/AddProjectWindow'
import SoftLayer from './Components/SoftLayer'
import IconWindow from './Components/IconWindow'
import { allIconsArray } from '@/AllIconsData'
import { IconData } from '@/AllIconsData'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { Toaster } from 'react-hot-toast'
import ComponentPage from './ComponentPage'
import DropDown from './Components/DropDown'
import ConfirmationDeleteWindow from './Components/ComponentsPage/DeleteWindow'
import { ComponentEditor } from './Components/ComponentsPage/ComponentEditor'
import AllProjectsWindow from './Components/AllProjectsWindow'


interface SelectedIcon {
  icon: React.ReactNode;
  name: string;
}

const dashboard = () => {

  const {
    openProjectWindowObject: { openProjectWindow },
    showComponentPageObject: { showComponentPage },
    openDeleteWindowObject: { openDeleteWindow },
    openDropDownObject: { openDropDown },
    openComponentEditorObject: { openComponentEditor },
    openAllProjectsWindowObject: { openAllProjectsWindow },
  } = useAppContext()

  const [selectedIcon, setSelectedIcon] = React.useState<SelectedIcon>({ // Estado de selectedIcon
    icon: <CodeOutlinedIcon />,
    name: "CodeIcon"
  });

  const getTheIconSelected =(icon: IconData) => { // Actualiza el estado de selectedIcon con el icon recibido
    setSelectedIcon({
      icon: icon.icon,
      name: icon.name
    })
  }

  return (
   

    <div className='flex poppins relative'>
      <Toaster />
      
      <AddProjectWindow  
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      />

      {/* Si se establece openIconWindow=true se muestra IconWindow */}
      <IconWindow 
        onUpdateIconSelected={getTheIconSelected}
      />

      {/* Si se establece openProjectWindow=true se muestra el softlayer y encima el <AddProjectWindow /> */}
      {openProjectWindow  || openDeleteWindow  || openAllProjectsWindow && <SoftLayer />}

      <Sidebar />

      {/*  */}
      {!showComponentPage ? <ContentArea /> : <ComponentPage /> }

      {openDropDown && <DropDown />}
      
      <ConfirmationDeleteWindow />

      {openComponentEditor && <ComponentEditor />} 

      <AllProjectsWindow />
      
    </div>
  )
}

export default dashboard