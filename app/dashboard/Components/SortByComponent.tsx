import { useAppContext } from '@/app/ContextApi'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import React, { useRef } from 'react'


const SortByComponent = () => {

  const {
    allProjectsObject: { allProjects },
    openSortingDropdownObject: { openSortingDropdown, setOpenSortingDropdown },
    sortingDropDownPositionsObject: { sortingDropDownPositions, setSortingDropDownPositions }, 
    sortingOptionsObject: { sortingOptions }, // Criterios de ordenamiento
  } = useAppContext();

  const nameRef = useRef<HTMLDivElement>(null);

  const openSortingDropDownFunction = () => {
    if(nameRef.current){
      const rect = nameRef.current.getBoundingClientRect();
      const top = rect.top;
      const left = rect.left;

      setSortingDropDownPositions({top, left}) // Situa el dropdown en la posición correcta
    }

    setOpenSortingDropdown(true) // Abre el dropdown
  }

  const selectedName = sortingOptions.find(
    (category) => category.options.some((option) => option.selected) // Find the selected option in the sortingOptions array
  )

  return (
    <div className='mt-11 mb-[13px] flex gap-2 items-center justify-between text-[13px]'>
      <div className='flex gap-1'>
        <span className='text-slate-400'>You have</span>
        <span className='text-sky-500 font-semibold'>{allProjects.length}</span>
        <span className='text-slate-400'>projects!</span>
      </div>

      <div className='flex gap-2 items-center'>
        <span className='text-slate-400'>Sort by</span>
        <div
          ref={nameRef}
          onClick={openSortingDropDownFunction}
          className='text-sky-500 flex gap-1 items-center'
        >
          <span>{selectedName?.category}</span>
          {openSortingDropdown ? (
            <KeyboardArrowUp className="text-[13px]" />
          ) : (
            <KeyboardArrowDown className="text-[13px]" />

          )}
        </div>
      </div>
    </div>
  )
}

export default SortByComponent