"use client"

import { useUser } from '@clerk/nextjs'


const DashboardText = () => {

  const { user } = useUser();

  return (
    <div className='flex flex-col'>
      <span className='font-semibold'>Welcome Back, {user?.lastName}</span>
      <span className='text-slate-400 text-[12px] font-light'>
        We are happy to see you again
      </span>
    </div>
  )
}

export default DashboardText