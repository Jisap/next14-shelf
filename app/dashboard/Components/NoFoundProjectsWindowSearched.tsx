import SearchIcon from '@mui/icons-material/Search';



const NoFoundProjectsWindowSearched = () => {
  return (
    <div className="p-1 gap-5 flex flex-col justify-center pt-[90px] items-center">
      <SearchIcon 
        sx={{ fontSize: 80 }}
        className="text-[70px] text-slate-200"
      />
      <div>
        <p className="text-gray-400 w-72 text-center text-[13px]">
          {`Ooops! That project seems to be missing. Try searching for a different keyword.`}
        </p>
      </div>
    </div>
  )
}

export default NoFoundProjectsWindowSearched