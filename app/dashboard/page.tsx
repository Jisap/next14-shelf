import React from 'react'
import { UserButton } from '@clerk/nextjs'

const dashboard = () => {
  return (
    <div className='flex p-10'>
      <div className='flex flex-col gap-2'>
        <UserButton />
        <a href="/" className='text-sky-500 hover:underline'>Regresar</a>
      </div>
    </div>
  )
}

export default dashboard