import { Project } from '@/app/allData';
import { useAppContext } from '@/app/ContextApi';
import { TextToIcon } from '@/utils/textToIcon';


const SingleProject = ({ singleProject }: { singleProject: Project }) => {

  const { 
    showComponentPageObject: {showComponentPage, setShowComponentPage },
    selectedProjectObject: { selectedProject, setSelectedProject },
  } = useAppContext()

  const projectClicked = () => {
    setShowComponentPage(true);
    setSelectedProject(singleProject);
  }

  return (
    <div className='w-[200px] border border-slate-100 rounded-md p-5 flex gap-2 justify-center flex-col items-center max-sm:w-full'>
      {/* Icon */}
      <div className='w-[70px] h-[70px] bg-sky-100 rounded-full flex items-center justify-center'>
        { TextToIcon({ 
          text: singleProject.icon, 
          size: "medium" 
        })} 
      </div>

      {/* Name and components count */}
      <div className='flex flex-col items-center justify-center'>
        <span 
          className='font-semibold text-lg cursor-pointer hover:text-sky-500 select-none'
          onClick={projectClicked}
        >
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