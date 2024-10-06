import { useAppContext } from "@/app/ContextApi";
import { FavoriteRounded } from "@mui/icons-material"
import CloseIcon from '@mui/icons-material/Close';


const HeaderFavoriteWindow = () => {

  const {
    openAllFavoriteWindowObject: { openAllFavoriteWindow, setOpenAllFavoriteWindow },
    selectedComponentObject: { selectedComponent, setSelectedComponent },
    menuItemsObject: { menuItems, setMenuItems },
  } = useAppContext();

  const closeTheWindow = () => {
    const newMenuItem = menuItems.map((item) => {
      return { ...item, isSelected: false }
    })
    newMenuItem[0].isSelected = true
    setMenuItems(newMenuItem)
    setSelectedComponent(null)
    setOpenAllFavoriteWindow(false)
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center">
          <FavoriteRounded 
            sx={{ fontSize: 17 }}
            className="text-sky-400 text-[17px]"
            />
        </div>
        <span className="text-lg font-bold">Favorite Components</span>
      </div>
      <div>
        <CloseIcon 
          onClick={closeTheWindow}
          sx={{ fontSize: 16 }}
          className="text-slate-400 cursor-pointer"
        /> 
      </div>
    </div>
  )
}

export default HeaderFavoriteWindow