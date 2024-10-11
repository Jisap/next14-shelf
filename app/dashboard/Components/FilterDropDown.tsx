//import { CheckBox } from "@mui/icons-material";

import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';
import SearchBarFilterDropDown from "./SearchBarFilterDropDown";
import { useAppContext } from "@/app/ContextApi";
import { useEffect, useRef, useState } from "react";

const FilterDropDown = () => {

  const {
    openFilterDropDownObject: { openFilterDropDown, setOpenFilterDropDown},
    filterDropDownPositionsObject: { filterDropDownPositions },
    isMobileViewObject: { isMobileView },
    allProjectsObject: { allProjects },
    selectedProjectToFilterObject:{
      selectedProjectToFilter,
      setSelectedProjectToFilter
    }
  } = useAppContext();

  const[searchInput, setSearchInput] = useState("")

  const filterDropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(
        filterDropDownRef.current &&
        !filterDropDownRef.current.contains(event.target as Node)
      ){
        setOpenFilterDropDown(false)
      }
    }

    const handleScroll = () => {
      setOpenFilterDropDown(false)
    }

    const handleWheel = (event: WheelEvent) => {
      if(event.deltaY !== 0){
        setOpenFilterDropDown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: true })
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll); 
      window.removeEventListener("wheel", handleWheel);
    }
  }, [setOpenFilterDropDown]);

  //const [selectedProjectTofilter, setSelectedProjectToFilter] = useState<string | null>(null);

  const projectWithFavoriteInfo = allProjects.map(( project ) => {
    const favoriteComponents = project.components.filter(           // Se obtienen los componentes que son favoritos
      (component) => component.isFavorite
    );
    const favoriteCount = favoriteComponents.length;                // Se obtiene el numero de favoritos

    return {                                                        // Se devuelve para cada proyecto el numero de components favoritos que tiene
      ...project,
      favoriteCount
    }
  })
    .filter((project) => project.favoriteCount > 0)                 // Se filtran los proyectos que tienen componentes favoritos

  const handleProjectSelect = (projectName: string) => {            // Establece el select del projecto si no estaba seleccionado previamente y viceversa
    setSelectedProjectToFilter((prevSelected) => 
      prevSelected === projectName ? null : projectName   
    )
    setOpenFilterDropDown(false)
  };

  const handleClearSelection = () => {
    setSelectedProjectToFilter(null)
  };

  const filteredProjects = projectWithFavoriteInfo.filter((project) => { // Filtra de los proyectos marcados como favoritos con los que coincidan con la busqueda
    return project.name.toLowerCase().includes(searchInput.toLowerCase())
  });


  return (
    <div 
      ref={filterDropDownRef}
      style={{
        display: openFilterDropDown ? "flex" : "none",
        top: filterDropDownPositions.top + 54, 
        left: isMobileView
          ? filterDropDownPositions.left - 230 
          : filterDropDownPositions.left - 98  

      }}
      className="bg-white p-3 z-[60] border-slate-50 fixed py-4 w-[310px] select-none shadow-md rounded-lg flex-col gap-5"
    >
      <SearchBarFilterDropDown 
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      
      {/* Selected Project */}
      {selectedProjectToFilter && (
        <div className="flex gap-1 items-center">
          <span className="text-[12px] rounded-lg bg-sky-100 text-sky-500 p-[6px] px-2">
            {selectedProjectToFilter}
            <CloseIcon 
              onClick={handleClearSelection}
              sx={{ fontSize: 16 }}
              className="text-sky-500 pl-1 cursor-pointer"
            />
          </span>
        </div>
      )}

      {/* Divider line */}
      <hr className="border-t border-slate-200"/>

      {/* Unique Projects */}
      <div className="flex flex-col gap-2 overflow-auto h-60 p-2 rounded-md text-slate-600 cursor-pointer bg-slate-50">
        {/* Project1 */}

        {filteredProjects.length === 0 && (
          <div className='text-[13px] text-slate-400 p-3'>
            No projects found
          </div>
        )}


        {filteredProjects.map((project) => (
          <div 
            key={project._id}
            className="text-[13px] bg-white rounded-lg p-[9px] px-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-1">
              <Checkbox 
                checked={selectedProjectToFilter === project.name}
                onClick={() => handleProjectSelect(project.name)} // setSelectedProjectToFilter(project.name)
                size="small"
              />
              <span>{project.name}</span>
            </div>
            <span className="text-sky-400 p-1 px-2 rounded-full">{project.favoriteCount}</span>
          </div>
        ))}
        {/* Project 2 */}
        
      </div>
    </div>
  )
}

export default FilterDropDown