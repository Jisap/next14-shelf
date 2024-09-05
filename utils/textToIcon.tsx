import CategoryIcon from '@mui/icons-material/Category';
import RectangleIcon from '@mui/icons-material/Rectangle';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletIcon from '@mui/icons-material/Tablet';
import LaptopIcon from '@mui/icons-material/Laptop';
import StorageIcon from '@mui/icons-material/Storage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import BuildIcon from '@mui/icons-material/Build';
import BugReportIcon from '@mui/icons-material/BugReport';
import SpeedIcon from '@mui/icons-material/Speed';
import TimelineIcon from '@mui/icons-material/Timeline';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExtensionIcon from '@mui/icons-material/Extension';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridOnIcon from '@mui/icons-material/GridOn';

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

    case "WebIcon":
      return <WebOutlinedIcon fontSize={size} className='text-sky-400' />

    case "DesktopIcon":
      return <DesktopWindowsIcon fontSize={size} className='text-sky-400' />

    case "PhoneIcon":
      return <PhoneIphoneIcon fontSize={size} className='text-sky-400' />

    case "TabletIcon":
      return <TabletIcon fontSize={size} className='text-sky-400' />

    case "LaptopIcon":
      return <LaptopIcon fontSize={size} className='text-sky-400' />

    case "StorageIcon":
      return <StorageIcon fontSize={size} className='text-sky-400' />

    case "CloudupIcon":
      return <CloudUploadIcon fontSize={size} className='text-sky-400' />

    case "CloudDownIcon":
      return <CloudDownloadIcon fontSize={size} className='text-sky-400' />
    
    case "FolderIcon":
      return <FolderIcon fontSize={size} className='text-sky-400' />

    case "FolderOpenIcon":
      return <FolderOpenIcon fontSize={size} className='text-sky-400'/>

    case "InserDriveIcon":
      return <InsertDriveFileIcon fontSize={size} className='text-sky-400' />

    case "BuildIcon":
      return <BuildIcon fontSize={size} className='text-sky-400' />

    case "BugReportIcon":
      return <BugReportIcon fontSize={size} className='text-sky-400' />

    case "BugReportIcon":
      return <BugReportIcon fontSize={size} className='text-sky-400' />

    case "SpeedIcon":
      return <SpeedIcon fontSize={size} className='text-sky-400' />

    case "TimeLineIcon":
      return <TimelineIcon fontSize={size} className='text-sky-400' />

    case "TuneIcon":
      return <TuneIcon fontSize={size} className='text-sky-400' />

    case "SettingAppsIcons":
      return <SettingsApplicationsIcon fontSize={size} className='text-sky-400' />

    case "ExtensionIcon":
      return <ExtensionIcon fontSize={size} className='text-sky-400' />

    case "ViewModulueIcon":
      return <ViewModuleIcon fontSize={size} className='text-sky-400' />

    case "ViewArrayIcon":
      return <ViewArrayIcon fontSize={size} className='text-sky-400' />

    case "ViewCarosuelIcon":
      return <ViewCarouselIcon fontSize={size} className='text-sky-400' />

    case "ViewColumnIcon":
      return <ViewColumnIcon fontSize={size} className='text-sky-400' />

    case "ViewListIcon":
      return <ViewListIcon fontSize={size} className='text-sky-400' />

    case "GridOnIcon":
      return <GridOnIcon fontSize={size} className='text-sky-400' />

    default:
      return <CategoryIcon fontSize={size} className='text-sky-400' />
    
  }
}

