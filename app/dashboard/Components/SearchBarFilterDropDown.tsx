import { useAppContext } from '@/app/ContextApi';
import { SearchRounded, Search, Close } from '@mui/icons-material';
import { useEffect, useRef } from 'react';

interface SearchBarFilterDropDownProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBarFilterDropDown = ({
  searchInput, 
  setSearchInput
}: SearchBarFilterDropDownProps) => {

  const { openFilterDropDownObject: openFilterDropDown } = useAppContext();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  }

  useEffect(() => {
    if(openFilterDropDown) {
      inputRef.current?.focus();
    }
  },[openFilterDropDown])

  return (
    <div className={`h-[38px] bg-slate-50 flex items-center text-[13px] rounded-md pl-2 gap-1 w-[100%]`}>
      <SearchRounded
        sx={{ fontSize: 17 }}
        className="text-slate-400"
      />
      <input
        ref={inputRef}
        value={searchInput}
        onChange={handleSearchInput}
        placeholder="Search for a project"
        className="bg-transparent outline-none w-full font-light"
      />
      {searchInput && (
        <Close 
          sx={{ fontSize: 17 }}
          onClick={() => setSearchInput("")}
          className='text-slate-400 cursor-pointer pr-2'
        />
      )}
    </div>
  )
}

export default SearchBarFilterDropDown