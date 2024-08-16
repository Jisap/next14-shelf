"use client"

import React from 'react'
import { MenuItem, useAppContext } from '../ContextApi'


const Links = () => {

  const { 
    menuItemsObject: { menuItems, setMenuItems },
    openSideBarObject: { openSideBar },
  } = useAppContext();

  const handleLinkClick = (clickedItem: MenuItem) => {  // Recibe el item clickado
    setMenuItems(prevMenuItems =>                       // Se recibe el estado anterior de MenuItems[]
      prevMenuItems.map(item =>                         // Se mapea
        item.id === clickedItem.id                      // Si el item iterado === al clickeado
          ? { ...item, isSelected: true }               // se establece como isSelected=true
          : { ...item, isSelected: false }              // sino como false
      )
    );
  };

  return (
    <div className={`mt-44 ${openSideBar ? "ml-3" : "ml-0"} flex flex-col gap-2 text-[15px]`}>

      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleLinkClick(item)}
          className={`${item.isSelected ? "bg-sky-500 text-white" : "text-slate-400 hover:text-sky-500"} p-[7px] select-none cursor-pointer rounded-lg flex items-center gap-2 w-[65%]`}
        >
          {item.icon}
          {openSideBar && <span className='mt-0.5'>{item.name}</span>}
        </div>
      ))} 

    </div>
  )
}

export default Links