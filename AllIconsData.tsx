
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

export interface IconData {
  id: number;
  icon: React.ReactNode;
  name:string,
  isSelected: boolean;
}

export const allIconsArray: IconData[] =[
  { id: 1, icon: <CodeOutlinedIcon className="text-[24px]" />, name: "CodeIcon", isSelected: true},
  { id: 2, icon: <DeveloperModeOutlinedIcon className="text-[24px]" />, name: "DeveloperIcon", isSelected: false},
  { id: 3, icon: <WebOutlinedIcon className="text-[24px]" />, name: "WebIcon", isSelected: false},
  { id: 4, icon: <DesktopWindowsIcon className="text-[24px]" />, name: "DesktopIcon", isSelected: false },
  { id: 5, icon: <PhoneIphoneIcon className="text-[24px]" />, name:"PhoneIcon", isSelected: false },
  { id: 6, icon: <TabletIcon className="text-[24px]" />, name: "TabletIcon",isSelected: false },
  { id: 7, icon: <LaptopIcon className="text-[24px]" />, name: "LaptopIcon", isSelected: false },
  { id: 8, icon: <StorageIcon className="text-[24px]" />, name: "StorageIcon", isSelected: false },
  { id: 9, icon: <CloudUploadIcon className="text-[24px]" />, name: "CloudupIcon",isSelected: false },
  { id: 10, icon: <CloudDownloadIcon className="text-[24px]" />, name: "CloudDownIcon", isSelected: false },
  { id: 11, icon: <FolderIcon className="text-[24px]" />, name: "FolderIcon", isSelected: false },
  { id: 12, icon: <FolderOpenIcon className="text-[24px]" />, name: "FolderOpenIcon", isSelected: false },
  { id: 13, icon: <InsertDriveFileIcon className="text-[24px]" />, name: "InserDriveIcon", isSelected: false },
  { id: 14, icon: <BuildIcon className="text-[24px]" />, name: "BuildIcon", isSelected: true },
  { id: 15, icon: <BugReportIcon className="text-[24px]" />, name: "BugReportIcon", isSelected: true },
  { id: 16, icon: <SpeedIcon className="text-[24px]" />, name: "SpeedIcon", isSelected: true },
  { id: 17, icon: <TimelineIcon className="text-[24px]" />, name: "TimeLineIcon", isSelected: true },
  { id: 18, icon: <TuneIcon className="text-[24px]" />,name: "TuneIcon", isSelected: true },
  { id: 19, icon: <SettingsApplicationsIcon className="text-[24px]" />,name: "SettingAppsIcons", isSelected: true },
  { id: 20, icon: <ExtensionIcon className="text-[24px]" />,name: "ExtensionIcon", isSelected: true },
  { id: 21, icon: <ViewModuleIcon className="text-[24px]" />,name: "ViewModulueIcon", isSelected: true },
  { id: 22, icon: <ViewArrayIcon className="text-[24px]" />, name: "ViewArrayIcon", isSelected: true },
  { id: 23, icon: <ViewCarouselIcon className="text-[24px]" />, name: "ViewCarosuelIcon", isSelected: true },
  { id: 24, icon: <ViewColumnIcon className="text-[24px]" />, name: "ViewColumnIcon", isSelected: true },
  { id: 25, icon: <ViewListIcon className="text-[24px]" />, name: "ViewListIcon", isSelected: true },
  { id: 26, icon: <GridOnIcon className="text-[24px]" />, name: "GridOnIcon", isSelected: true },
];

const AllIcons = ({
  allIconsState, 
  setAllIconsState 
} : {
  allIconsState: IconData[];
  setAllIconsState: React.Dispatch<React.SetStateAction<IconData[]>>
}) => {

  const handleClickedIcon = (singleIcon: IconData) => {                   // Recibe un icon seleccionado
    setAllIconsState((prevState) =>                                       // El estado previo del array de icons
      prevState.map((icon) => ({                                          // se mapea
        ...icon,
        isSelected: icon.id === singleIcon.id ? !icon.isSelected : false, // y aquel icon del array que coincida con el seleccionado se le cambia la prop isSelected=true
      }))
    )
  }
 

  return (
    <div className="flex flex-wrap gap-2 text-sky-500 p-3">
      {allIconsState.map((singleIcon, index) => (
        <div
          key={index}
          onClick={() => handleClickedIcon(singleIcon)}
          className={`
            w-9 h-9 shadow-sm border border-slate-50 flex items-center justify-center rounded-lg hover:bg-sky-500 hover:text-white
            ${singleIcon.isSelected ? "bg-sky-500 text-white" : "bg-white text-sky-500"}
          `}
        >
          {singleIcon.icon}
        </div>  
      ))
      }
    </div>
  )
}

export default AllIcons