'use client'

import { useAppContext } from "@/app/ContextApi";
import { CodeRounded } from "@mui/icons-material"
import { useRef } from "react";
import { Project } from '../../allData';
import { openComponent } from "@/app/lib/openComponent";


const LiveSearchBar = () => {

  const {
    openLiveSearchBarObject: { openLiveSearchBar, setOpenLiveSearchBar },
    liveSearchPositionsObject: { liveSearchPositions, setLiveSearchPositions },
    isMobileViewObject: { isMobileView },
    mainSearchQueryObject: { mainSearchQuery },
    allProjectsObject: { allProjects },
    selectedProjectObject: { setSelectedProject },
    showComponentPageObject: { showComponentPage, setShowComponentPage },
    showSearchBarObject: { setShowSearchBar },
    mainSearchQueryObject: { setMainSearchQuery },
    openAllProjectsWindowObject: { setOpenAllProjectsWindow },
    selectedComponentObject: { setSelectedComponent },
    openComponentEditorObject: { setOpenComponentEditor },
    openAllFavoriteWindowObject: { setOpenAllFavoriteWindow },
  
  } = useAppContext();

 

  const liveSearchBarRef = useRef<HTMLDivElement>(null);

  //Filter projects and components bases on the search query
  const filteredProjects = allProjects.filter((project) =>
    project.name.toLowerCase().includes(mainSearchQuery.toLowerCase())
  )

  const filteredComponents = allProjects.flatMap((project) =>
    project.components).filter((component) =>
      component.name.toLowerCase().includes(mainSearchQuery.toLowerCase()
      )
    )

  const openTheProject = (project: Project) => {
    
    const findProject = allProjects.find((p) => p._id === project._id)
  
    if(findProject){
      setSelectedProject(findProject)
      setOpenAllProjectsWindow(true)
      setOpenLiveSearchBar(false)
      setShowSearchBar(false)
      //setMainSearchQuery("") // He cambiado esto para que la busqueda principal se haga también en la ventana de proyectos
    }
  }

  const showMoreProjectsFunction = () => {
    setShowSearchBar(false);
    setOpenAllProjectsWindow(true)
  }

  const showMoreFavoriteFunction = () => {
    setShowSearchBar(false);
    setOpenAllFavoriteWindow(true)
  }

  return (
    <div
      style={{
        top: liveSearchPositions.top + 50,
        left: liveSearchPositions.left,
      }}
      ref={liveSearchBarRef}
      className={`
        fixed p-5 
        ${isMobileView ? "w-[70%]" : "w-[26%]"} 
        w-[25%] flex flex-col gap-3 shadow-md border border-slate-50 bg-white rounded-lg top-14 left-96 z-50
      `}
    >
      {filteredComponents.length === 0 && filteredProjects.length === 0 && (
        <span className="text-slate-500 text-[12px]">
          No match results...
        </span>
      )}

      {/* Project Results */}
      {filteredProjects.length > 0 && (
        <div>
          <span className="font-bold text-[14px] text-slate-800">
            Projects
          </span>

          <div className="flex gap-1 mt-3 flex-col ml-1">
            {/* Single Project */}
            {filteredProjects.slice(0, 3).map((project) => (
              <div
                key={project._id}
                onClick={() => openTheProject(project)}
                className="flex items-center gap-1 p-2 rounded-md hover:bg-slate-100 select-none cursor-pointer"
              >
                <div className="w-[21px] h-[21px] bg-sky-200 rounded-full flex items-center justify-center">
                  <CodeRounded
                    sx={{ fontSize: "15px" }}
                    className="text-sky-500 text-[18px]"
                  />
                </div>
                <span className="text-[12px] text-slate-700">
                  {project.name}
                </span>
              </div>
            ))}
          </div>

          {/* More */}
          {filteredProjects.slice(3).length > 0 && (
            <div
              onClick={showMoreProjectsFunction} 
              className="w-full flex items-center justify-center mt-1"
            >
              <div 
                className="text-[12px] text-sky-500 hover:text-sky-700 cursor-pointer">
                {filteredProjects.length - 3} more Project
                {filteredProjects.length - 3 > 1 ? "s" : ""} available
              </div>
            </div>
          )}
        </div>
      )}

      {/* Component Results */}
      {filteredComponents.length > 0 && (
        <div>
          <span className="font-bold text-[14px] mt-3 text-slate-800">
            Components
          </span>

          <div className="flex mt-3 flex-col ml-1">
            {/* Single Components */}
            {filteredComponents.slice(0, 3).map((component) => (
              <div
                key={component._id}
                className="flex items-center gap-1 p-2 rounded-md hover:bg-slate-100 select-none cursor-pointer"
              >
                <CodeRounded
                  sx={{ fontSize: "15px" }}
                  className="text-slate-500 text-[18px]"
                />
                <div 
                  className="flex flex-col gap-[2px]"
                  onClick={() => openComponent({
                    component: component,
                    allProjects,
                    setSelectedComponent,
                    setSelectedProject,
                    setOpenComponentEditor,
                    setOpenAllFavoriteWindow
                  })}  
                >
                  <span className="text-[12px]">{component.name}</span>
                  <span className="text-[10px] text-slate-400 italic">
                    {component.projectName}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* More */}
          {filteredComponents.slice(3).length > 0 && (
            <div 
              onClick={showMoreFavoriteFunction}
              className="w-full flex items-center justify-center mt-1"
            >
              <div className="text-[12px] text-sky-500 hover:text-sky-700 cursor-pointer">
                {filteredComponents.length - 3} more Components
                {filteredComponents.length - 3 > 1 ? "s" : ""} available
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default LiveSearchBar