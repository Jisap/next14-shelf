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

interface SelectedIcon {
  icon: React.ReactNode;
  name: string;
}

const dashboard = () => {

  const {
    openProjectWindowObject: { openProjectWindow },
    showComponentPageObject: { showComponentPage }  
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
      />

      {/* Si se establece openIconWindow=true se muestra IconWindow */}
      <IconWindow 
        onUpdateIconSelected={getTheIconSelected}
      />

      {/* Si se establece openProjectWindow=true se muestra el softlayer y encima el <AddProjectWindow /> */}
      {openProjectWindow && <SoftLayer />}

      <Sidebar />

      {/*  */}
      {!showComponentPage ? <ContentArea /> : <ComponentPage /> }
    </div>
  )
}

export default dashboard