import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useAppContext } from '@/app/ContextApi';
import { useEffect, useRef } from 'react';

const DropDown = () => {

  const {
    dropDownPositionsObject: { dropDownPositions, setDropDownPositions },
    openDropDownObject: { openDropDown, setOpenDropDown },
    openDeleteWindowObject: { openDeleteWindow, setOpenDeleteWindow },
    selectedComponentObject: { selectedComponent, setSelectedComponent },
  } = useAppContext();
  
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node) && 
        openDeleteWindow
      ) {
        setOpenDropDown(false);
        setSelectedComponent(null);
      }
    }

    const handleScroll = () => {
      setOpenDropDown(false);
      setSelectedComponent(null);
    }

    const handleWheel = (event: WheelEvent) => {
      if(event.deltaY !== 0){
        setOpenDropDown(false);
        setSelectedComponent(null);
      }
    }

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    }
  },[setOpenDropDown]);

  const deleteComponentFunction = () => {
    setOpenDeleteWindow(true);
    setOpenDropDown(false);
  }

  return (
    <div
      ref={dropDownRef}
      style={{
        top: dropDownPositions.top + 54,
        left: dropDownPositions.left - 135,
        visibility: openDropDown ? "visible" : "hidden",
      }}
      className="bg-white z-50 px-5 border border-slate-50 fixed py-4 w-[160px] selec-none shadow-md rounded-lg flex flex-col gap-5"
    >
      {/* Edit Icon */}
      <div className='flex gap-1 items-center text-slate-600 cursor-pointer hover:text-sky-500'>
        <EditOutlinedIcon 
          sx={{ fontSize: 21 }}
          className='text-[21px]'
        />
        <span className='text-[14px]'>Edit</span>
      </div>

      {/* Duplicate Icon */}
      <div className='flex gap-1 items-center text-slate-600 cursor-pointer hover:text-sky-500'>
        <ContentCopyIcon 
          sx={{ fontSize: 21 }}
          className='text-[21px]'
        />
        <span className='text-[14px]'>Duplicate</span>
      </div>

      {/* Divider Icon */}
      <hr className='border-t border-slate-200' />

      {/* Remove Icon */}
      <div 
        onClick={deleteComponentFunction}
        className='flex gap-1 items-center text-slate-600 cursor-pointer hover:text-red-500'
      >
        <DeleteOutlineOutlinedIcon 
          sx={{ fontSize: 21 }}
          className='text-[21px]'
        />
        <span className='text-[14px]'>Delete</span>
      </div>
    </div>
  )
}

export default DropDown