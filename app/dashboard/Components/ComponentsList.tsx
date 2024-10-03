


import React from 'react'

const ComponentsList = () => {
  return (
    <div className='w-full bg-white rounded-md flex gap-3 items-center justify-between p-3 px-5'>
      <div className='flex gap-3 items-center'>
        {/* Blue circle */}
        <div>
          <div className='w-[10px] h-[10px] bg-sky-500 rounded-full flex items-center justify-center'></div>
        </div>
        {/* Component name */}
        <div className='flex flex-col'>
          <span className='font-bold cursor-pointer hover:text-sky-500'>
            Component
          </span>
          <div>
            <span className='text-[11px] p-1 px-2 bg-sky-100 text-sky-500 rounded-lg'>
              Project
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentsList