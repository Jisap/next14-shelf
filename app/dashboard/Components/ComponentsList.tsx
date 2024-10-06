


import { useAppContext } from '@/app/ContextApi'
import React from 'react'
import SingleFavoriteComponent from './SingleFavoriteComponent'
import SingleFavoriteComponentWindow from './SingleFavoriteComponentWindow'


const ComponentsList = () => {

  const { 
    allFavoriteComponentsObject: { allFavoriteComponents },
  } = useAppContext()

  return (
    <div className='w-full bg-slate-50 h-[64%] rounded-lg flex flex-col gap-3'>
      {allFavoriteComponents.map((item, index) => (
        <div key={index}>
          <SingleFavoriteComponentWindow item={ item } />
        </div>
      ))} 
    </div>
  )
}

export default ComponentsList