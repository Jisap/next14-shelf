


import { useAppContext } from '@/app/ContextApi'
import React from 'react'
import SingleFavoriteComponent from './SingleFavoriteComponent'
import SingleFavoriteComponentWindow from './SingleFavoriteComponentWindow'
import { CircularProgress } from '@mui/material'
import EmptyComponentPlaceHolder from './ComponentsPage/EmptyComponentPlaceHolder'
import EmptyFavoritePlaceholderWindow from './EmptyFavoritePlaceholderWindow'
import NoFoundFavoriteSearched from './NoFoundFavoriteSearched'


const ComponentsList = ({ searchInput }: { searchInput: string }) => {

  const { 
    allFavoriteComponentsObject: { allFavoriteComponents },
    isLoadingObject: { isLoading },
    selectedProjectToFilterObject: { selectedProjectToFilter },
  } = useAppContext();

  const filterBySearchInput = selectedProjectToFilter
    ? allFavoriteComponents
        .filter((item) => {
          return item.name.toLowerCase().includes(searchInput.toLowerCase())
        })
        .filter((item) => {
          return item.projectName === selectedProjectToFilter
        })
    : allFavoriteComponents.filter((item) => {
        return item.name.toLowerCase().includes(searchInput.toLowerCase())
    })

  return (
    <div className='w-full bg-slate-50 h-[64%] rounded-lg flex flex-col gap-3'>
      
      {isLoading && (
        <div className='flex flex-col gap-3 justify-center items-center w-full mt-28'>
          <CircularProgress value={100} />
          <span className='text-slate-400 text-sm'>Loading...</span>
        </div>
      )}
      
      {allFavoriteComponents.length === 0 && !isLoading ? (
        <EmptyFavoritePlaceholderWindow />
        ) : (
          <>
          {
            filterBySearchInput.length > 0 ? (
              <>
                {filterBySearchInput.map((component, index) => (
                  <SingleFavoriteComponentWindow key={index} item={component} />
                ))}
              </>
            ) : (
                <>
                  {!isLoading && <NoFoundFavoriteSearched />}
                </>
              ) 
            }
          </>
        )
      }
    </div>
  )
}

export default ComponentsList