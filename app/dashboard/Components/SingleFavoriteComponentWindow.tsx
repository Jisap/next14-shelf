
import { Component } from '../../allData';

const SingleFavoriteComponentWindow = ({ item }: {item: Component}) => {
  return (
    <div className='w-full bg-white rounded-md flex gap-3 items-center justify-between p-3 px-5'>
      <div className='flex gap-3 items-center'>
        {/* Blue circle */}
        <div>
          <div className='rounded-full w-7 h-7 flex items-center justify-center bg-sky-500' />
        </div>
        {/* Component name */}
        <div className='flex flex-col'>
          <span className='font-bold cursor-pointer hover:text-sky-500'>
            {item.name}
          </span>
          <div>
            <span className='text-[11px] p-1 px-2 bg-sky-100  text-sky-500 rounded-lg'>
              {item.projectName}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleFavoriteComponentWindow