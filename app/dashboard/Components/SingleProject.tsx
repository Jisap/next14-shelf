import LandslideIcon from '@mui/icons-material/Landslide';

const SingleProject = () => {
  return (
    <div className='w-[200px] border border-slate-100 rounded-md p-5 flex gap-2 justify-center flex-col items-centermax-sm:w-full'>
      {/* Icon */}
      <div className='w-[70px] h-[70px] bg-sky-100 rounded-full flex items-center justify-center'>
        <LandslideIcon className='text-[30px] text-sky-400' />
      </div>

      {/* Name and components count */}
      <div className='flex flex-col items-center justify-center'>
        <span className='font-semibold text-lg cursor-pointer hover:text-sky-500 select-none'>
          Buttons
        </span>
        <span className='text-[12px] text-slate-400 text-center'>
          10 components
        </span>
      </div>
    </div>
  )
}

export default SingleProject