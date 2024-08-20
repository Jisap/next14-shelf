import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Sidebar from './Sidebar'
import TopBar from './Components/TopBar'
import ContentArea from './ContentArea'

const dashboard = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex  gap-2'>
        <Sidebar />
        <ContentArea />
      </div>
    </div>
  )
}

export default dashboard