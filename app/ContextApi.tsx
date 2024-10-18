"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { allProjectsData, Component, Project } from "./allData";
import { SortingDropdown } from './dashboard/Components/SortingDropdown';
import { set } from "mongoose";
import { useUser } from "@clerk/nextjs";


export interface MenuItem {   //  Define la estructura de un elemento del menú. 
  id: string;
  name: string;
  icon: ReactNode;
  isSelected: boolean;
}

export interface DarkModeMenu {
  id: string;
  name: string;
  icon: ReactNode;
  isSelected: boolean;
}

export interface DropDownPosition { // Define la estructura del objeto dropDownPositions
  left: number;
  top: number;
}

interface SortingOptionItem {
  label: string;
  value: string;
  selected: boolean;
}

interface SortingOptionCategory {
  category: string;
  options: SortingOptionItem[];
}

interface AppContextType {    // Define la estructura del contexto que será compartido.
  menuItemsObject: {
    menuItems: MenuItem[];
    setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>
  }

  openSideBarObject:{
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>> // Define si se abrió o no la ventana de cambio del theme
  }

  darkModeMenuObject: {
    darkModeMenu: DarkModeMenu[];
    setDarkModeMenu: React.Dispatch<React.SetStateAction<DarkModeMenu[]>> // Define el tipo de theme seleccionado
  }

  openDarkModeMenuObject: {
    openDarkModeMenu: boolean;
    setOpenDarkModeMenu: React.Dispatch<React.SetStateAction<boolean>>
  }

  showSearchBarObject: {
    showSearchBar: boolean;
    setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>
  }

  isMobileViewObject: {
    isMobileView: boolean,
    setIsMobileView: React.Dispatch<React.SetStateAction<boolean>>
  }

  showSideBarObject: {
    showSideBar: boolean,
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>
  }

  allProjectsObject: {
    allProjects: Project[];
    setAllProjects: React.Dispatch<React.SetStateAction<Project[]>>
  }

  isLoadingObject: {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  }

  allFavoriteComponentsObject: {
    allFavoriteComponents: Component[],
    setAllFavoriteComponents: React.Dispatch<React.SetStateAction<Component[]>>
  }

  openProjectWindowObject: {
    openProjectWindow: boolean,
    setOpenProjectWindow: React.Dispatch<React.SetStateAction<boolean>>
  }

  openIconWindowObject: {
    openIconWindow: boolean,
    setOpenIconWindow: React.Dispatch<React.SetStateAction<boolean>>
  }

  showComponentPageObject: {
    showComponentPage: boolean,
    setShowComponentPage: React.Dispatch<React.SetStateAction<boolean>>
  }

  selectedProjectObject: {
    selectedProject: Project | null,
    setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>
  }

  dropDownPositionsObject:{
    dropDownPositions: DropDownPosition,
    setDropDownPositions: React.Dispatch<React.SetStateAction<DropDownPosition>>
  }

  openDropDownObject: {
    openDropDown: boolean,
    setOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>
  }

  openDeleteWindowObject: {
    openDeleteWindow: boolean,
    setOpenDeleteWindow: React.Dispatch<React.SetStateAction<boolean>>
  }

  selectedComponentObject: {
    selectedComponent: Component | null,
    setSelectedComponent: React.Dispatch<React.SetStateAction<Component | null>>
  }

  openComponentEditorObject:{
    openComponentEditor: boolean,
    setOpenComponentEditor: React.Dispatch<React.SetStateAction<boolean>>
  }

  openAllProjectsWindowObject:{
    openAllProjectsWindow: boolean,
    setOpenAllProjectsWindow: React.Dispatch<React.SetStateAction<boolean>>
  }

  openSortingDropdownObject: {
    openSortingDropdown: boolean,
    setOpenSortingDropdown: React.Dispatch<React.SetStateAction<boolean>>
  }

  sortingDropDownPositionsObject:{
    sortingDropDownPositions: DropDownPosition,
    setSortingDropDownPositions: React.Dispatch<React.SetStateAction<DropDownPosition>>
  }

  sortedProjectsObject: {
    sortedProjects: Project[],
    setSortedProjects: React.Dispatch<React.SetStateAction<Project[]>>
  }

  sortingOptionsObject: {
    sortingOptions: SortingOptionCategory[],
    setSortingOptions: React.Dispatch<React.SetStateAction<SortingOptionCategory[]>>
  }

  openAllFavoriteWindowObject: {
    openAllFavoriteWindow: boolean,
    setOpenAllFavoriteWindow: React.Dispatch<React.SetStateAction<boolean>>
  }

  openFilterDropDownObject: {
    openFilterDropDown: boolean,
    setOpenFilterDropDown: React.Dispatch<React.SetStateAction<boolean>>
  }

