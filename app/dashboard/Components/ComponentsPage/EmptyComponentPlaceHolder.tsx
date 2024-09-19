import { useAppContext } from '@/app/ContextApi';
import { TextToIcon } from '@/utils/textToIcon';
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

const EmptyComponentPlaceHolder = () => {
  
  const{
    selectedProjectObject: { selectedProject },
    openComponentEditorObject: { openComponentEditor, setOpenComponentEditor },
  } = useAppContext();

  const handleAddComponent = () => {
    setOpenComponentEditor(true);
  };
  
  return (
    <div className='p-1 gap-5 flex flex-col justify-center h-[500px] mt-[68px] mb-[34px] items-center'>
      {selectedProject?.icon !== undefined && (
        <div className='w-28 h-28 bg-slate-200 rounded-full flex items-center justify-center'>  
          {TextToIcon({
            text: selectedProject.icon,
            fontSize: 60,
            className: "text-slate-100"
          })}
        </div>
      )}

      <div className='flex flex-col'>
        <h3 className='font-semibold text-[19px] mb-1 text-center'>
          {`There are no componets Yet...`}
        </h3>
        <p className='text-gray-400 text-center text-[14px]'>
          Please click below to add your first component.
        </p>
      </div>
      <button
        className='flex gap-1 items-center bg-sky-500 p-2 rounded-md text-white text-center text-[12px] px-3 pr-5'
        onClick={handleAddComponent}
      >
        <AddIcon />
        <span className='text-sm'>Add New Component</span>
      </button>
    </div>
  )
}

export default EmptyComponentPlaceHolder