import React from 'react'

const EmptyFavoritePlaceholderWindow = () => {
  return (
    <div className='p-1 gap-5 flex flex-col justify-center pt-[150px] items-center'>
      <div className=''>
        <p className='text-gray-400 w-64 text-center text-[15px]'>
          {`It seems like you haven't set a component as favorite yet...`}
        </p>
      </div>
    </div>
  )
}

export default EmptyFavoritePlaceholderWindow