  filterDropDownPositionsObject: {
    filterDropDownPositions: {
      left: number,
      top: number
    },
    setFilterDropDownPositions: React.Dispatch<React.SetStateAction<{
      left: number,
      top: number
    }>>,

  }
    
  selectedProjectToFilterObject: {
    selectedProjectToFilter: string | null,
    setSelectedProjectToFilter: React.Dispatch<React.SetStateAction<string | null>>
  }

  openLiveSearchBarObject: {
    openLiveSearchBar: boolean,
    setOpenLiveSearchBar: React.Dispatch<React.SetStateAction<boolean>>
  }

  mainSearchQueryObject: {
    mainSearchQuery: string,
    setMainSearchQuery: React.Dispatch<React.SetStateAction<string>>
  }

  liveSearchPositionsObject:{
    liveSearchPositions: DropDownPosition,
    setLiveSearchPositions: React.Dispatch<React.SetStateAction<DropDownPosition>>
  }
}

const defaultState: AppContextType = {
  menuItemsObject: {
    menuItems: [],            // array de objetos MenuItem
    setMenuItems: () => {},   // función para actualizar el estado de menuItems.
  },
  openSideBarObject: {
    openSideBar: true,
    setOpenSideBar: () => {},
  },
  openDarkModeMenuObject: {
    openDarkModeMenu: false,
    setOpenDarkModeMenu: () => {}
  },
  darkModeMenuObject: {
    darkModeMenu: [],
    setDarkModeMenu: () => {}
  },
  showSearchBarObject: {
    showSearchBar: false,
    setShowSearchBar: () => {}
  },

  isMobileViewObject: {
    isMobileView: false,
    setIsMobileView: () => {}
  },

  showSideBarObject: {
    showSideBar: true,
    setShowSideBar: () => {}
  },
  allProjectsObject: {
    allProjects: [],
    setAllProjects: () => {}
  },

  isLoadingObject: {
    isLoading: true,
    setIsLoading: () => {}
  },

  allFavoriteComponentsObject: {
    allFavoriteComponents: [],
    setAllFavoriteComponents: () => {}
  },

  openProjectWindowObject: {
    openProjectWindow: false,
    setOpenProjectWindow: () => {}
  },

  openIconWindowObject: {
    openIconWindow: false,
    setOpenIconWindow: () => {}
  },

  showComponentPageObject: {
    showComponentPage: false,
    setShowComponentPage: () => {}
  },

  selectedProjectObject: {
    selectedProject: null,
    setSelectedProject: () => {}
  },

  dropDownPositionsObject: {
    dropDownPositions: { left: 0, top: 0 },
    setDropDownPositions: () => {}
  },

  openDropDownObject: {
    openDropDown: false,
    setOpenDropDown: () => {}
  },

  openDeleteWindowObject: {
    openDeleteWindow: false,
    setOpenDeleteWindow: () => {}
  },

  selectedComponentObject: {
    selectedComponent: null,
    setSelectedComponent: () => {}
  },

  openComponentEditorObject: {
    openComponentEditor: false,
    setOpenComponentEditor: () => {}
  },

  openAllProjectsWindowObject: {
    openAllProjectsWindow: false,
    setOpenAllProjectsWindow: () => {}    
  },

  openSortingDropdownObject:{
    openSortingDropdown: false,
    setOpenSortingDropdown: () => {}
  },

  sortingDropDownPositionsObject: {
    sortingDropDownPositions: { left: 0, top: 0},
    setSortingDropDownPositions: () => {}
  },

  sortedProjectsObject: {
    sortedProjects: [],
    setSortedProjects: () => {}
  },

  sortingOptionsObject: {
    sortingOptions: [],
    setSortingOptions: () => {}
  },

  openAllFavoriteWindowObject: {
    openAllFavoriteWindow: false,
    setOpenAllFavoriteWindow: () => {}
  },

  openFilterDropDownObject: {
    openFilterDropDown: false,
    setOpenFilterDropDown: () => {}
  },

  filterDropDownPositionsObject: {
    filterDropDownPositions: {
      left: 0,
      top: 0
    },
    setFilterDropDownPositions: () => {}
  },

  selectedProjectToFilterObject: {
    selectedProjectToFilter: null,
    setSelectedProjectToFilter: () => {}
  },

  openLiveSearchBarObject: {
    openLiveSearchBar: false,
    setOpenLiveSearchBar: () => {}
  },

  mainSearchQueryObject: {
    mainSearchQuery: "",
    setMainSearchQuery: () => {}
  },

  liveSearchPositionsObject: {
    liveSearchPositions: { left: 0, top: 0 },
    setLiveSearchPositions: () => {}
  }
}

