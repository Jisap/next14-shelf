"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

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
  })

  useEffect(() => {
    const isDarkMode = darkModeMenu[1].isSelected;
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode))  // Valor en ls cambia cuando se modifique darkModeMenu
  }, [darkModeMenu])

  return (
    <AppContext.Provider 
      value={{
        menuItemsObject: { menuItems, setMenuItems },
        openSideBarObject: { openSideBar, setOpenSideBar }, 
        openDarkModeMenuObject: { openDarkModeMenu, setOpenDarkModeMenu },
        darkModeMenuObject: { darkModeMenu, setDarkModeMenu} 
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)