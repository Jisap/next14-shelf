import { useAppContext } from "@/app/ContextApi"
import { useEffect, useRef, useState } from "react";


export const SortingDropdown = () => {

  const { 
    openSortingDropdownObject: { openSortingDropdown, setOpenSortingDropdown },
    sortingDropDownPositionsObject: { sortingDropDownPositions: { top, left} }, 
  } = useAppContext();

  const DropDownRef = useRef<HTMLDivElement>(null);

  const [sortingOptions, setSortingOptions] = useState([
    {
      category: "Order",
      options: [
        { label: "A-Z", selected: true },
        { label: "Z-A", selected: false },
      ],
    },
    {
      category: "Date",
      options: [
        { label: "Newest", selected: true },
        { label: "Oldest", selected: false },
      ],
    },
  ])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (DropDownRef.current && 
        !DropDownRef.current.contains(event.target as Node)
      ) {
        setOpenSortingDropdown(false);
      }
    }

    const handleScroll = () => {
      setOpenSortingDropdown(false)
    }

    const handleWheel = (event: WheelEvent) => {
      if(event.deltaY !== 0){
        setOpenSortingDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    }

  },[openSortingDropdown])

  return (
    <div
      ref={DropDownRef}
      style={{
        display: openSortingDropdown ? 'block' : 'none',
        top: top + 35,
        left: left - 100
      }}
      className="bg-white text-sm top-[310px] right-[8rem] z-[60] px-4 border border-slate-50 fixed py-6 w-[160px] shadow-md rounded-lg gap-10 flex flex-col select-none"
    >
      {sortingOptions.map((category, categoryIndex) => (
        <div 
          key={categoryIndex}  
          className="flex flex-col gap-1 text-slate-600 cursor-pointer"
        >
          <span 
            className={`text-[13px] font-bold ${category.category === "Date" ? "mt-3" : ""}`}  
          >
            {category.category}
          </span>
          <div className="flex flex-col gap-2 ml-2 mt-[2px]">
            {category.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <span className={`${option.selected ? "text-sky-500" : ""}`}>
                  {option.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  )
}
