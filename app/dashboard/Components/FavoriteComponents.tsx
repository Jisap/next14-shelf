import React from 'react'
import SingleFavoriteComponent from './SingleFavoriteComponent'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useAppContext } from '@/app/ContextApi';
import { CircularProgress } from '@mui/material';

const FavoriteComponents = () => {

  const { 
    allFavoriteComponentsObject: { allFavoriteComponents },
    isLoadingObject: { isLoading, setIsLoading}
  } = useAppContext();

  return (

    <div className='bg-white w-full p-8 rounded-lg mt-4'>
      
      {/* Main Header */}
      <div className='flex justify-between'>
        <span className='font-bold text-lg'>Favorite Components</span>
        {/* Button */}
        <button className='bg-sky-500 flex gap-2 items-center text-white text-[12px] p-2 px-3 rounded-md'>
          <VisibilityIcon fontSize='small' />
          <span className='max-sm:hidden'>View All</span>
        </button>
      </div>

      
      {/* Header's List */}
      <div className='grid grid-cols-4 mt-6 mb-4 text-sm items-center text-slate-400 px-4 max-sm:grid-cols-2'>
        <span className=''>Component Name</span>
        <span className='max-sm:hidden'>Created At</span>
        <span className='max-sm:hidden'>Project</span>
        <span className=''>Actions</span>
      </div>

      {/* Components */}

      {isLoading && (
        <div className='flex flex-col gap-3 justify-center items-center w-full mt-[70px] mb-7'>
          <CircularProgress value={100} />
          <span className='text-slate text-sm'>Loading...</span>
        </div>
      )}

      {!isLoading && allFavoriteComponents.length === 0 ? (
        <div className='flex justify-center items-center mt-[70px] mb-8 text-slate-400 text-sm'>
          No favorite components set yet...
        </div>
      ) : (
        <div className='px-4 flex flex-col gap-1 mt-1'>
          {allFavoriteComponents.slice(0, 5).map((component, index) => (
            <div key={index}>
              <SingleFavoriteComponent component={component} />
            </div>
          ))}
        </div>
      )}

    
    </div>
  )
}

export default FavoriteComponents