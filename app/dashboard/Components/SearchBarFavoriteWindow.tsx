import { useAppContext } from '@/app/ContextApi';
import { FilterListRounded, KeyboardArrowDownRounded, KeyboardArrowUpRounded, SearchRounded } from '@mui/icons-material'
import React, { useEffect, useRef } from 'react'

const SearchBarFavoriteWindow = ({
  searchInput,
  setSearchInput
}:{
  searchInput: string, 
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}) => {

  const searchInputRef = useRef<HTMLInputElement>(null);

  const {
    openAllFavoriteWindowObject: { openAllFavoriteWindow },
    openFilterDropDownObject: { openFilterDropDown, setOpenFilterDropDown },
    filterDropDownPositionsObject: { setFilterDropDownPositions },
    allFavoriteComponentsObject: { allFavoriteComponents, setAllFavoriteComponents}
  } = useAppContext();

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    //Focus the input only when openAllProjectsWindow opens (true)
    if (openAllFavoriteWindow) {
      const focusInput = () => {
        if (searchInputRef.current) {
          searchInputRef.current.focus()
        }
      };

      if(!openFilterDropDown){
        // Schedule focus setting for the next render
        setTimeout(focusInput, 0)
      }
    }
  }, [openAllFavoriteWindow])

  const openFilterDropDownFx = () => {
    setOpenFilterDropDown(!openFilterDropDown)
    
    if (buttonRef.current) {
      const rect = buttonRef?.current.getBoundingClientRect();
      const top = rect.top;
      const left = rect.left;
      setFilterDropDownPositions({
        top: top,
        left: left
      })
    }
  }

  return (
    <div className="flex gap-5 items-center justify-between mt-12 relative">
      <div className={`h-[42px] bg-slate-50 flex items-center text-sm rounded-md pl-3 gap-1 w-[80%]`}>
        <SearchRounded className="text-slate-400" />
        <input
          ref={searchInputRef}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search for a project"
          className="bg-transparent outline-none w-full font-light"
        />
      </div>
      <button
        ref={buttonRef}
        onClick={openFilterDropDownFx}
        style={{ opacity: allFavoriteComponents.length > 0 ? 1 : 0.5 }}
        disabled={ allFavoriteComponents.length < 0 }
        className="bg-sky-500 ml-2 p-[10px] px-3 flex gap-2 w-[20%] text-sm rounded-md text-white items-center justify-center"
      >
        <FilterListRounded sx={{ fontSize: 17 }} />
        <span className="max-md:hidden">
          Filter By: <span className="font-semibold">Project</span>
        </span>
        {openFilterDropDown ? (
          <KeyboardArrowUpRounded sx={{ fontSize: 17 }} />
        ) : (
          <KeyboardArrowDownRounded sx={{ fontSize: 17 }} />
        )}
      </button>
    </div>
  )
}

export default SearchBarFavoriteWindow