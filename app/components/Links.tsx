import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppContext } from '../ContextApi';

const Links = () => {

  const { menuItemsObject: { menuItems }} = useAppContext()

  return (
    <div className='mt-44 ml-3 flex flex-col gap-2 text-[15px]'>
      
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`${item.isSelected ? "bg-sky-500 text-white" : "text-slate-400 hover:text-sky-500"} p-[7px] select-none cursor-pointer rounded-lg flex items-center gap-2 w-[75%]`}
        >
          {item.icon}
          <span className='mt-0.5'>{item.name}</span>
        </div>
      ))}

    </div>
  )
}

export default Links