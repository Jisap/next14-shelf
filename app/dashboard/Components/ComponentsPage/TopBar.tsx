import { useAppContext } from "@/app/ContextApi"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MenuIcon from '@mui/icons-material/Menu';


const TopBar = () => {

  const {
    showComponentPageObject : { setShowComponentPage },
    showSideBarObject: { setShowSideBar, showSideBar },
    selectedProjectObject: { selectedProject, setSelectedProject },
    openComponentEditorObject: { setOpenComponentEditor },
  } = useAppContext();

  return (
    <div className="flex justify-between items-center gap-4 bg-white p-3 px-4 rounded-lg">
      <div className="flex gap-5 items-center w">
        
        {/* Back Button */}
        <div 
          onClick={() => {
            setShowComponentPage(false);
            setSelectedProject(null);
          }}
          className="border mt-[2px] p-[2px] text-slate-400 flex h-7 gap-1 px-2 items-center justify-center rounded-md"
        >
          <ArrowBackIcon sx={{ fontsize: 11}} className="text-[11px]"/>
          <span className="max-sm:hidden">Back</span>
        </div>

        {/* Category title and icon */}
        <div className="flex gap-2 items-center">
          <div className="flex flex-col">
            <span className="font-bold text-xl">{selectedProject?.name}</span>
            <span className="text-slate-400 text-[11px]">{selectedProject?.components.length} Components</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative p-[8px] text-[13px] w-[34%] flex px-[15px] h-13 rounded-3xl bg-slate-100 items-center gap-4">
        <SearchIcon className="text-slate-400 text-[19px]" />
        <input 
          placeholder="search a component"
          className="bg-slate-100 outline-none font-light text-[12px] w-full"
        />
        {/* close icon */}
        <div className="absolute rounded-full right-2 top-[10px] cursor-pointer w-5 h-5 flex justify-center items-center bg-slate-300">
          <CloseIcon 
            sx={{ fonstSize: 14}}
            className="text-slate-400 text-[14px] p-1"
          />
        </div>
      </div>

      {/* Add Component Button */}
      <div className="flex gap-2 items-center">
        {selectedProject !== undefined && selectedProject !== null && selectedProject.components?.length > 0 && (
          <button 
            onClick={() => setOpenComponentEditor(true)}
            className="bg-sky-500 text-[12px] h-[33px] text-white px-3 rounded-md"
          >
            <AddOutlinedIcon 
              sx={{ fontSize: 16 }}
              className=""
            />
            <span className="max-sm:hidden">Component</span>
          </button>
        )}
        
        <div className="hidden max-sm:block">
          <MenuIcon 
            onClick={() => setShowSideBar(true)}
            className="text-slate-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default TopBar