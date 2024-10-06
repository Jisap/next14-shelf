


import { useAppContext } from '@/app/ContextApi'
import React from 'react'
import SingleFavoriteComponent from './SingleFavoriteComponent'
import SingleFavoriteComponentWindow from './SingleFavoriteComponentWindow'


const ComponentsList = () => {

  const { 
    allFavoriteComponentsObject: { allFavoriteComponents },
  } = useAppContext()

  return (
    <div className='w-full bg-white rounded-md flex gap-3 items-center justify-between p-3 px-5'>
      {allFavoriteComponents.map((item, index) => (
        <div key={index}>
          <SingleFavoriteComponentWindow item={ item } />
        </div>
      ))} 
    </div>
  )
}

export default ComponentsList