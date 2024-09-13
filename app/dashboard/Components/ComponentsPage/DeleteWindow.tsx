import { useAppContext } from '@/app/ContextApi'
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const ConfirmationDeleteWindow = () => {

  const { openDeleteWindowObject: {openDeleteWindow, setOpenDeleteWindow }} = useAppContext();

  return (
    <div
      style={{ visibility: openDeleteWindow ? 'visible' : 'hidden' }}
      className='w-[40%] max-sm:w-[90%] absolute p-8 px-9 border border-slate-100 bg-white shadow-md lef-1/2 top-1/2 translate-x-1/2 -translate-y-1/2'
    >
      {/* Header Icon */}
      <div className='flex justify-between items-start'>
        <div className='w-[42px] h-[42px] bg-red-200 rounded-full flex items-center justify-center'>
          <DeleteIcon className='text-red-500 text-[24px]' />
        </div>
        <CloseIcon 
          onClick={() => setOpenDeleteWindow(false)}
          sx={{fontSize: '18px'}}
          className='text-slate-400 text-[18px] cursor-pointer'
        />
      </div>

      {/* Message */}
      <div className='flex flex-col mt-7'>
        {/* Main Message */}
        <span className='font-bold'>Permanently delete this component ?</span>
        {/* Second Message */}
        <span className='text-slate-400 text-[13px] mt-2'>Are you sure you want to permanently delete this component ?</span>
      </div>

      {/* Buttons */}
      <div className='flex justify-end gap-4 mt-9 mb-2 text-[12px]'>
        <button
          onClick={() => setOpenDeleteWindow(false)}
          className='px-4 py-2 text-slate-500 border border-slate-200 rounded-md hover:bg-slate-200'
        >
          Cancel
        </button>
        <button
         className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
        >
          Delete Component
        </button>
      </div>
    </div>
  )
}

export default ConfirmationDeleteWindow