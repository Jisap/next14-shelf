import React from 'react'
import SingleProject from './SingleProject'
import { useAppContext } from '@/app/ContextApi'
import { CircularProgress } from '@mui/material'
import EmptyProjectsPlaceHolder from './EmptyProjectsPlaceholder'
import SingleProjectWindow from './SingleProjectWindow'

const ProjectsList = () => {

  const {
    allProjectsObject: { allProjects },
    isLoadingObject: { isLoading },
  } = useAppContext();

  return (
    <div className='w-full bg-slate-50 h-[64%] rounded-lg p-3 flex flex-col gap-3'>
      {isLoading && (
        <div className='flex flex-col gap-3 justify-center items-center w-full mt-28'>
          <CircularProgress value={100} />
          <span className='text-slate-400 text-sm'>Loading...</span>
        </div>
      )}
      {allProjects.length === 0 && !isLoading ? (
        <EmptyProjectsPlaceHolder />
      ) : (
        <>
          {allProjects.map((project, index) => (
            <SingleProjectWindow key={index} project={project} />
          ))}
        </>
      )}
    </div>
  )
}

export default ProjectsList