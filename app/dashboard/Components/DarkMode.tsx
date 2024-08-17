"use client"

import { useAppContext } from '@/app/ContextApi';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeMenu from './DarkModeMenu';

const DarkMode = () => {

  const {
    openDarkModeMenuObject: { openDarkModeMenu, setOpenDarkModeMenu },
    darkModeMenuObject: { darkModeMenu, setDarkModeMenu },
  } = useAppContext();

  const handleClicked = () => {
    setOpenDarkModeMenu(!openDarkModeMenu)
  }

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