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

interface SelectedIcon {
  icon: React.ReactNode;
  name: string;
}

const dashboard = () => {

  const { openProjectWindowObject: { openProjectWindow }} = useAppContext()

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
      <IconWindow 
        onUpdateIconSelected={getTheIconSelected}
      />
      {openProjectWindow && <SoftLayer />}
      <Sidebar />
      <ContentArea />
    </div>
  )
}

export default dashboard