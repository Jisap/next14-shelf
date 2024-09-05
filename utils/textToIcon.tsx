import CategoryIcon from '@mui/icons-material/Category';
import RectangleIcon from '@mui/icons-material/Rectangle';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';

export const TextToIcon = ({ text, size }: { text:string; size?:"small" | "medium" | "large" }) => {
  
  switch (text) {
    case "CategoryIcon":
      return <CategoryIcon fontSize={size} className="text-sky-400" />
    
    case "RectangleIcon":
      return <RectangleIcon fontSize={size} className='text-sky-400' />
    
    case "CodeIcon":
      return <CodeOutlinedIcon fontSize={size} className='text-sky-400' />

    case "DeveloperIcon":
      return <DeveloperModeOutlinedIcon fontSize={size} className='text-sky-400' />

    default:
      return <CategoryIcon fontSize={size} className='text-sky-400' />
    
  }
}