export const AppContext = createContext<AppContextType>(defaultState);              // Creación del contexto

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {   // AppProvider: Es un componente que sirve como proveedor del contexto AppContext.
  
  const [menuItems, setMenuItems] = useState<MenuItem[]>([                          // Estado para menuItems -> menuItems[]  

    {id:"1", name: "Home", icon: <HomeIcon />, isSelected: true},                   // 3 menuItems "Home", "Projects" y "favorites"
    {id:"2", name: "Projects", icon: <CategoryIcon />, isSelected: false},
    {id:"3", name: "Favorites", icon: <FavoriteIcon />, isSelected: false},

  ]);

  const [openSideBar, setOpenSideBar] = useState(() => {                            // El valor por defecto del openSideBar será
    const storedValue = localStorage.getItem("openedSideBar");                              
    return storedValue !== null ? JSON.parse(storedValue) : true;                   // El valor almacenado en localStorage, y si no hay será true
  });

  useEffect(() => {
    localStorage.setItem("openedSideBar", JSON.stringify(openSideBar))              // Cada vez que openSideBar cambie se cambiará también el localStorage  
  },[openSideBar])

 

  const [openDarkModeMenu, setOpenDarkModeMenu] = useState(false)                   // Estado del boolean
  const [darkModeMenu, setDarkModeMenu] = useState<DarkModeMenu[]>(() => {          // Estado del DarkModeMenu[]     
    const savedDarkMode = localStorage.getItem("isDarkMode");                       // 1º se intenta obtener de ls
    const isDarkMode = savedDarkMode ? JSON.parse(savedDarkMode) : false;           // si existe se aplica, sino = false
    
    return [
      {
        id: "1",
        name: "Light",
        icon: <LightModeIcon fontSize='small' />,
        isSelected: !isDarkMode,
      },
      {
        id: "2",
        name: "Dark",
        icon: <DarkModeIcon fontSize='small' />,
        isSelected: isDarkMode,
      },
    ]
  });

  const [openProjectWindow, setOpenProjectWindow] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [allFavoriteComponents, setAllFavoriteComponents] = useState<Component[]>([])
  const [openIconWindow, setOpenIconWindow] = useState(false);
  const [showComponentPage, setShowComponentPage] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null) 
  const [dropDownPositions, setDropDownPositions] = useState({
    left: 0,
    top: 0,
  });
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openDeleteWindow, setOpenDeleteWindow] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [openComponentEditor, setOpenComponentEditor] = useState(false);
  const [openAllProjectsWindow, setOpenAllProjectsWindow] = useState(false);
  const [openSortingDropdown, setOpenSortingDropdown] = useState(false);
  const [sortingDropDownPositions, setSortingDropDownPositions] = useState({
    left: 0,
    top: 0,
  });
  const {user, isLoaded, isSignedIn} = useUser();

  const [sortedProjects, setSortedProjects] = useState<Project[]>([]);  // Proyectos ordenados

  const [sortingOptions, setSortingOptions] = useState(() => {
    const savedState = localStorage.getItem("sortingOptions"); 
    return savedState
      ? JSON.parse(savedState)
      : [
          {
            category: "Order",
            options: [
              { label: "A-Z", value: "asc" , selected: true },
              { label: "Z-A", value: "desc", selected: false },
            ],
          },
          {
            category: "Date",
            options: [
              { label: "Newest", value: "newest", selected: true },
              { label: "Oldest", value: "oldest", selected: false },
            ],
          },
        ]
  });
  
  const [openAllFavoriteWindow, setOpenAllFavoriteWindow] = useState(false);
  const [openFilterDropDown, setOpenFilterDropDown] = useState(false);
  const [filterDropDownPositions, setFilterDropDownPositions] = useState({
    left: 0,
    top: 0,
  })

  const [selectedProjectToFilter, setSelectedProjectToFilter] = useState<string | null>(null)

  const [openLiveSearchBar, setOpenLiveSearchBar] = useState(false);
  const [mainSearchQuery, setMainSearchQuery] = useState("");
  const [liveSearchPositions, setLiveSearchPositions] = useState({
    left: 0,
    top: 0,
  })

  // Darkmode
  useEffect(() => {
    const isDarkMode = darkModeMenu[1].isSelected;
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode))  // Valor en ls cambia cuando se modifique darkModeMenu
  }, [darkModeMenu]);

  // Update the window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 640)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  });

  // Simulate the fetch using setTimeout
  // useEffect(() => {
  //   const fetchAllProjects = () => {
  //     setTimeout(() => {
  //       allProjectsData.forEach((project) => {  // Sort the components by createdAt
  //         project.components.sort((a, b) => {
  //           return (
  //             new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  //           )
  //         })
  //       })
  //       setAllProjects(allProjectsData);  // Update the state with the sorted data
  //       setSortedProjects(allProjectsData);
  //       setIsLoading(false);
  //     }, 3000);
  //   }
  //   fetchAllProjects();
  // },[]);

  useEffect(() => {
    async function fetchAllProjects() {
      try {
        const response = await fetch(`/api/projects?clerkUserId=${user?.id}`);
        if(!response.ok){
          throw new Error("Failed to fetch projects");
        }
        const data : {projects:Project[]} = await response.json();
        if(data.projects){
          data.projects.forEach((project) => {
            project.components.sort((a, b) => {
              return (
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
              );
            });
          });
          // update the all projects
          setAllProjects(data.projects);
          setSortedProjects(data.projects);
        }
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false);
      }
    }

    if(isLoaded && isSignedIn){
      fetchAllProjects()
    }
  },[user, isLoaded, isSignedIn])

  // Update favorite components when allProjects change
  useEffect(() => {
    if(allProjects.length > 0){
      const favoriteComponents = allProjects.flatMap((project) =>       // map con condición
        project.components.filter((component) => component.isFavorite)  // Se crea un array según condición: component tenga isFavorite = true
      );
      setAllFavoriteComponents(favoriteComponents)
    }
    setSortedProjects(allProjects); // Update sortedProjects when allProjects change
  },[allProjects]);

  useEffect(() => {
    if(menuItems[0].isSelected){                                        // Si el item[0] (Home) es seleccionado 
      setSelectedProject(null)                                          // se establece selectedProject a null
      setShowComponentPage(false)                                       // y se cierra la ventana de ComponentPage
      setOpenAllProjectsWindow(false)                                   // y se cierra el modal de añadir proyecto
      setOpenAllFavoriteWindow(false)                                   // y se cierra el modal de añadir favorito
    }

    if(menuItems[1].isSelected){                                        //Si el item[1] (projects) es seleccionado se abre el allProjectsWindow
      setOpenAllProjectsWindow(true)
      setOpenAllFavoriteWindow(false)                                   // y se cierra el modal de añadir favorito
    }

    if(menuItems[2].isSelected){                                        //Si el item[2] (favorites) es seleccionado se abre el allFavoriteWindow
      setOpenAllFavoriteWindow(true)
      setOpenAllProjectsWindow(false)                                   // y se cierra el modal de añadir proyecto
    }
  },[menuItems])

  return (
    <AppContext.Provider 
      value={{
        menuItemsObject: { menuItems, setMenuItems },
        openSideBarObject: { openSideBar, setOpenSideBar }, 
        openDarkModeMenuObject: { openDarkModeMenu, setOpenDarkModeMenu },
        darkModeMenuObject: { darkModeMenu, setDarkModeMenu },
        showSearchBarObject: { showSearchBar, setShowSearchBar }, 
        isMobileViewObject: { isMobileView, setIsMobileView },
        showSideBarObject: { showSideBar, setShowSideBar },
        allProjectsObject: { allProjects, setAllProjects },
        isLoadingObject: { isLoading, setIsLoading },
        allFavoriteComponentsObject: {allFavoriteComponents, setAllFavoriteComponents},
        openProjectWindowObject: { openProjectWindow, setOpenProjectWindow },
        openIconWindowObject: { openIconWindow, setOpenIconWindow },
        showComponentPageObject: { showComponentPage, setShowComponentPage },
        selectedProjectObject: { selectedProject, setSelectedProject },
        dropDownPositionsObject: { dropDownPositions, setDropDownPositions },
        openDropDownObject: { openDropDown, setOpenDropDown },
        openDeleteWindowObject: { openDeleteWindow, setOpenDeleteWindow },
        selectedComponentObject: { selectedComponent, setSelectedComponent },
        openComponentEditorObject: { openComponentEditor, setOpenComponentEditor },
        openAllProjectsWindowObject: { openAllProjectsWindow, setOpenAllProjectsWindow },
        openSortingDropdownObject: { openSortingDropdown, setOpenSortingDropdown },
        sortingDropDownPositionsObject: { sortingDropDownPositions, setSortingDropDownPositions },
        sortedProjectsObject: { sortedProjects, setSortedProjects },
        sortingOptionsObject: { sortingOptions, setSortingOptions },
        openAllFavoriteWindowObject: { openAllFavoriteWindow, setOpenAllFavoriteWindow },
        openFilterDropDownObject: { openFilterDropDown, setOpenFilterDropDown },
        filterDropDownPositionsObject: { filterDropDownPositions, setFilterDropDownPositions },
        selectedProjectToFilterObject: { selectedProjectToFilter, setSelectedProjectToFilter },
        openLiveSearchBarObject: { openLiveSearchBar, setOpenLiveSearchBar },
        mainSearchQueryObject: { mainSearchQuery, setMainSearchQuery },
        liveSearchPositionsObject: { liveSearchPositions, setLiveSearchPositions }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)