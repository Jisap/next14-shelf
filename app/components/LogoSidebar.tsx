import React from 'react'
import { SiReact } from 'react-icons/si'

const LogoSidebar = () => {
  return (
    <div className='flex gap-2 items-center'>
      <div className='bg-sky-500 p-[6px] rounded-md h-10 w-10 flex items-center justify-center'>
        <SiReact className="text-white text-[22px]" />
      </div>
      <div className="flex gap-1 text-[22px]">
        <span className={`font-bold text-sky-500`}>
          React
        </span>
        <span className="text-slate-600">
          Shelf
        </span>
      </div>
    </div>
  )
}

export default LogoSidebar