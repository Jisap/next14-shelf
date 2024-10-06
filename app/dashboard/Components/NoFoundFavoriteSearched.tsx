import { Search } from '@mui/icons-material'
import React from 'react'

const NoFoundFavoriteSearched = () => {
  return (
    <div className='p-1 gap-5 flex flex-col justify-center pt-[90px] items-center'>
      <Search 
        sx={{ fontSize: 80 }}
        className='text-[70px] text-slate-200'
      />
      <div className=''>
        <p className='text-gray-400 w-72 text-center text-[13px]'>
          {`Oops! That component was not found... Try searching with a different keyword.`}
        </p>
      </div>
    </div>
  )
}

export default NoFoundFavoriteSearched