import { useAppContext } from '@/app/ContextApi'
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import toast from 'react-hot-toast';
import { Component, Project } from '@/app/allData';


const ConfirmationDeleteWindow = () => {

  const { 
    openDeleteWindowObject: {openDeleteWindow, setOpenDeleteWindow },
    selectedComponentObject: {selectedComponent},
    allProjectsObject: {allProjects, setAllProjects},
    selectedProjectObject: {selectedProject, setSelectedProject},
    openAllProjectsWindowObject: {openAllProjectsWindow, setOpenAllProjectsWindow},
  } = useAppContext();

  const deleteComponentFunction = () => {
    try {
      if (selectedProject) {                                                    // Primero, verifica si hay un proyecto seleccionado 
        const updatedSelectedProject = {                                        // Si existe, crea una copia actualizada del proyecto seleccionado                 
          ...selectedProject,
          components: selectedProject.components.filter(                        // donde se elimina el componente seleccionado 
            (component: Component) => component._id !== selectedComponent?._id
          ),
        };
        setSelectedProject(updatedSelectedProject);                             // Luego se actualiza el estado del proyecto seleccionado  
      }

      const updatedAllProjects = allProjects.map((project: Project) => {        // A continuación, actualiza la lista de todos los proyectos
        if (project._id === selectedProject?._id) {
          return {
            ...project,
            components: project.components.filter(
              (component: Component) => component._id !== selectedComponent?._id  // donde se elimina el componente seleccionado para borrar
            )
          }
        }
        return project;
      })

      setAllProjects(updatedAllProjects);                                      // Finalmente, se actualiza la lista de todos los proyectos
      setOpenDeleteWindow(false);                                              // Y Se cierra la ventana de confirmación              
      toast.success("Component deleted successfully");
    } catch (error) {
      toast.error("Error deleting component");
    } 
  }

  const deleteProjectFunction = async() => {

    if(!selectedProject?._id){
      toast.error("No project selected for deletion");
      return;
    }

    try {
      const response = await fetch(
        `/api/projects?projectId=${selectedProject._id}`,                   // Se envía una solicitud de borrado al servidor
        {method: "DELETE"}
      );

      if(!response.ok){                                                     // Si la solicitud no es exitosa mensaje de error
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete project"); 
      }

      const updatedAllProjects = allProjects.filter(                         // Pero si la solicitud si lo es, primero, se crea una copia actualizada de la lista de todos los proyectos
        (project: Project) => project._id !== selectedProject?._id           // donde se elimina el proyecto seleccionado
      );
      setAllProjects(updatedAllProjects);                                    // Luego se actualiza la lista de todos los proyectos
      setOpenDeleteWindow(false);                                            // Y se cierra la ventana de confirmación
      toast.success("Project deleted successfully")                                            
    } catch (error) {
      toast.error("Error deleting project")
    }
  }

  return (
    <div
      style={{ visibility: openDeleteWindow ? 'visible' : 'hidden' }}
      className='w-[40%] max-sm:w-[90%] absolute p-8 px-9 border border-slate-100 bg-white shadow-md top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-[80]'
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
        <span className='font-bold'>
          Permanently delete this{" "}
          {openAllProjectsWindow ? "project" : "component"} ?
        </span>
        {/* Second Message */}
        <span className='text-slate-400 text-[13px] mt-2'>
          Are you sure you want to permanently delete this{" "}
          {openAllProjectsWindow ? "project" : "component"} ?
        </span>
        <span className='text-red-500 font-semibold mt-4 text-[13px]'>
          This section cannot be undone
        </span>
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
          onClick={
            openAllProjectsWindow 
              ? deleteProjectFunction
              : deleteComponentFunction
          }
          className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
        >
          Delete Component {openAllProjectsWindow ? "project" : "component"}
        </button>
      </div>
    </div>
  )
}

export default ConfirmationDeleteWindow