"use client"

import React, { useEffect, useRef, useState } from 'react'
import CategoryIcon from '@mui/icons-material/Category';
import CloseIcon from '@mui/icons-material/Close';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { useAppContext } from '@/app/ContextApi';
import { ErrorOutline } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';
import { Project } from '@/app/allData';
import { useUser } from '@clerk/nextjs';
import toast from 'react-hot-toast';

const AddProjectWindow = ({
  selectedIcon } : {
    selectedIcon: {
      icon:React.ReactNode;
      name: string;
    }}) => {

  const {
    isMobileViewObject: { isMobileView },
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
    openIconWindowObject: { setOpenIconWindow },
    allProjectsObject: { allProjects, setAllProjects }
  } = useAppContext();

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const { user } = useUser();

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {                 // Cada vez que se abre la ventana de añadir proyecto
    inputRef.current?.focus();      // se establece el foco en el input correspondiente permitiendo escribir directamente
    setProjectName("");
    setErrorMessage("");
  },[openProjectWindow]);

  const handleInputUpdate = ( e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");
    setProjectName(e.target.value);
  }

  const AddNewProject = () => {

    if(projectName.trim() === ""){
      setErrorMessage("Project name cannot be empty");
      inputRef.current?.focus();
      return;
    }

    if(allProjects.find(
      (project) => project.name.toLocaleLowerCase() === projectName.toLocaleLowerCase())){
        setErrorMessage("Project name already exits");
        inputRef.current?.focus();
        return;
      }

      const newProject: Project = {
        _id: uuidv4(),
        clerkUserId: user?.id as string,
        name: projectName,
        icon: selectedIcon.name,
        createdAt: new Date().toISOString(),
        components: []
      }

      try {
        setAllProjects([...allProjects, newProject]);
        toast.success("project added successfuly");
        setOpenProjectWindow(false);
      } catch (error) {
        toast.error("Failed to add project");
      }
  }

  console.log(allProjects);

  return (
    <div 
      className={`
        ${isMobileView ? "w-[80%]" : "w-[40%]"} 
        h-[288px] border border-slate-50 bg-white rounded-md shadow-md absolute left-1/2 top-24 -translate-x-1/2 z-50
        ${openProjectWindow ? "absolute" : "hidden"}
      `}
    >
      {/* header */}
      <div className='flex justify-between items-center pt-7 px-7'>
        <div className='flex items-center gap-2'>
          <div className='w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center'>
            <CategoryIcon 
              sx={{ fontSize: 17}}
              className='text-sky-400 text-[12px]'
            />
          </div>
          <span className='font-semibold text-lg'>New Project</span>
        </div>
        <CloseIcon 
          onClick={() => setOpenProjectWindow(false)}
          sx={{ fontSize: 16}}
          className='text-slate-400 text-[18px] cursor-pointer'
        />
      </div>

      {/* body */}
      <div className='flex flex-col gap-2 mt-11 px-7'>
        <span className='text-[13px] font-medium'>Project Name</span>
        <div className='flex gap-3'>
          {/* Input */}
          <input 
            ref={inputRef}
            value={projectName}
            onChange={handleInputUpdate}
            placeholder="Enter Project Name..."
            className='p-[10px] text-[12px] w-full rounded-md border outline-none'
          />
          {/* error message */}
          <div className={`flex items-center gap-2 mt-2 ${errorMessage ? "" : "hidden"}`}>
            <ErrorOutline 
              sx={{ fontSize: 14 }}
              className='text-red-500'
            />
            <span className='text-[12px] text-red-500 mt-[2px]'>
              {errorMessage}
            </span>
          </div>
          {/* icon */}
          <div 
            className='w-12 h-10 text-white flex items-center justify-center bg-sky-500 rounded-lg cursor-pointer'
            onClick={() => setOpenIconWindow(true)} 
          >
            {selectedIcon?.icon}
          </div>
        </div>
      </div>

      {/* footer */}
      <div className='w-full mt-12 mb-10 flex gap-3 justify-end px-7 items-center'>
        {/* cancel button */}
        <button
          onClick={() => setOpenProjectWindow(false)} 
          className='border border-slate-200 text-slate-400 text-[12px] p-2 px-6 rounded-md hover:border-slate-300 transition-all hover:bg-slate-50'
        >
          Cancel
        </button>

        <button
          onClick={AddNewProject}
          className='bg-sky-500 hover:bg-sky-600 text-white text-[12px] p-2 px-3 rounded-md transition-all'
        >
          Add Project
        </button>
      </div>

    </div>
  )
}

export default AddProjectWindow