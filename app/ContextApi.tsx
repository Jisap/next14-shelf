"use client"

import { createContext, ReactNode, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface MenuItem {        //  Define la estructura de un elemento del menú. 
  id: number;
  name: string;
  icon: ReactNode;
  isSelected: boolean;
}

interface AppContextType {  // Define la estructura del contexto que será compartido.
  menuItemsObject: {
    menuItems: MenuItem[];
    setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>
  }
}

const defaultState: AppContextType = {
  menuItemsObject: {
    menuItems: [],            // array de objetos MenuItem
    setMenuItems: () => { },  // función para actualizar el estado de menuItems.
  },
};

const AppContext = createContext<AppContextType>(defaultState);                     // Creación del contexto

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {   // AppProvider: Es un componente que sirve como proveedor del contexto AppContext.
  
  const [menuItems, setMenuItems] = useState<MenuItem[]>([                          // Estado para menuItems -> menuItems[]  

    {id:1, name: "Home", icon: <HomeIcon />, isSelected: true},                     // 3 menuItems "Home", "Projects" y "favorites"
    {id:2, name: "Projects", icon: <CategoryIcon />, isSelected: false},
    {id:3, name: "Favorites", icon: <FavoriteIcon />, isSelected: false},

  ]);

  return (
    <AppContext.Provider value={{menuItemsObject: { menuItems, setMenuItems }}}>
      {children}
    </AppContext.Provider>
  )
}