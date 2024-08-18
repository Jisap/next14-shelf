import { UserButton } from '@clerk/nextjs'
import React from 'react'

const ProfileAccount = () => {
  return (
    <div className='flex gap-3 items-center'>
      <div className='w-[36px] h-[37px] bg-slate-100 rounded-full flex items-center justify-center'>
        <UserButton />
      </div>
    </div>
  )
}

export default ProfileAccount