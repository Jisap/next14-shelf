import { useAppContext } from "@/app/ContextApi"
import ComponentsList from "./ComponentsList"
import ComponentsNumber from "./ComponentsNumber"
import HeaderFavoriteWindow from "./HeaderFavoriteWindow"
import SearchBarFavoriteWindow from "./SearchBarFavoriteWindow"



const AllFavoritewindow = () =>{

  const {
    openAllFavoriteWindowObject: { openAllFavoriteWindow, setOpenAllFavoriteWindow },
  } = useAppContext();


  return (
    <div 
      style={{ display: openAllFavoriteWindow ? "block" : "none" }}
      className="w-[70%] max-sm:w-[90%] p-9 border border-slate-50 h-[82%] bg-white rounded-xl shadow-md absolute left-1/2 lg:left-[58%] top-20 -translate-x-1/2 z-50"
    >
      <HeaderFavoriteWindow />
      <SearchBarFavoriteWindow />
      <ComponentsNumber />
      <ComponentsList />
    </div>
  )
}

export default AllFavoritewindow