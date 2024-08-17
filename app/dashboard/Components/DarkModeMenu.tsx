"use client"


import { useAppContext } from '@/app/ContextApi';



const DarkModeMenu = () => {        // Cuando en <DarkMode /> se cambia el openDarkModeMenu aquí se activa este componente
  
  const {
    openDarkModeMenuObject: { openDarkModeMenu, setOpenDarkModeMenu },  // Aquí se recibirá el estado del open y el dark
    darkModeMenuObject: { darkModeMenu, setDarkModeMenu },
  } = useAppContext();

  const changeSelection = (menuItem: any) => {                          // Esta función se activa cuando se clickea un theme u otro
    setDarkModeMenu((prevMenuItems) => 
      prevMenuItems.map((prevMenuItem) => 
        prevMenuItem.id === menuItem.id
          ? { ...prevMenuItem, isSelected: true }                       // y cambia el estado de isSelected para cambiar su color y 
          : { ...prevMenuItem, isSelected: false }                      // en <DarkMode /> renderizar uno u otro.
      )
    )
  }
  
  return (
    <div className={`${ openDarkModeMenu ? "absolute" : "hidden" } p-3 border border-slate-50 select-none pr-10 bg-white rounded-md absolute right-[13px] top-8 flex flex-col py-4 gap-[18px] shadow-md`}>
      {darkModeMenu.map((item) => (
        <div 
          key={item.id}
          onClick={() => changeSelection(item)}
          className={`${ item.isSelected ? "text-sky-500" : "text-slate-400" } flex gap-2 items-center cursor-pointer hover:text-sky-500`}
        >
          {item.icon}
          <span className='text-[12px] font-light'>{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export default DarkModeMenu