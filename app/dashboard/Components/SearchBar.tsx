"use client"

import { useAppContext } from '@/app/ContextApi';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef } from 'react';
import InputSearchBar from './InputSearchBar';
import SearchIconAndText from './SearchIconAndText';

const SearchBar = () => {

  const { showSearchBarObject: { showSearchBar, setShowSearchBar }} = useAppContext();

  const searchBarRef = useRef<HTMLDivElement>(null);

  const handleClickedSearchBar = () => {
    if(!showSearchBar){
      setShowSearchBar(true)
    }
  }

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) { // Si el elemento clickeado no está dentro del input de busqueda
        setShowSearchBar(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  },[setShowSearchBar])

  return (
    <div 
      ref={searchBarRef}
      onClick={handleClickedSearchBar}
      className='bg-slate-100 w-1/3 cursor-pointer hover:bg-slate-200 transition-all p-[8px] flex gap-1 justify-center items-center rounded-md'
    >
      {showSearchBar ? <InputSearchBar /> : <SearchIconAndText />}
    </div>
  )
}

export default SearchBar