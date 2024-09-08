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

export const TextToIcon = ({ 
  text,
  size,
  fontSize,
  className
}:{
  text:string;
  size?:"small" | "medium" | "large";
  fontSize?:number;
  className?:string;
}) => {
  
  switch (text) {
    case "CategoryIcon":
      return (
        <CategoryIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size} 
          className={`text-sky-400 ${className}`}
        />
      )
    
    case "RectangleIcon":
      return (
        <RectangleIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size} 
          className={`text-sky-400 ${className}`}
        />
      )
    
    case "CodeIcon":
      return (
        <CodeOutlinedIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "DeveloperIcon":
      return (
        <DeveloperModeOutlinedIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "WebIcon":
      return (
        <WebOutlinedIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "DesktopIcon":
      return (
        <DesktopWindowsIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "PhoneIcon":
      return (
        <PhoneIphoneIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "TabletIcon":
      return (
        <TabletIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "LaptopIcon":
      return (
        <LaptopIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "StorageIcon":
      return (
        <StorageIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "CloudupIcon":
      return (<CloudUploadIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "CloudDownIcon":
      return (
        <CloudDownloadIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)
    
    case "FolderIcon":
      return (
        <FolderIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "FolderOpenIcon":
      return (
        <FolderOpenIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`}/>)

    case "InserDriveIcon":
      return (
        <InsertDriveFileIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "BuildIcon":
      return (
        <BuildIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "BugReportIcon":
      return (
        <BugReportIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "BugReportIcon":
      return (
        <BugReportIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "SpeedIcon":
      return (
        <SpeedIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "TimeLineIcon":
      return (
        <TimelineIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "TuneIcon":
      return (
        <TuneIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "SettingAppsIcons":
      return (
        <SettingsApplicationsIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "ExtensionIcon":
      return (
        <ExtensionIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "ViewModulueIcon":
      return (
        <ViewModuleIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "ViewArrayIcon":
      return (
        <ViewArrayIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "ViewCarosuelIcon":
      return (
        <ViewCarouselIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "ViewColumnIcon":
      return (
        <ViewColumnIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "ViewListIcon":
      return (
        <ViewListIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    case "GridOnIcon":
      return (
        <GridOnIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)

    default:
      return (
        <CategoryIcon 
          sx={{ fontSize: fontSize }}
          fontSize={size}
          className={`text-sky-400 ${className}`} />)
    
  }
}

