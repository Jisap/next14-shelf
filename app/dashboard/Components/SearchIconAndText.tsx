import SearchIcon from '@mui/icons-material/Search';

const SearchIconAndText = () => {
  return (
    <div className='flex gap-1 items-center'>
      <SearchIcon fontSize="small" className="text-slate-500" />
      <span className='text-slate-500 text-sm'>Search</span>
    </div>
  )
}

export default SearchIconAndText