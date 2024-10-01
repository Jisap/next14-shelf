import { useAppContext } from '@/app/ContextApi'
import { KeyboardArrowDown } from '@mui/icons-material'
import React from 'react'

const SortByComponent = () => {

  const {
    allProjectsObject: { allProjects },
    openSortingDropdownObject: { setOpenSortingDropdown },
  } = useAppContext();

  const openSortingDropdownHandler = () => {
    setOpenSortingDropdown(true)
  }

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
          onClick={openSortingDropdownHandler}
          className='text-sky-500 flex gap-1 items-center'
        >
          <span>Name</span>
          <KeyboardArrowDown className="text-[13px]" />
        </div>
      </div>
    </div>
  )
}

export default SortByComponent