import { Project } from '@/app/allData';
import { TextToIcon } from '@/utils/textToIcon';
import LandslideIcon from '@mui/icons-material/Landslide';

const SingleProject = ({ singleProject }: { singleProject: Project }) => {
  return (
    <div className='w-[200px] border border-slate-100 rounded-md p-5 flex gap-2 justify-center flex-col items-center max-sm:w-full'>
      {/* Icon */}
      <div className='w-[70px] h-[70px] bg-sky-100 rounded-full flex items-center justify-center'>
        { TextToIcon({ text: singleProject.icon, size: "medium" })}
        {/* <LandslideIcon className='text-[30px] text-sky-400' /> */}
      </div>

      {/* Name and components count */}
      <div className='flex flex-col items-center justify-center'>
        <span className='font-semibold text-lg cursor-pointer hover:text-sky-500 select-none'>
          {singleProject.name}
        </span>
        <span className='text-[12px] text-slate-400 text-center'>
          {singleProject.components.length} Components
        </span>
      </div>
    </div>
  )
}

export default SingleProject