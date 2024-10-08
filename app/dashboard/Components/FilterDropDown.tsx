import { CheckBox } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import SearchBarFilterDropDown from "./SearchBarFilterDropDown";

const FilterDropDown = () => {

  return (
    <div className="bg-white p-3 top-6 right-52 z-[60] border-slate-50 fixed py-4 w-[310px] select-none">
      <SearchBarFilterDropDown />
      
      {/* Selected Project */}
      <div className="flex gap-1 items-center">
        <span className="text-[12px] rounded-lg bg-sky-100 text-sky-500 p-[6px] px-2">
          Selected Project
          <CloseIcon 
            sx={{ fontSize: 16 }}
            className="text-sky-500 pl-1"
          />
        </span>
      </div>

      {/* Divider line */}
      <hr className="border-t border-slate-200"/>

      {/* Unique Projects */}
      <div className="flex flex-col gap-2 overflow-auto h-60 rounded-md text-slate-600 cursor-pointer bg-slate-500">
        {/* Project1 */}
        <div className="text-[13px] bg-white rounded-lg p-[9px] px-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <CheckBox 
              sx={{ fontSize:17}}
              className="text-sky-500"
            />
            <span className="text-sky-400 p-1 px-2 rounded-full">Project</span>
          </div>
          <span>3</span>
        </div>
      </div>
    </div>
  )
}

export default FilterDropDown