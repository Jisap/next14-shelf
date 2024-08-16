import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Sidebar from './Sidebar'

const dashboard = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col gap-2 bg-slate-50'>
        <Sidebar />
        {/* <UserButton /> */}
        {/* <a href="/" className='text-sky-500 hover:underline'>Regresar</a> */}
      </div>
    </div>
  )
}

export default dashboard