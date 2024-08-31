"use client"

import React from 'react'
import Sidebar from './Sidebar'
import ContentArea from './ContentArea'
import { useAppContext } from '../ContextApi'
import AddProjectWindow from './Components/AddProjectWindow'
import SoftLayer from './Components/SoftLayer'
import IconWindow from './Components/IconWindow'

const dashboard = () => {

  const { openProjectWindowObject: { openProjectWindow }} = useAppContext()

  return (
    // <div className='flex flex-col'>
    //   <div className='flex  gap-2'>
    //     <Sidebar />
    //     <ContentArea />
    //   </div>
    // </div>

    <div className='flex poppins relative'>
      <AddProjectWindow />
      <IconWindow />
      {openProjectWindow && <SoftLayer />}
      <Sidebar />
      <ContentArea />
    </div>
  )
}

export default dashboard