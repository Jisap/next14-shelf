"use client"

import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Sidebar from './Sidebar'
import TopBar from './Components/TopBar'
import ContentArea from './ContentArea'
import { useAppContext } from '../ContextApi'
import AddProjectWindow from './Components/AddProjectWindow'
import SoftLayer from './Components/SoftLayer'

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
      {openProjectWindow && <SoftLayer />}
      <Sidebar />
      <ContentArea />
    </div>
  )
}

export default dashboard