import { AddOutlined, SearchRounded } from "@mui/icons-material"


const SearchBarProjectsWindow = () => {
  return (
    <div className="flex-gap-5 items-center justify-between mt-12 relative">
      <div className={`h-[42px] bg-slate-50 flex items-center text-sm rounded-md pl-3 gap-1 w-[85%]`}>
        <SearchRounded className="text-slate-400" />
        <input 
          placeholder="Search a Project..."
          className="bg-transparent outline-none w-full font-light"
        />
        <button>
          <AddOutlined sx={{ fontSize: 17 }} />
          <span className="max-md:hidden">Create New</span>
        </button>
      </div>
    </div>
  )
}

export default SearchBarProjectsWindow