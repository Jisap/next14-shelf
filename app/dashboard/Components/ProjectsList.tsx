import React from 'react'
import { useAppContext } from '@/app/ContextApi'
import { CircularProgress } from '@mui/material'
import EmptyProjectsPlaceHolder from './EmptyProjectsPlaceholder'
import SingleProjectWindow from './SingleProjectWindow'
import NoFoundProjectsWindowSearched from './NoFoundProjectsWindowSearched'

const ProjectsList = ({ searchQuery }: { searchQuery: string }) => {

  const {
    allProjectsObject: { allProjects },
    isLoadingObject: { isLoading },
  } = useAppContext();

  const filterAllProjectsBySearchQuery = allProjects.filter((singleProject) => 
    singleProject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          {filterAllProjectsBySearchQuery.length > 0 ? (
            <>
              {
                filterAllProjectsBySearchQuery.map((project, index) => (
                  <SingleProjectWindow key={index} project={project} />
                ))
              }
            </>
          ) : (
            <>
              {
                    !isLoading && <NoFoundProjectsWindowSearched />
              }
            </>
          )}
        </>
      )}
    </div>
  )
}

export default ProjectsList