import CategoryIcon from '@mui/icons-material/Category';
import RectangleIcon from '@mui/icons-material/Rectangle';

export const TextToIcon = ({ text, size }: { text:string; size?:"small" | "medium" | "large" }) => {
  
  switch (text) {
    case "CategoryIcon":
      return <CategoryIcon fontSize={size} className="text-sky-400" />
    
    case "RectangleIcon":
      return <RectangleIcon fontSize={size} className='text-sky-400' />

    default:
      return <CategoryIcon fontSize={size} className='text-sky-400' />
    
  }
}

