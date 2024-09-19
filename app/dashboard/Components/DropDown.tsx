import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useAppContext } from '@/app/ContextApi';
import { useEffect, useRef } from 'react';
import { Component } from '@/app/allData';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const DropDown = () => {

  const {
    dropDownPositionsObject: { dropDownPositions, setDropDownPositions },
    openDropDownObject: { openDropDown, setOpenDropDown },
    openDeleteWindowObject: { openDeleteWindow, setOpenDeleteWindow },
    selectedProjectObject: { selectedProject, setSelectedProject },
    selectedComponentObject: { selectedComponent, setSelectedComponent },
    allProjectsObject: { allProjects, setAllProjects },
    openComponentEditorObject: { openComponentEditor, setOpenComponentEditor },
  } = useAppContext();
  
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node) 
      ) {
        setOpenDropDown(false);
        if(openDeleteWindow){
          setSelectedComponent(null);
        }
      }
    }

    const handleScroll = () => {
      setOpenDropDown(false);
      setSelectedComponent(null);
    }

    const handleWheel = (event: WheelEvent) => {
      if(event.deltaY !== 0){
        setOpenDropDown(false);
        setSelectedComponent(null);
      }
    }

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    }
  },[setOpenDropDown]);

  // Make sure that the selected component is null when the dropdonw is closed and component editor is closed
  useEffect(() => {
    if(openDropDown === false){
      if(!openComponentEditor){
        setSelectedComponent(null);
      }
    }
  },[openDropDown])

  const deleteComponentFunction = () => {
    setOpenDeleteWindow(true);
    setOpenDropDown(false);
  };

  const duplicateComponentFunction = () => {
    if(selectedComponent && selectedProject){
      try {
        //Step 1: Create a new component object with a new id a new name on the selected component
        const newComponent: Component = {
          ...selectedComponent,
          _id: uuidv4(),
          name: `${selectedComponent.name} Copy`,
          createdAt: new Date().toISOString(),
        }

        // 2º Step: Add the new component to the selected project
        const updateSelectedProject = {
          ...selectedProject,
          components: [...selectedProject.components, newComponent],
        }

        // 3º Step: Sort the components by createdAt
        updateSelectedProject.components.sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        })

        // 4º Step: Update the selected project with the new component
        setSelectedProject(updateSelectedProject);

        // 5º Step: Add a copy of the selected component in the allProjects state
        const updateAllProjects = allProjects.map((project) => {
          if(project._id === selectedProject._id){
            return updateSelectedProject
          }
          return project;
        })

        setAllProjects(updateAllProjects);
        toast.success("Component has been duplicated successfully");
      } catch (error) {
        toast.error("Failed to duplicate the component");
      }
    }

    setOpenDropDown(false);
  }

  return (
    <div
      ref={dropDownRef}
      style={{
        top: dropDownPositions.top + 54,
        left: dropDownPositions.left - 135,
        visibility: openDropDown ? "visible" : "hidden",
      }}
      className="bg-white z-50 px-5 border border-slate-50 fixed py-4 w-[160px] selec-none shadow-md rounded-lg flex flex-col gap-5"
    >
      {/* Edit Icon */}
      <div 
        className='flex gap-1 items-center text-slate-600 cursor-pointer hover:text-sky-500'
        onClick={() => setOpenComponentEditor(true)} 
      >
        <EditOutlinedIcon 
          sx={{ fontSize: 21 }}
          className='text-[21px]'
        />
        <span className='text-[14px]'>Edit</span>
      </div>

      {/* Duplicate Icon */}
      <div 
        onClick={duplicateComponentFunction}
        className='flex gap-1 items-center text-slate-600 cursor-pointer hover:text-sky-500'
      >
        <ContentCopyIcon 
          sx={{ fontSize: 21 }}
          className='text-[21px]'
        />
        <span className='text-[14px]'>Duplicate</span>
      </div>

      {/* Divider Icon */}
      <hr className='border-t border-slate-200' />

      {/* Remove Icon */}
      <div 
        onClick={deleteComponentFunction}
        className='flex gap-1 items-center text-slate-600 cursor-pointer hover:text-red-500'
      >
        <DeleteOutlineOutlinedIcon 
          sx={{ fontSize: 21 }}
          className='text-[21px]'
        />
        <span className='text-[14px]'>Delete</span>
      </div>
    </div>
  )
}

export default DropDown