

import { SiReact } from "react-icons/si"


export const Logo = () => {



  return (
    
    <div className="flex gap-2 items-center">
      {/* Icon Container */}
      <div className={`bg-sky-500 flex items-center justify-center p-[6px] rounded-md`}>
        {/* Icon */}
        <div className="w-[26px] h-[26px] items-center justify-center flex">
          <SiReact className="text-white text-[22px" />
        </div>
      </div>

      {/* App Name */}
    
          <div className="flex gap-1 text-[22px]">
            <span className={`font-bold text-sky-500`}>
              React
            </span>
            <span className="text-slate-600">
              Shelf
            </span>
          </div>
 
    
    </div>
  )
}