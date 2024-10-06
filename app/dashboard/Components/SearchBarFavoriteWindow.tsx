import { FilterListRounded, KeyboardArrowDownRounded, SearchRounded } from '@mui/icons-material'
import React from 'react'

const SearchBarFavoriteWindow = ({
  searchQuery, setSearchQuery
}:{
  searchQuery: string, 
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <div className="flex gap-5 items-center justify-between mt-12 relative">
      <div className={`h-[42px] bg-slate-50 flex items-center text-sm rounded-md pl-3 gap-1 w-[80%]`}>
        <SearchRounded className='text-slate-400'/>
        <input 
          placeholder="Search for a component..."
          className="bg-transparent outline-none w-full font-light"
        />
      </div>
      
      <button>
        <FilterListRounded sx={{ fontSize: 17 }} />
        <span className="max-md:hidden">
          Filter By: <span className='font-semibold'>Project</span>
        </span>
        <KeyboardArrowDownRounded sx={{ fontSize: 17 }} />
      </button>
    </div>
  )
}

export default SearchBarFavoriteWindow