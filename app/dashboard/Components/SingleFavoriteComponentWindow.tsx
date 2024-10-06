
import { Delete, EditRounded } from '@mui/icons-material';
import { Component } from '../../allData';

const SingleFavoriteComponentWindow = ({ item }: {item: Component}) => {
  return (
    <div className='w-full bg-white rounded-md flex gap-3 items-center justify-between p-3 px-5'>
      <div className='flex gap-3 items-center'>
        {/* Blue circle */}
        <div>
          <div className='w-[10px] h-[10px] bg-sky-500 rounded-full flex items-center justify-center' />
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

      {/* Action Buttons */}
      <div className='flex gap-2 items-center'>
        {/* Edit Button */}
        <div
          //onClick={editTheProjectClicked}
          className='rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300'
        >
          <EditRounded
            className='text-slate-400'
            sx={{ fontSize: 15 }}
          />
        </div>
        {/* Delete Button */}
        <div>
          <div
            //onClick={openTheDeleteWindow}
            className='rounded-full w-7 h-7 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300'
          >
            <Delete
              className='text-slate-400'
              sx={{ fontSize: 15 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleFavoriteComponentWindow