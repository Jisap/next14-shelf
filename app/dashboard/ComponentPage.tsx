import React from 'react'
import { useAppContext } from '../ContextApi'

const ComponentPage = () => {

  const{ showComponentPageObject: { setShowComponentPage }} = useAppContext()

  return (
    <div className='flex gap-4 w-full h-screen bg-slate-50'>
      <span>Component Page</span>
      <span
        className='cursor-pointer'
        onClick={() => setShowComponentPage(false)}
      >
        Back
      </span>
    </div>
  )
}

export default ComponentPage