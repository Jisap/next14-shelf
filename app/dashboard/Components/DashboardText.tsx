"use client"

import { useAppContext } from '@/app/ContextApi';
import { useUser } from '@clerk/nextjs'
import MenuIcon from '@mui/icons-material/Menu';


const DashboardText = () => {

  const { user } = useUser();
  const { showSideBarObject: { setShowSideBar } }= useAppContext();
  
  //max-sm:hidden -> "se aplica en pantallas pequeñas o más pequeñas."
  return (
    <div className='flex flex-col'>
      <div
        onClick={() => setShowSideBar(true)}
        className='hidden max-sm:block'
      >
        <MenuIcon className='text-slate-500 cursor-pointer' />
      </div>
      <div className='flex flex-col max-sm:hidden'>
        <span className='font-semibold'>Welcome Back, {user?.lastName}</span>
        <span className='text-slate-400 text-[12px] font-light'>
          We are happy to see you again
        </span>
      </div>
    </div>
  )
}

export default DashboardText