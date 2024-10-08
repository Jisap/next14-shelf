import { SearchRounded } from "@mui/icons-material"


const SearchBarFilterDropDown = () => {
  return (
    <div className={`h-[38px] bg-slate-50 flex items-center text-[13px] rounded-md pl-2 gap-1 w-[100%]`}>
      <SearchRounded
        sx={{ fontSize: 17 }}
        className="text-slate-400"
      />
      <input
        placeholder="Search for a project"
        className="bg-transparent outline-none w-full font-light"
      />
    </div>
  )
}

export default SearchBarFilterDropDown