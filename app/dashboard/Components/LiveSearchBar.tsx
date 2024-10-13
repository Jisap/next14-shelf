import { CodeRounded } from "@mui/icons-material"


const LiveSearchBar = () => {
  return (
    <div className="fixed p-5 w-[25%] flex flex-col gap-3 shadow-md border border-slate-50 bg-white rounded-lg top-14 left-96 z-50">
      {/* Project Results */}
      <div>
        <span className="font-bold text-[14px] text-slate-800">
          Projects
        </span>

        <div className="flex gap-1 mt-3 flex-col ml-1">
          {/* Single Project */}
          <div className="flex items-center gap-1 p-2 rounded-md hover:bg-slate-100 select-none cursor-pointer">
            <div className="w-[21px] h-[21px] bg-sky-200 rounded-full flex items-center justify-center">
              <CodeRounded 
                sx={{ fontSize: "15px"}}
                className="text-sky-500 text-[18px]"
              />
            </div>
            <span className="text-[12px] text-slate-700">
              Project Name
            </span>
          </div>
          
        </div>
      </div>

      {/* Component Results */}
      <div>
        <span className="font-bold text-[14px] mt-3 text-slate-800">
          Components
        </span>
        
        <div className="flex mt-3 flex-col ml-1">
          {/* Single Component */}
          <div className="flex items-center gap-1 p-2 rounded-md hover:bg-slate-100 select-none cursor-pointer">
            <CodeRounded 
              sx={{ fontSize: "15px"}}
              className="text-slate-500 text-[18px]"
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <span className="text-[12px]">Component Name</span>
            <span className="text-[10px] text-slate-400 italic">
              Project Name
            </span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default LiveSearchBar