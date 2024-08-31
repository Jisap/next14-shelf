"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { allProjectsData, Component, Project } from "./allData";
import FavoriteComponents from './dashboard/Components/FavoriteComponents';
import { IconData } from "@/AllIconsData";

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
  }
};

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
  useEffect(() => {
    const fetchAllProjects = () => {
      setTimeout(() => {
        setAllProjects(allProjectsData); 
        setIsLoading(false);
      }, 3000);
    }
    fetchAllProjects();
  },[]);

  // Update favorite components when allProjects change
  useEffect(() => {
    if(allProjects.length > 0){
      const favoriteComponents = allProjects.flatMap((project) =>       // map con condición
        project.components.filter((component) => component.isFavorite)  // Se crea un array según condición: component tenga isFavorite = true
      );
      setAllFavoriteComponents(favoriteComponents)
    }
  },[allProjects])

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
        openIconWindowObject: { openIconWindow, setOpenIconWindow }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)