import { useAppContext } from "@/app/ContextApi"
import { useEffect, useRef } from "react";
import DropDown from './DropDown';



export const SortingDropdown = () => {

  const { 
    openSortingDropdownObject: { openSortingDropdown, setOpenSortingDropdown },
  } = useAppContext();

  const DropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (DropDownRef.current && 
        !DropDownRef.current.contains(event.target as Node)
      ) {
        setOpenSortingDropdown(false);
      }
    }

    if(openSortingDropdown){
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  },[openSortingDropdown])

  return (
    <div
      ref={DropDownRef}
      style={{display: openSortingDropdown ? 'block' : 'none'}}
      className="bg-white text-sm top-[170px] right-14 z-[60] px-4 border border-slate-50 fixed py-6 w-[160px] shadow-md rounded-lg gap-10 flex flex-col select-none"
    >
      {/* Order */}
      <div className="flex flex-col gap-1 text-slate-600 cursor-pointer">
        <span className="text-[13px] font-bold">Order</span>
        <div className="flex flex-col gap-2 ml-2 mt-1">
          <div className="flex gap-1 items-center">
            <span className="text-[12px]">
              A-Z
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-[12px]">
              Z-A
            </span>
          </div>
        </div>
      </div>

      {/* Date */}
      <div className="flex flex-col gap-1 mt-3 text-slate-600 cursor-pointer">
        <span className="text-[13px] font-bold">
          Date
        </span>
        <div className="flex flex-col gap-2 mt-1">
          <div className="flex gap-1 items-center text-slate-600 cursor-pointer hover:text-sky-500">
            <span className="text-[12px]">Newest</span>
          </div>
          <div className="flex gap-1 items-center text-slate-600 cursor-pointer hover:text-sky-500">
            <span className="text-[12px]">Oldest</span>
          </div>
        </div>
      </div>

    </div>
  )
}
