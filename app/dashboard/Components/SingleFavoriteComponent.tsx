import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Component } from '@/app/allData';
import { formatDate } from '../../../utils/formatDate';

const SingleFavoriteComponent = ({ component }: { component:Component }) => {
  console.log(component.createdAt);
  return (
    <div className='grid grid-cols-4 gap-4 text-sm items-center rounded-lg p-2 max-sm:grid-cols-2'>
      
      <span className='hover:text-sky-500 cursor-pointer'>{component.name}</span>
      <span className='max-sm:hidden'>{formatDate({isoString: component.createdAt})}</span>
      
      <span className='justify-self-start max-sm:hidden'>
        <span className='inline-block rounded-2xl bg-sky-500 text-white text-[12px] px-4 py-1 whitespace-nowrap'>
          {component.projectName}
        </span>
      </span>

      <div className='flex gap-2'>
        <div className='bg-sky-500 rounded-full w-7 h-7 flex items-center justify-center hover:bg-sky-600 cursor-pointer'>
          <EditIcon fontSize='small' className='text-white text-[13px]' />
        </div>
        <div className='bg-sky-500 rounded-full w-7 h-7 flex items-center justify-center hover:bg-sky-600 cursor-pointer'>
          <DeleteIcon fontSize='small' className='text-white text-[13px]' />
        </div>
      </div>
    </div>
  )
}

export default SingleFavoriteComponent