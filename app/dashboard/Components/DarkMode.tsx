"use client"

import { useAppContext } from '@/app/ContextApi';
import DarkModeMenu from './DarkModeMenu';

const DarkMode = () => {

  const {
    openDarkModeMenuObject: { openDarkModeMenu, setOpenDarkModeMenu },
    darkModeMenuObject: { darkModeMenu, setDarkModeMenu },
  } = useAppContext();

  const handleClicked = () => {
    setOpenDarkModeMenu(!openDarkModeMenu) // Se cambia al contrario el valor booleano de openDarkModeMenu
  }                                        // y se renderizarán los icons según esten seleccionados o no 

  return (
    <div onClick={handleClicked} className='relative'>
      <div className='text-sky-500'>
        { darkModeMenu[0].isSelected && darkModeMenu[0].icon }  
        { darkModeMenu[1].isSelected && darkModeMenu[1].icon }
      </div> 
      
      <DarkModeMenu />
    </div>
  )
}

export default DarkMode