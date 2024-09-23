import React from 'react'
import SingleProject from './SingleProject'
import SingleProjectWindow from './SingleProjectWindow'

const ProjecstList = () => {
  return (
    <div className='w-full bg-slate-50 h-[64%] rounded-lg p-3 flex flex-col gap-3'>
      <SingleProjectWindow />
      <SingleProjectWindow />
      <SingleProjectWindow />
    </div>
  )
}

export default ProjecstList