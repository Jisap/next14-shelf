import AddModeratorIcon from '@mui/icons-material/AddModerator';

const EmptyProjectsPlaceHolder = () => {
  return (
    <div className='p-1 gap-5 flex flex-col justify-center h-[200px] mt-[68px] mb-[34px] items-center'>
      <AddModeratorIcon 
        sx={{ fontSize: 80 }}
        className='text-[70px] text-slate-200'
      />
      <div>
        <h3 className='font-semibold text-[15px] mb-1 text-center'>
          {`There are no projects Yet...`}
        </h3>
        <p className='text-gray-400 w-52 text-center text-[13px]'>
          Please click below to add your first project.
        </p>
        <button className='bg-sky-500 p-2 rounded-md text-white text-center text-[12px] px-7'>
          Add New Project
        </button>
      </div>
    </div>
  )
}

export default EmptyProjectsPlaceHolder