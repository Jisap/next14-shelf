import { useAppContext } from "@/app/ContextApi";
import { Close } from "@mui/icons-material";
import CategoryIcon from '@mui/icons-material/Category';


const HeaderProjectWindow = () => {

  const {
    openAllProjectsWindowObject: { openAllProjectsWindow , setOpenAllProjectsWindow },
    menuItemsObject: { menuItems, setMenuItems },
  } = useAppContext();

  const closeTheWindow = () => {
    setMenuItems((prevMenuItems) =>                       // Cambio el estado de menuItems
      prevMenuItems.map((prevMenuItem) => ({              // Se mapea el estado anterior de menuItems
        ...prevMenuItem,                                  // Se copia el objeto anterior
        isSelected: prevMenuItem.id === menuItems[0].id   // Se cambia el valor de isSelected del primer elemento de menuItems true y los demás false
      }))
    )
    setOpenAllProjectsWindow(false)
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-[30px] h-[30px] bg-sky-200 rounded-full flex items-center justify-center">
          <CategoryIcon 
            sx={{ fontSize: 17 }}
            className="text-sky-400 text-[17px]"
          />
        </div>

        <span className="text-xl font-bold">All Projects</span>
      </div>

      <div>
        <Close 
          onClick={closeTheWindow}
          sx={{ fontSize: 16 }}
          className="text-slate-400 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default HeaderProjectWindow