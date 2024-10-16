import { useAppContext } from "@/app/ContextApi";
import { AddOutlined, SearchRounded } from "@mui/icons-material"
import { useEffect, useRef } from "react";
import CloseIcon from '@mui/icons-material/Close';

// {
//   searchQuery,
//     setSearchQuery
// }: {
//   searchQuery: string,
//     setSearchQuery: React.Dispatch<React.SetStateAction<string>>
// }


const SearchBarProjectsWindow = () => {

  const { 
    openAllProjectsWindowObject: { openAllProjectsWindow, setOpenAllProjectsWindow },
    openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
    mainSearchQueryObject: { mainSearchQuery, setMainSearchQuery }
  } = useAppContext();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input only when openAllProjectsWindow is open ( true )
    if (openAllProjectsWindow) {
      const focusInput = () => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      };

      if (!openAllProjectsWindow) {
        //Schedule focus setting for the next render
        setTimeout(focusInput, 0)
      }

      if(mainSearchQuery.trim().length > 0){
        setMainSearchQuery(mainSearchQuery)
      }
    }
  }, [openAllProjectsWindow, mainSearchQuery , openProjectWindow])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMainSearchQuery(event.target.value)
  }

  return (
    <div className="flex gap-5 items-center  mt-12 relative">
      <div className="flex w-full items-center">
        <div className={`h-[42px] bg-slate-50 flex justify-between w-full items-center text-sm rounded-md pl-3 gap-1  relative`}>
          <SearchRounded className="text-slate-400" />

          <input
            ref={inputRef}
            value={mainSearchQuery}
            onChange={handleChange}
            placeholder="Search a Project..."
            className="bg-transparent outline-none w-full font-light"
          />

          {/* Close Icon */}
          {mainSearchQuery.length > 0 && (
            <div
              onClick={() => setMainSearchQuery("")}
              className="text-slate-400 cursor-pointer absolute right-2 top-3"
            >
              <CloseIcon
                sx={{ fontSize: 17 }}
              />
            </div>
          )}
        </div>
        
        <button
          onClick={() => setOpenProjectWindow(true)}
          className="bg-sky-500 ml-2 p-[10px] flex w-[15%] text-sm rounded-md text-white items-center gap-2 justify-center"
        >
          <AddOutlined sx={{ fontSize: 17 }} />
          <span className="max-md:hidden">Create New</span>
        </button>
      </div>
    </div>
  )
}

export default SearchBarProjectsWindow