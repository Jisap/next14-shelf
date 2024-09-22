import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Component } from '@/app/allData';
import { formatDate } from '../../../utils/formatDate';
import { useAppContext } from '@/app/ContextApi';

const SingleFavoriteComponent = ({ component }: { component:Component }) => {
  
  const {
    selectedComponentObject: { selectedComponent, setSelectedComponent },
    openComponentEditorObject: { openComponentEditor, setOpenComponentEditor },
    selectedProjectObject: { selectedProject, setSelectedProject },
    allProjectsObject: { allProjects },
  } = useAppContext();
  

  const openComponent = () => {
    setSelectedComponent(component);
    setOpenComponentEditor(true)
    // Get the project and set it in the selectedProject state
    const project = allProjects.find(
      (project) =>
        project.name.toLowerCase() === component.projectName.toLowerCase()
    );

    if (project) {
      setSelectedProject(project);
    } else {
      console.log(`Project not found for component: ${component.name}`);
    }

    // Scroll to the top of the page or to the component editor
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className='grid grid-cols-4 gap-4 text-sm items-center rounded-lg p-2 max-sm:grid-cols-2'>
      
      <span 
        onClick={openComponent}
        className='hover:text-sky-500 cursor-pointer'
      >
        {component.name}
      </span>
      <span className='max-sm:hidden'>{formatDate({isoString: component.createdAt})}</span>
      
      <span className='justify-self-start max-sm:hidden'>
        <span className='inline-block rounded-2xl bg-sky-500 text-white text-[12px] px-4 py-1 whitespace-nowrap'>
          {component.projectName}
        </span>
      </span>

      <div className='flex gap-2'>
        <div 
          onClick={openComponent}
          className='bg-sky-500 rounded-full w-7 h-7 flex items-center justify-center hover:bg-sky-600 cursor-pointer' 
        >
          <EditIcon fontSize='small' className='text-white text-[13px]' />
        </div>
        <div className='bg-sky-500 rounded-full w-7 h-7 flex items-center justify-center hover:bg-sky-600 cursor-pointer'>
          <DeleteIcon fontSize='small' className='text-white text-[13px]' />
        </div>
      </div>
    </div>
  )
}

export default SingleFavoriteComponent