import { Project } from "@/app/allData";
import { useAppContext } from "@/app/ContextApi"
import { useEffect, useRef, useState } from "react";


export const SortingDropdown = () => { // Componente que muestra el dropdown de ordenamiento

  const { 
    openSortingDropdownObject: { openSortingDropdown, setOpenSortingDropdown },
    sortingDropDownPositionsObject: { sortingDropDownPositions: { top, left} }, 
    allProjectsObject: { allProjects },
    sortedProjectsObject: { sortedProjects, setSortedProjects },
    sortingOptionsObject: { sortingOptions, setSortingOptions },
  } = useAppContext();

  const DropDownRef = useRef<HTMLDivElement>(null);
                          // categoría seleccionada // option seleccionada
  const handleOptionClick = (categoryIndex: number, optionIndex: number) => { // Función que se ejecuta cuando se hace clic en una opción del dropdown
    
    setSortingOptions((prevOptions) => {                                      // Actualizador de estado                                     
      const newOptions = prevOptions.map((category, cIndex) => ({             // Mapeo de las categorias 
        ...category,                                                          
        options: category.options.map((option, oIndex) => ({                  // Mapeo de las opciones
          ...option,
          selected: cIndex === categoryIndex && oIndex === optionIndex        // Si categoryIndex y optionIndex son iguales a la categoría y opción seleccionadas, se establece selected a true. Esto actualiza el estado de selección
        }))
      }))

      const selectedOption = newOptions                                       // Se aplana la lista de opciones y se busca aquella que está seleccionada  
        .flatMap((c) => c.options)
        .find((o) => o.selected)

      console.log(selectedOption);

      if(selectedOption){
        const sorted = sortProjects(allProjects, selectedOption.value)        // Se ordena los proyectos según el tipo de ordenamiento seleccionado
        setSortedProjects(sorted)
      }

      return newOptions;
    })

    setOpenSortingDropdown(false)
  }

  const sortProjects = (projects:Project[], sortOption: string): Project[] => {
    const sortedProjects = [...projects]
    switch(sortOption){
      case "asc":
        sortedProjects.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "desc":
        sortedProjects.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "newest":
        sortedProjects.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());;
        break;
      case "oldest":
        sortedProjects.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      default:
        sortedProjects.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }  
    
    return sortedProjects
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (DropDownRef.current && 
        !DropDownRef.current.contains(event.target as Node)
      ) {
        setOpenSortingDropdown(false);
      }
    }

    const handleScroll = () => {
      setOpenSortingDropdown(false)
    }

    const handleWheel = (event: WheelEvent) => {
      if(event.deltaY !== 0){
        setOpenSortingDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    }

  },[openSortingDropdown])

  // Update sortedProjects when sortingOptions change
  useEffect(() => {
    const selectedOption = sortingOptions                             // Se obtienen las opciones seleccionadas que definen el tipo de ordenamiento
      .flatMap((c) => c.options)        
      .find((o) => o.selected);          

    if (selectedOption) {                                             // Si se ha seleccionado un tipo de ordenamiento
      const sorted = sortProjects(allProjects, selectedOption.value); // Se ordena los proyectos según el tipo de ordenamiento seleccionado
      setSortedProjects(sorted);                                      // Se actualiza el estado de sortedProjects con los proyectos ordenados -> ProjectList
    }
  }, [allProjects, sortingOptions, setSortedProjects]);               // Se actualiza el estado de sortedProjects cuando cambien las opciones de ordenamiento

  return (
    <div
      ref={DropDownRef}
      style={{
        display: openSortingDropdown ? 'block' : 'none',
        top: top + 35,
        left: left - 100
      }}
      className="bg-white text-sm top-[310px] right-[8rem] z-[60] px-4 border border-slate-50 fixed py-6 w-[160px] shadow-md rounded-lg gap-10 flex flex-col select-none"
    >
      {sortingOptions.map((category, categoryIndex) => (
        <div 
          key={categoryIndex}  
          className="flex flex-col gap-1 text-slate-600 cursor-pointer"
        >
          <span 
            className={`text-[13px] font-bold ${category.category === "Date" ? "mt-3" : ""}`}  
          >
            {category.category}
          </span>
          <div className="flex flex-col gap-2 ml-2 mt-[2px]">
            {category.options.map((option, optionIndex) => (
              <div 
                key={optionIndex}
                onClick={() => handleOptionClick(categoryIndex, optionIndex)} // Estas son las categorias y opciones seleccionadas 
              >
                <span className={`${option.selected ? "text-sky-500" : ""}`}>
                  {option.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  )
}
