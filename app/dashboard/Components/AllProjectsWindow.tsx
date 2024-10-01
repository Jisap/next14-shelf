import { useAppContext } from "@/app/ContextApi";
import HeaderProjectWindow from "./HeaderProjectsWindow";
import SortByComponent from "./SortByComponent";
import SearchBarProjectsWindow from "./SearchBarProjectsWindow";
import ProjectsList from "./ProjectsList";
import { useState } from "react";




const AllProjectsWindow = () => {

  const {
    openAllProjectsWindowObject: { openAllProjectsWindow , setOpenAllProjectsWindow },
  } = useAppContext();

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      style={{ display: openAllProjectsWindow ? "block" : "none" }}
      className="w-[70%] max-w-sm:w-[90%] p-9 border border-slate-50 h-[82%] bg-white rouded-xl shadow-md absolute left-1/2 lg:left-[58%] top-20 -translate-x-1/2 z-50"
    >
      <HeaderProjectWindow />
      <SearchBarProjectsWindow searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SortByComponent />
      <ProjectsList searchQuery={searchQuery}/>
    </div>
  )
}

export default AllProjectsWindow