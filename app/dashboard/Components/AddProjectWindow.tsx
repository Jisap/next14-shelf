"use client"

import React, { useEffect, useRef } from 'react'
import CategoryIcon from '@mui/icons-material/Category';
import CloseIcon from '@mui/icons-material/Close';
import IceSkatingOutlinedIcon from '@mui/icons-material/IceSkatingOutlined';
import { useAppContext } from '@/app/ContextApi';

const AddProjectWindow = () => {

  const {
    isMobileViewObject: { isMobileView },
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
  } = useAppContext();

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {                 // Cada vez que se abre la ventana de añadir proyecto
    inputRef.current?.focus();      // se establece el foco en el input correspondiente permitiendo escribir directamente
  },[openProjectWindow])

  return (
    <div 
      className={`
        ${isMobileView ? "w-[80%]" : "w-[40%]"} 
        h-[288px] border border-slate-50 bg-white rounded-md shadow-md absolute left-1/2 top-24 -translate-x-1/2 z-50
        ${openProjectWindow ? "absolute" : "hidden"}
      `}
    >
      {/* header */}
      <div className='flex justify-between items-center pt-7 px-7'>
        <div className='flex items-center gap-2'>
          <div className='w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center'>
            <CategoryIcon 
              sx={{ fontSize: 17}}
              className='text-sky-400 text-[12px]'
            />
          </div>
          <span className='font-semibold text-lg'>New Project</span>
        </div>
        <CloseIcon 
          onClick={() => setOpenProjectWindow(false)}
          sx={{ fontSize: 16}}
          className='text-slate-400 text-[18px] cursor-pointer'
        />
      </div>

      {/* body */}
      <div className='flex flex-col gap-2 mt-11 px-7'>
        <span className='text-[13px] font-medium'>Project Name</span>
        <div className='flex gap-3'>
          {/* Input */}
          <input 
            ref={inputRef}
            placeholder="Enter Category Name..."
            className='p-[10px] text-[12px] w-full rounded-md border outline-none'
          />
          {/* icon */}
          <div className='w-12 h-10 text-white flex items-center justify-center bg-sky-500 rounded-lg cursor-pointer'>
            <IceSkatingOutlinedIcon 
              sx={{ fontSize: 18}}
              className='text-[18px]'
            />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className='w-full mt-11 flex gap-3 justify-end px-7 items-center'>
        {/* cancel button */}
        <button
          onClick={() => setOpenProjectWindow(false)} 
          className='border border-slate-200 text-slate-400 text-[12px] p-2 px-6 rounded-md hover:border-slate-300 transition-all hover:bg-slate-50'
        >
          Cancel
        </button>

        <button className='bg-sky-500 hover:bg-sky-600 text-white text-[12px] p-2 px-3 rounded-md transition-all'>
          Add Project
        </button>
      </div>

    </div>
  )
}

export default AddProjectWindow