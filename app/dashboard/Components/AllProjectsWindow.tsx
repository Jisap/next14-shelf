import { useAppContext } from "@/app/ContextApi";
import HeaderProjectWindow from "./HeaderProjectsWindow";
import SortByComponent from "./SortByComponent";
import SearchBarProjectsWindow from "./SearchBarProjectsWindow";
import ProjectsList from "./ProjectsList";
import { useState } from "react";


// AllProjectsWindow -> SortByComponent abre -> SortingDropdown establece opciones de ordenamiento y sortedProjects -> ProjectsList

const AllProjectsWindow = () => {

  const {
    openAllProjectsWindowObject: { openAllProjectsWindow , setOpenAllProjectsWindow },
  } = useAppContext();


  return (
    <div
      style={{ display: openAllProjectsWindow ? "block" : "none" }}
      className="w-[70%] max-w-sm:w-[90%] p-9 border border-slate-50 h-[82%] bg-white rounded-xl shadow-md absolute left-1/2 lg:left-[58%] top-20 -translate-x-1/2 z-50"
    >
      <HeaderProjectWindow />
      <SearchBarProjectsWindow  />
      <SortByComponent /> 
      <ProjectsList/>
    </div>
  )
}

export default AllProjectsWindow