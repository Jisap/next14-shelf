import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className='bg-slate-100 w-1/3 cursor-pointer hover:bg-slate-200 transition-all p-[8px] flex gap-1 justify-center items-center rounded-md'>
      <SearchIcon fontSize="small" className='text-slate-500' />
      <span className='text-slate-500 text-sm'>Search</span>
    </div>
  )
}

export default SearchBar