import { useAppContext } from "@/app/ContextApi"
import { Close } from "@mui/icons-material"





const ComponentsNumber = () => {

  const {
    allFavoriteComponentsObject: { allFavoriteComponents },
    isLoadingObject: {isLoading},
    selectedProjectToFilterObject: {
      selectedProjectToFilter,
      setSelectedProjectToFilter
    }
  } = useAppContext()

  return (
    <div className="mt-11 mb-[13px] flex gap-2 items-center justify-between text-[13px]">
      <div className="flex gap-1">
        <span className="text-slate-400">You have set</span>
        <span className="text-sky-500 font-semibold">{allFavoriteComponents.length}</span>
        <span className="text-slate-400">components as favorite!</span>
      </div>
      {selectedProjectToFilter && (
        <div>
          <span className="text-slate-400">You are filtering by :  </span>
          <span className="text-[12px] rounded-lg bg-sky-100  text-sky-500 p-[6px] px-2">
            {selectedProjectToFilter}
            <Close 
              onClick={() => setSelectedProjectToFilter("")}
              sx={{ fontSize: 16 }}
              className="text-sky-500 pl-1 cursor-pointer"
            />
          </span>
        </div>
      )}
    </div>
  )
}

export default ComponentsNumber