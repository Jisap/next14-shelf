import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Links = () => {
  return (
    <div className='mt-44 ml-3 flex flex-col gap-2 text-[15px]'>
      <div className='p-[7px] hover:text-sky-500 select-none cursor-pointer rounded-lg flex items-center gap-2 w-[75%] bg-sky-500 text-white'>
        <HomeIcon />
        <span className='mt-0.5'>Home</span>
      </div>

      <div className='p-[7px] hover:text-sky-500 select-none cursor-pointer rounded-lg flex items-center gap-2 w-[75%] text-slate-400'>
        <CategoryIcon />
        <span className='mt-0.5'>Categories</span>
      </div>

      <div className='p-[7px] hover:text-sky-500 select-none cursor-pointer rounded-lg flex items-center gap-2 w-[75%] text-slate-400'>
        <FavoriteIcon />
        <span className='mt-0.5'>Favorites</span>
      </div>
    </div>
  )
}

export default Links