import { Delete, DragIndicatorRounded, EditRounded } from '@mui/icons-material'
import React from 'react'
import CategoryIcon from '@mui/icons-material/Category';
import { Project } from '@/app/allData';
import { TextToIcon } from '@/utils/textToIcon';
import { useAppContext } from '@/app/ContextApi';

const SingleProjectWindow = ({ project }:{ project: Project }) => {

  const {
    selectedProjectObject: { selectedProject, setSelectedProject },
    openProjectWindowObject: { setOpenProjectWindow },
    showComponentPageObject: { setShowComponentPage },
    openAllProjectsWindowObject: { setOpenAllProjectsWindow },
    menuItemsObject: { menuItems, setMenuItems },
    openDeleteWindowObject: { openDeleteWindow,setOpenDeleteWindow },
  } = useAppContext();

  const editTheProjectClicked = () => {
    setOpenProjectWindow(true);   // Abre la ventana de AddProjecWindow
    setSelectedProject(project);
  }

  const openTheProject = () => {  // Función que abre el proyecto seleccionado
    setSelectedProject(project)   // update the selectedProject
    setOpenProjectWindow(false)   // Cerramos la ventana de AddProjectWindow
    setShowComponentPage(true)    // Abrimos la ventana de ComponentPage
    setOpenAllProjectsWindow(false)
  }

  const openTheDeleteWindow = () => {  // Función que abre la ventana de eliminar proyecto
    setSelectedProject(project)     // update the selectedProject
    setOpenDeleteWindow(true)       // Abrimos la ventana de eliminar proyecto
  }


  return (
    <div className='w-full bg-white rounded-md flex gap-3 items-center justify-between p-3'>
      <div className='flex gap-3 items-center'>
        <DragIndicatorRounded className='text-slate-400'/>
        {/* Project Icon */}
        <div>
          <div className='w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center'>
            {TextToIcon({
              text: project.icon,
              fontSize: 17,
              className:'text-sky-400 text-[17px]'
            })} 
          </div>
        </div>
        {/* Project Name */}
        <div className='flex flex-col'>
          <span 
            className='font-bold cursor-pointer'
            onClick={openTheProject}  
          >
            {project.name}
          </span>
          <span className='text-slate-400 text-[12px]'>
            {project.components.length} Components
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='flex gap-2 items-center'>
        {/* Edit Button */}
        <div 
          onClick={editTheProjectClicked}
          className='rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300'
        > 
          <EditRounded 
            className='text-slate-400'
            sx={{ fontSize: 15 }}
          />
        </div>
        {/* Delete Button */}
        <div>
          <div 
            onClick={openTheDeleteWindow}
            className='rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300'
          >
            <Delete 
              className='text-slate-400'
              sx={{ fontSize: 15 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProjectWindow