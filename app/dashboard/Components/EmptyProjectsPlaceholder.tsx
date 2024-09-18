"use client"

import { useAppContext } from '@/app/ContextApi';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import AddIcon from '@mui/icons-material/Add';
import { TextToIcon } from '@/utils/textToIcon';



const EmptyProjectsPlaceHolder = () => {

  const { 
    selectedProjectObject: { selectedProject },
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
  } = useAppContext();


  return (
    <div className='p-1 gap-5 flex flex-col justify-center h-[200px] mt-[68px] mb-[34px] items-center'>
      <AddModeratorIcon 
        sx={{ fontSize: 80 }}
        className='text-[70px] text-slate-200'
      />

      <div className='flex flex-col'>
        <h3 className='font-semibold text-[19px] mb-1 text-center'>
          {`There are no projects Yet...`}
        </h3>
        <p className="text-gray-400 text-center text-[14px]">
          Please click below to add your first component
        </p>
      </div>

      <button
        onClick={() =>setOpenProjectWindow(true)}
        className='flex gap-1 items-center bg-sky-500 p-2 rounded-md text-white text-center text-[12px] px-3 pr-5'
      >
        <AddIcon />
        <span className='text-sm'>Add new projects</span>
      </button>
    </div>
  )
}

export default EmptyProjectsPlaceHolder