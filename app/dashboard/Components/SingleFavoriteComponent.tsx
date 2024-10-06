import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Component } from '@/app/allData';
import { formatDate } from '../../../utils/formatDate';
import { useAppContext } from '@/app/ContextApi';
import { openTheDeleteWindow } from '@/app/lib/openTheDeleteWindow';
import { openComponent } from '@/app/lib/openComponent';

const SingleFavoriteComponent = ({ component }: { component:Component }) => {
  
  const {
    selectedComponentObject: { setSelectedComponent },
    openComponentEditorObject: { setOpenComponentEditor },
    selectedProjectObject: { setSelectedProject },
    allProjectsObject: { allProjects },
    openDeleteWindowObject: { setOpenDeleteWindow },
    openAllFavoriteWindowObject: { setOpenAllFavoriteWindow },
  } = useAppContext();
  

  // const openComponent = () => {
  //   setSelectedComponent(component);
  //   setOpenComponentEditor(true)
    
  //   const project = allProjects.find(                                           // Get the project and set it in the selectedProject state                      
  //     (project) =>
  //       project.name.toLowerCase() === component.projectName.toLowerCase()
  //   );

  //   if (project) {
  //     setSelectedProject(project);
  //   } else {
  //     console.log(`Project not found for component: ${component.name}`);
  //   }

  //   window.scrollTo({ top: 0, behavior: "smooth" });                             // Scroll to the top of the page or to the component editor
  // }

  return (
    <div className='grid grid-cols-4 gap-4 text-sm items-center rounded-lg p-2 max-sm:grid-cols-2'>
      
      <span 
        onClick={() => openComponent({
          component: component,
          allProjects,
          setSelectedComponent,
          setSelectedProject,
          setOpenComponentEditor,
          setOpenAllFavoriteWindow
        })}
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
          onClick={() => openComponent({
            component: component,
            allProjects,
            setSelectedComponent,
            setSelectedProject,
            setOpenComponentEditor,
            setOpenAllFavoriteWindow
          })}
          className='bg-sky-500 rounded-full w-7 h-7 flex items-center justify-center hover:bg-sky-600 cursor-pointer' 
        >
          <EditIcon fontSize='small' className='text-white text-[13px]' />
        </div>
        <div 
          onClick={() => openTheDeleteWindow({
            component: component,
            allProjects,
            setSelectedComponent,
            setSelectedProject,
            setOpenDeleteWindow
          })}
          className='bg-sky-500 rounded-full w-7 h-7 flex items-center justify-center hover:bg-sky-600 cursor-pointer'
        >
          <DeleteIcon fontSize='small' className='text-white text-[13px]' />
        </div>
      </div>
    </div>
  )
}

export default SingleFavoriteComponent