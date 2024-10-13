"use client"

import { useAppContext } from "@/app/ContextApi"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useEffect, useRef } from "react";

const InputSearchBar = () => {

  const {
    showSearchBarObject: { setShowSearchBar },
    mainSearchQueryObject: { mainSearchQuery, setMainSearchQuery },
  } = useAppContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  },[]);

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSearchBar(false);
  };

  return (
    <div className="px-2 flex justify-between items-center w-full">
      <input 
        ref={inputRef}
        value={mainSearchQuery}
        placeholder="Search a component"
        onChange={(e) => setMainSearchQuery(e.target.value)}
        className="w-full bg-slate-100 outline-none text-[-13px] placeholder:text-slate-400"
      />
      <CloseRoundedIcon 
        fontSize="small"
        className="text-slate-500 text-[10px] cursor-pointer"
        onClick={handleCloseClick}
      />
    </div>
  )
}

export default InputSearchBar