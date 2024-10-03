import HeaderFavoriteWindow from "./HeaderFavoriteWindow"
import SearchBar from "./SearchBar"
import SearchBarFavoriteWindow from "./SearchBarFavoriteWindow"




function AllFavoritewindow() {
  return (
    <div className="w-[77%] max-sm:w-[90%] p-9 border border-slate-50 h-[700px] bg-white rounded-xl shadow-md absolute left-1/2 lg:left-[58%] top-20 -translate-x-1/2 z-50">
      <HeaderFavoriteWindow />
      <SearchBarFavoriteWindow />
      {/* 
      <ComponentsNumber />
      <ComponentsList /> */}
    </div>
  )
}

export default AllFavoritewindow