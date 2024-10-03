import { FavoriteRounded } from "@mui/icons-material"
import CloseIcon from '@mui/icons-material/Close';


const HeaderFavoriteWindow = () => {
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
          sx={{ fontSize: 16 }}
          className="text-slate-400 cursor-pointer"
        /> 
      </div>
    </div>
  )
}

export default HeaderFavoriteWindow